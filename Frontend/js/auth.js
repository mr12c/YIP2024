const addStudBtn = document.querySelector("#add-stud-btn");
const stud1details = document.querySelector('.stud-1-details');
const stud2details = document.querySelector('.stud-2-details');
const stud3details = document.querySelector('.stud-3-details');
const removeStud2btn = document.querySelector('#remove-stud-2-btn');
const removeStud3btn = document.querySelector('#remove-stud-3-btn');
const form = document.querySelector('form');
const readCheckbox = document.querySelector('#read-checkbox');
const instruction = document.querySelector('.instruction');
const saveBtn = document.querySelector('#save-btn');
const h1 = document.querySelector('h1');


// let instructRead = false;
// let stud1display = false;
// let stud2display = false;
let stud3display = false;
let addStudBtnClickCount = 0;

form.addEventListener('click', ()=> {
    if (!readCheckbox.checked){
        alert(`Please read the instructions first and tick mark the checkbox that says "I have read the instructions" at the top.`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
            const intervalId = setInterval(()=>{
                if (instruction.style.backgroundColor === "red") {
                    instruction.style.backgroundColor = ""; 
                } else {
                    instruction.style.backgroundColor = "red"; 
                }
            }, 300);
            setTimeout(() => {
                clearInterval(intervalId);
            }, 2000);
        
        
      
    }
})

function updateAddStudBtnDisplay() {
    if (stud3display) {
        addStudBtn.style.display = 'none';
    } else {
        addStudBtn.style.display = 'grid';
    }
}



addStudBtn.addEventListener('click', ()=> {
    if (stud3display == false){
        stud3details.style.display = "block";
        stud3display = true ;

        document.querySelector('#stud-3-name').required = true;
        document.querySelector('#stud-3-contact').required = true;
        document.querySelector('#stud-3-email').required = true;
        document.querySelector('#stud-3-grade').required = true;
        updateAddStudBtnDisplay()
        
    }
    // else if (stud3display == true){
    //     alert("Maximum 3 students are allowed to participate.");
        
    // }
});



removeStud3btn.addEventListener('click', () => {
    stud3details.style.display = 'none';
    stud3display = false;
        document.querySelector('#stud-3-name').required = false;
        document.querySelector('#stud-3-contact').required = false;
        document.querySelector('#stud-3-email').required = false;
        document.querySelector('#stud-3-grade').required = false;
        updateAddStudBtnDisplay()
})