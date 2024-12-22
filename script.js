const modal = document.querySelector(".Main_modal_div");
const overlay = document.querySelector(".overlay");

// Function to open the modal
const openmodal = () => {
  console.log("Modal Is Open");
  modal.classList.add("scale-100");
  modal.classList.remove("scale-0");
  overlay.classList.add("opacity-100", "pointer-events-auto");
  overlay.classList.remove("opacity-0", "pointer-events-none");
};

// Function to close the modal
const closemodal = () => {
  console.log("Modal Is Closed");
  modal.classList.add("scale-0");
  modal.classList.remove("scale-100");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100", "pointer-events-auto");
};
