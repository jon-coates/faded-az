// Prerenders each known route to static HTML after the client build, so
// crawlers and link-preview bots get real markup instead of an empty
// `<div id="root">`. Run after `vite build` (client) and
// `vite build --ssr src/entry-server.jsx` (server) have both completed —
// see the `build` script in package.json.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = join(root, 'dist')
const ssrDir = join(root, 'ssr-tmp')

const ROUTES = ['/', '/book', '/services', '/find-us', '/reviews']

const template = readFileSync(join(distDir, 'index.html'), 'utf-8')
const { render } = await import(join(ssrDir, 'entry-server.js'))

for (const route of ROUTES) {
  const { html, helmet } = render(route)

  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ')

  const page = template
    .replace('<!--ssr-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outPath =
    route === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.slice(1), 'index.html')

  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, page)
  console.log(`prerendered ${route} -> ${outPath.replace(root + '/', '')}`)
}

rmSync(ssrDir, { recursive: true, force: true })
