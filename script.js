//menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () =>{
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// Open popup
document.getElementById("enquiryBtn").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "flex";
});

// Close popup
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

// Optional: Close popup on outside click
window.addEventListener("click", function (e) {
  const popup = document.getElementById("popupForm");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});