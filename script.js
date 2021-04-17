// Get selectors
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const formSegments = document.querySelectorAll(".form__segment");

// Assign variables
let currentActive = 1;

// Add Event listeners
nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
  updateForm(currentActive);
});

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateProgress();
  updateForm(currentActive);
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
    nextBtn.innerHTML = "Next";
  } else if (currentActive === circles.length) {
    nextBtn.innerHTML = "Submit";
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    nextBtn.innerHTML = "Next";
  }
};

const updateForm = (currentActive) => {
  let activeSegment;
  switch (currentActive) {
    case 1:
      activeSegment = "seg1";
      break;
    case 2:
      activeSegment = "seg2";
      break;
    case 3:
      activeSegment = "seg3";
      break;
    case 4:
      activeSegment = "seg4";
      break;
  }

  removeCurrentClasses();
  removeShowClasses();
  document.getElementById(activeSegment).classList.remove("hide");
  document.getElementById(activeSegment).className = "form__segment current";
};

const removeCurrentClasses = () => {
  formSegments.forEach((segment) => {
    segment.classList.remove("current");
  });
};

const removeShowClasses = () => {
  formSegments.forEach((segment) => {
    segment.classList.remove("form__segment");
    segment.classList.add("hide");
  });
};

