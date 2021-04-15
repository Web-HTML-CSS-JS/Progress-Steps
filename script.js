// Get selectors
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Assign variables
let currentActive = 1;

// Add Event listeners
nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateProgress();
});

// Add Functions
const updateProgress = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.add('btn--outline')
    nextBtn.disabled = false;
  }
};
