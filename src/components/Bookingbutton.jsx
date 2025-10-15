import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/bbh-sans-hegarty"; // Import BBH Sans Hegarty font

export default function BookingButton() {
  return (
      <a
        href="https://bookings.gettimely.com/fadedaz/book"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 text-black dark:text-red-50 border-black/50 text-xl font-bold font-bbh rounded-lg shadow-lg backdrop-blur-sm uppercase tracking-wider bg-red-600/90 dark:bg-red-500/90 hover:bg-red-700/95 dark:hover:bg-red-600/95 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 active:shadow-md transition-all duration-300 ease-in-out"
      >
        Book Now
        <span className="ml-2 inline-block animate-pulse-horizontal">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </a>
  );
}
