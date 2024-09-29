const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const copyIcons = document.querySelectorAll('.ri-file-copy-line');

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 500,
});

// stats container
ScrollReveal().reveal(".stats__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats__card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


// copy email

// Select all copy buttons
const copyButtons = document.querySelectorAll('.copy-button');

// Add event listener to each copy button
for (let copyIcon of copyIcons) {
  copyIcon.addEventListener('click', (event) => {
    // Prevent the default action
    event.preventDefault();

    // Get the text to copy from the data attribute
    const button = copyIcon.firstElementChild;
    const textToCopy = copyIcon.parentElement.innerText;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show the 'Copied' button for 1.5 seconds
      button.style.display = "inline";
      button.innerText = 'Copied';
      setTimeout(() => {
        button.style.display = "none"; // Reset button text
      }, 1000);
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  });
}





const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".controls i:nth-child(1)");
const rightArrow = document.querySelector(".controls i:nth-child(3)"); // Adjusted to select the correct right arrow
const dotsWrapper = document.querySelector(".dots");
const dots = document.querySelectorAll(".dots span");

let slideIndex = 0;

const setIndex = () => {
  document.querySelector(".dots .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -100}%)`;
  dotsWrapper.children[slideIndex].classList.add("active");
};

dots.forEach((dot, ind) => {
  dot.addEventListener("click", () => {
    slideIndex = ind;
    setIndex();
  });
});

leftArrow.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.length - 1;
  setIndex();
});

rightArrow.addEventListener("click", () => {
  slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0;
  setIndex();
});

setInterval(() => {
  rightArrow.click();
}, 7000);
