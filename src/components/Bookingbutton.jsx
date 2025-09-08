import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BookingButton() {
  return (
      <a
        href="https://bookings.gettimely.com/fadedaz/book"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-white/90 text-black border-black/50 border-2 text-2xl font-bold font-dmserif rounded-full shadow-md hover:bg-zinc-200 hover:text-zinc-900 hover:-translate-y-1 active:bg-zinc-400 active:text-black transition-all"
      >
        Book Appointment
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </a>
  );
}
