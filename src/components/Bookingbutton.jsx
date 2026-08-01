import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/bbh-sans-hegarty"; // Import BBH Sans Hegarty font
import { BOOKING_URL, trackBookingClick } from "../lib/analytics";

/**
 * @param {object} props
 * @param {string} props.location Where this button sits, sent to GTM as
 *   `cta_location` so each placement can be reported on separately.
 */
export default function BookingButton({ location = "unknown", label = "Book Now" }) {
  return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBookingClick({ location, label })}
        data-gtm-location={location}
        className="inline-flex items-center px-6 py-3 text-red-950 border-black/50 font-bold font-bbh rounded-lg shadow-lg backdrop-blur-sm uppercase tracking-wider bg-red-500/90 hover:bg-red-600/95 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 active:shadow-md transition-all duration-300 ease-in-out"
      >
        {label}
        <span className="ml-2 inline-block animate-pulse-horizontal">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </a>
  );
}
