var typed = new Typed(".input", {
  strings: [
    "Fatima Zahra.",
    "Full-stack Developer.",
    "Professor.",
    "UX/UI Designer.",
  ],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

// for skills

const skillsCnt = document.getElementsByClassName("skills__content"),
  skillshead = document.querySelectorAll(".skills_header");
console.log(skillshead);
function toggleSkills() {
  let itemClass = this.parentNode.className;
  console.log(itemClass);

  for (i = 0; i > skillsCnt.length; i++) {
    skillsCnt[i].className = "skills__content skills_close";
  }
  if (itemClass === "skills__content skills_close") {
    this.parentNode.className = "skills__content skills_open";
  } else {
    this.parentNode.className = "skills__content skills_close";
  }
}

skillshead.forEach((el) => el.addEventListener("click", toggleSkills));

//projects

let mixerportfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

//active

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((L) => L.classList.remove("active_work"));
  this.classList.add("active_work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));

// contact

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//popup

document.addEventListener("click", (e) => {
  console.log(e.target.classList);
  console.log("Clicked!");
  if (e.target.classList.contains("work__button")) {
    console.log("heello I'm clicked");
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}


// hamb
var ham = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

ham.addEventListener("click", function () {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});
