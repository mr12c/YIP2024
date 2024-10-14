const previousYearBtns = document.querySelectorAll('.pre-btn-ele');
let currentYear = 2023; // Set the current year
const preYipFullPreviewCont = document.getElementById("pre-yip-full-prev")
const img1 = document.querySelector('.tent-1')
const img2 = document.querySelector('.tent-2')
const sectionPara = document.querySelector('.section__subtitle')
const mainh1 = document.querySelector('.pre-main-h')
 
const PreYipData = [
    {
        year:2023,
        img1:"https://yip.iitkgp.ac.in/static/yip_22.jpeg",
        img2:"./images/PYimg/img23.jpg",
        mainh1:"YIP 2023",
        link:"/coffeeTableBooks/yip23.pdf",
        text:'The Young Innovators Program 2023 at IIT Kharagpur saw an impressive participation of 3000 students from over 1500 schools across the globe, including countries such as India, Denmark, Abu Dhabi, Malaysia, Singapore, and Saudi Arabia. The top 32 schools that progressed to the second round were given the opportunity to visit IIT Kharagpur for a three-day immersive experience. During this time, students were introduced to the rich scientific environment of the institution and had the chance to present their innovative projects to a panel of esteemed researchers and distinguished guests.In the Senior Division, the winning team was Three Mind Mavericks from L AGURCHAND MANMULL JAIN SCHOOL. The first runner-up was Team Sense-able from KiiT International School, followed by Team Green Innovators from VIVEKANANDA MISSION SCHOOL, JOKA, who secured the second runner-up position. In the Junior Division, Team The Three Blues Lakshmipat from Singhania Academy NATIONAL SCHOOL claimed the top spot. The first runner-up was Team Wastewarriors from Heritage Xperential Learning School, while Team Green Nexus from Spring Meadows Public School finished as the second runner-up.'
    },
    
    {
        year:2022,
        img1:"https://yip.iitkgp.ac.in/static/yip_22.jpeg",
        img2:"./images/PYimg/img23.jpg",
        mainh1:"YIP 2022",
        link:"https://yip.iitkgp.ac.in/static/yip22.pdf",
        text:'The Young Innovators Program 2022 at IIT Kharagpur witnessed an impressive outreach, encompassing over 1500 schools globally. This remarkable initiative garnered participation from a diverse cohort of 3000 students hailing from countries such as India, Denmark, Abu Dhabi, Malaysia, Singapore, and Saudi Arabia. Notably, the top 31 schools that advanced to the second round were accorded an invaluable opportunity for a three-day visit to IIT Kharagpur. During this immersive experience, students were immersed in the rich scientific milieu of the institution, culminating in the presentation of their innovative models before esteemed researchers and distinguished guests. Ultimately, the Bhartiyam International School emerged as the winner, while the Ridge Valley School secured the position of runners-up, showcasing exceptional talent and ingenuity in this global academic platform'
    },
    {
        year:2019,
        img1:"https://yip.iitkgp.ac.in/static/gallery/DSC_5146.jpg",
        img2:"./images/PYimg/2.png",
        mainh1:"Yip 2019",
        link:"https://yip.iitkgp.ac.in/static/yip19.pdf",
        text:'The third edition of YIP was a huge success, reaching out to 1200+ schools. The event saw the participation of 800+ teams and more than 2400 students with great enthusiasm and zeal. Teams from Singapore, UAE, Indonesia, Malaysia, and Saudi Arabia participated in the event in 2019, and some of them successfully made it to the semi-finals too and visited IIT Kharagpur.'
    },
    {
        year:2018,
        img1:"https://yip.iitkgp.ac.in/static/gallery/DSC_4668.jpg",
        img2:"./images/PYimg/1.png",
        mainh1:"YIP 2018",
        link:"https://yip.iitkgp.ac.in/static/yip18.pdf",
        text:`The Young Innovators' Program of 2018 at the esteemed IIT KGP showcased an impressive outreach, reaching over 1000 schools across the country. The competition witnessed fierce competition, with two teams hailing from Singapore making it to the semifinals. Among the top 24 schools that had the privilege to visit the esteemed campus of IIT KGP, an experience that undoubtedly left a lasting impression on these young minds. Kaanger Valley Academy from Raipur emerged as the winners, showcasing their creativity and innovation. The Crossword School from Guntur and Tarapore School from Jamshedpur secured the runner-up positions, further highlighting the program's commitment to nurturing young minds and fostering innovation in the field of education.`
    },
    {
        year:2017,
        img1:"https://yip.iitkgp.ac.in/static/gallery/DSC_4796.jpg",
        img2:"./images/PYimg/4.png",
        mainh1:"Yip 2017",
        link:"https://yip.iitkgp.ac.in/static/yip17.pdf",
        text:`The Young Innovators' Program of 2017 IIT KGP boasted a nationwide reach, drawing the participation of schools from various corners of the country. As a pivotal component of the program's third round, a select group of 24 schools were given the unique opportunity to showcase their projects at the revered institution. This interaction extended beyond mere presentations, allowing the students to engage directly with distinguished professors from IIT KGP. Furthermore, the attendees were enriched by a comprehensive robotics workshop and an extensive campus tour, affording them firsthand exposure to the expansive academic expanse and state-of-the-art laboratories that distinguish IIT KGP as a leading educational institution in India.`
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
