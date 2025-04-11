import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BookingButton() {
  return (
      <a
        href="http://fadedaz.gettimely.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-4 bg-black text-white border-white/50 border-2 uppercase font-bold rounded-lg tracking-wider shadow-md hover:bg-slate-700 hover:text-white hover:-translate-y-1 transition-all"
      >
        Book Appointment
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </a>
  );
}
