const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);

// Function to display the current slide with animation
function display(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none'; // Hide all slides initially
        slide.style.opacity = '0.5'; // Reset opacity for the animation
        slide.style.transform = 'translateY(40px)'; // Reset position for the animation
        slide.classList.remove('active'); // Remove active class
    });

    // Show the current slide with animation
    slides[index].style.display = 'flex';
    slides[index].classList.add('active');
    
    // Force reflow to reset animations
    void slides[index].offsetWidth;

    // Reapply animation
    slides[index].style.animation = 'slideIn 1s forwards';
}

// Function to go to the next slide
function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    display(index);
}

// Function to go to the previous slide
function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    display(index);
}

// Event listeners for the buttons
next.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-sliding when clicked
    nextSlide();
    autoSlide = setInterval(nextSlide, 3000); // Restart auto-sliding after click
});

prev.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-sliding when clicked
    prevSlide();
    autoSlide = setInterval(nextSlide, 3000); // Restart auto-sliding after click
});

// Automatically switch to the next slide every 2 seconds
let autoSlide = setInterval(nextSlide, 3000);


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
