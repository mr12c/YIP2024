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













const initSlider = () => {
  const imageList = document.querySelector(".unique-slider-wrapper .unique-image-list");
  const slideButtons = document.querySelectorAll(".unique-slider-wrapper .unique-slide-button");
  const sliderScrollbar = document.querySelector(".unique-container .unique-slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".unique-scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  console.log(slideButtons)
  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "unique-prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });
   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);



