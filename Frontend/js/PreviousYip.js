const previousYearBtns = document.querySelectorAll('.pre-btn-ele');
let currentYear = 2022; // Set the current year
const preYipFullPreviewCont = document.getElementById("pre-yip-full-prev")
const img1 = document.querySelector('.tent-1')
const img2 = document.querySelector('.tent-2')
const sectionPara = document.querySelector('.section__subtitle')
const mainh1 = document.querySelector('.pre-main-h')
 
const PreYipData = [
    {
        year:2022,
        img1:"https://yip.iitkgp.ac.in/static/yip_22.jpeg",
        img2:"./images/PYimg/img23.jpg",
        mainh1:"YIP 2022",
        link:"/coffeeTableBooks/yip22.pdf",
        text:'The Young Innovators Program 2022 at IIT Kharagpur witnessed an impressive outreach, encompassing over 1500 schools globally. This remarkable initiative garnered participation from a diverse cohort of 3000 students hailing from countries such as India,Denmark, Abu Dhabi, Malaysia, Singapore, and Saudi Arabia. Notably, the top 31 schools that advanced to the second round were accorded an invaluable opportunity for a three-day visit to IIT Kharagpur. During this immersive experience, students were immersed in the rich scientific milieu of the institution, culminating in the presentation of their innovative models before esteemed researchers and distinguished guests. Ultimately, the Bhartiyam International School emerged as the winner, while the Ridge Valley School secured the position of runners-up, showcasing exceptional talent and ingenuity in this global academic platform'
    },
    {
        year:2019,
        img1:"https://yip.iitkgp.ac.in/static/gallery/DSC_5146.jpg",
        img2:"./images/PYimg/2.png",
        mainh1:"Yip 2019",
        link:"/coffeeTableBooks/yip19.pdf",
        text:'The Young Innovators Program 2023 at IIT Kharagpur achieved a significant milestone, engaging over 1600 schools from around the world. This extraordinary event attracted participation from a diverse group of 3200 students representing countries such as India, Germany, UAE, Thailand, Australia, and the United Kingdom. Impressively, the top 35 schools that progressed to the second round were offered a prestigious three-day visit to IIT Kharagpur. During this enriching experience, students were fully immersed in the institutions vibrant scientific environment, culminating in the presentation of their cutting-edge projects to prominent researchers and honored guests. Ultimately, the Global International School emerged as the champion, while the Green Valley School claimed the runners-up position, demonstrating remarkable creativity and innovation on this global academic stage.'
    },
    {
        year:2018,
        img1:"https://yip.iitkgp.ac.in/static/gallery/DSC_4668.jpg",
        img2:"./images/PYimg/1.png",
        mainh1:"YIP 2018",
        link:"/coffeeTableBooks/yip18.pdf",
        text:'The Young Innovators Program 2024 at Stanford University marked a significant event, drawing participation from over 2000 schools across the globe. This inspiring initiative attracted 4000 students from countries like the United States, Canada, Japan, Brazil, South Africa, and the United Arab Emirates. The top 40 schools that advanced to the final round were given the exclusive opportunity to spend three days at Stanford University. Throughout this immersive experience, students were engaged in the universitys dynamic research environment, culminating in the presentation of their groundbreaking projects to leading scientists and distinguished industry professionals. In the end, Horizon International School emerged victorious, with Maple Ridge Academy securing the runners-up spot, highlighting exceptional talent and innovative thinking on this prestigious global platform.'
    },
    {
        year:2017,
        img1:"https://yip.iitkgp.ac.in/static/gallery/DSC_4796.jpg",
        img2:"./images/PYimg/4.png",
        mainh1:"Yip 2017",
        link:"/coffeeTableBook/yip17.pdf",
        text:'The Young Innovators Program 2022 at IIT Kharagpur witnessed an impressive outreach, encompassing over 1500 schools globally. This remarkable initiative garnered participation from a diverse cohort of 3000 students hailing from countries such as India, Denmark, Abu Dhabi, Malaysia, Singapore, and Saudi Arabia. Notably, the top 31 schools that advanced to the second round were accorded an invaluable opportunity for a three-day visit to IIT Kharagpur. During this immersive experience, students were immersed in the rich scientific milieu of the institution, culminating in the presentation of their innovative models before esteemed researchers and distinguished guests. Ultimately, the Bhartiyam International School emerged as the winner, while the Ridge Valley School secured the position of runners-up, showcasing exceptional talent and ingenuity in this global academic platform'
    },

    
]

 // Function to set the button color based on the year
const setButtonColors = () => {
    previousYearBtns.forEach((btn, index) => {
        const year = parseInt(btn.textContent.trim());

        if (year === currentYear) {
            btn.classList.remove('bg-[#bad3d2]');
            btn.classList.add('bg-[#26A69A]');
            
            // Find the correct data based on the current year
            const dataIndex = PreYipData.findIndex(data => data.year === currentYear);

            if (dataIndex !== -1) {
                img1.src = PreYipData[dataIndex].img1;
                img2.src = PreYipData[dataIndex].img2;
                sectionPara.textContent = PreYipData[dataIndex].text;
                mainh1.textContent = PreYipData[dataIndex].mainh1;
                 
                document.getElementById("myLink").setAttribute("href", `${PreYipData[dataIndex].link}`);

            }
        } else {
            btn.classList.remove('bg-[#26A69A]');
            btn.classList.add('bg-[#bad3d2]');
        }
    });
};

// Initial color setting based on the current year
setButtonColors();

// Add click event listener to each button
previousYearBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Update current year based on clicked button
        currentYear = parseInt(btn.textContent.trim());
         if(window.innerWidth>500){
            animateImages()

         }
         else{
            img1.style.opacity = 0.4;
            img1.style.transition = "transform 1s ease-in-out, opacity 0.2s ease-in-out";


            setTimeout(() => {
                img1.style.opacity = 1
                // img1.style.transition = "none";

            }, 200);
         }
        animatePreviousYipCard()
         sectionPara.style.opacity = "0"
         
          
        // animatPreYipPara()
        // Set the button colors and update content accordingly
        setButtonColors();
    });
});
 





const animatePreviousYipCard = () => {
    mainh1.style.opacity = "0"
    mainh1.style.transition = "none";  // Reset any previous transitions
    mainh1.style.transform = "translateY(0)";
    ;  // Reset opacity
      

    // Force reflow to ensure the reset properties take effect
    mainh1.offsetHeight;

    mainh1.style.transition = "all 0.5s ease-in-out";
    // mainh1.style.color = "#26A69A";
    mainh1.style.transform = "translateY(-10px)";
    mainh1.style.opacity = "1";  // Fade out
     
   setTimeout(() => {
    animatPreYipPara()
   },100);
     
};

const animatPreYipPara = () =>{
    sectionPara.style.transition = "none";  // Reset any previous transitions
    sectionPara.style.transform = "translateY(0)";
    ;  // Reset opacity
    sectionPara.offsetHeight;
    sectionPara.style.transition = "all 0.5s ease-in-out";
    sectionPara.style.transform = "translateY(-10px)";
    sectionPara.style.opacity = "1";  // Fade out
}

 


const animateImages = () => {
    // Reset any previous transitions and transformations
    img1.style.transition = "none";
    img2.style.transition = "none";
    img1.style.transform = "translateX(-70%) translateY(-50%)";
    img2.style.transform = "translateX(20%) translateY(-25%)";
    img1.style.opacity = "1";
    img2.style.opacity = "1";

    // Force reflow to ensure the reset properties take effect
    img1.offsetHeight;
    img2.offsetHeight;

    // Apply the new transition for both images
    img1.style.transition = "transform 0.9s ease-in-out, opacity 0.5s ease-in-out";
    img2.style.transition = "transform 0.9s ease-in-out, opacity 0.5s ease-in-out";

    // Move the images to the right (translateX) and fade out
    img1.style.transform = "translateX(-80%) translateY(-50%)";
    img2.style.transform = "translateX(30%) translateY(-25%)";
    img1.style.opacity = "0";
    img2.style.opacity = "0";

    // After the initial animation, reset the images back to their original position
    setTimeout(() => {
        img1.style.transition = "transform 0.9s ease-in-out, opacity 0.5s ease-in-out";
        img2.style.transition = "transform 0.9s ease-in-out, opacity 0.5s ease-in-out";

        img1.style.transform = "translateX(-70%) translateY(-50%)";
        img2.style.transform = "translateX(20%) translateY(-25%)";
        img1.style.opacity = "1";
        img2.style.opacity = "1";
    }, 600);
};




document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
