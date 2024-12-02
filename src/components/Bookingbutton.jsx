import { useEffect } from "react";

const BookingButton = () => {
  useEffect(() => {
    const initializeTimelyButton = () => {
      if (window.timelyButton) {
        // Initialize the Timely button
        new window.timelyButton("fadedaz", { style: "light" });
      } else {
        console.error("Timely script is not loaded!");
      }
    };

    // Check if the document is fully loaded
    if (document.readyState === "complete") {
      initializeTimelyButton();
    } else {
      // Add event listener to wait for the page load
      window.addEventListener("load", initializeTimelyButton);
      return () => window.removeEventListener("load", initializeTimelyButton); // Cleanup
    }
  }, []);

  return (
    <div>
      {/* Placeholder container for the Timely button */}
      <div id='timely-button-container'></div>
    </div>
  );
};

export default BookingButton;
