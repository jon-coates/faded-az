import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-white text-center py-4 transition-colors duration-300 border-t border-gray-800 dark:border-gray-900">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-2"
      >
        <img src="/faded-az-logo.png" className="max-h-[50px]" alt="Faded AZ Logo" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-400 dark:text-gray-500 transition-colors duration-300"
      >
        &copy; {new Date().getFullYear()} Faded AZ Barbershop. All rights reserved.
      </motion.p>
    </footer>
  );
}

export default Footer; 