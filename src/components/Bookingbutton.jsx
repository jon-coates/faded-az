import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BookingButton() {
  return (
    <a
      href="https://bookings.gettimely.com/fadedaz/book"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center font-mono text-sm font-light tracking-normal bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded transition-colors duration-200"
    >
      Book Now
      <span className="ml-2 inline-block animate-pulse-horizontal">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </a>
  );
}
