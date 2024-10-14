

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
        readCheckbox.scrollIntoView({ block: "center", behavior: 'smooth' });
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
function extractErrorMessage(html) {
  // Create a regex to match the error message right after "Error:" and before any <br>
  const errorRegex = /Error:\s*(.*?)<br>/i;
  
  // Match the regex and extract the error message
  const match = html.match(errorRegex);
  
  if (match && match[1]) {
    return match[1].trim();  // Return the error message
  } else {
    return "No error message found";
  }
}
function areAllFieldsEmpty(obj) {
  // Check if the input is an object and not null
  if (typeof obj !== 'object' || obj === null) {
      return false; // Return false if it's not an object
  }

  // Iterate over each property in the object
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          // Check if the value is not an empty string
          if (obj[key] !== '') {
              return false; // If any field is not an empty string, return false
          }
      }
  }
  return true; // All fields are empty strings
}
document.getElementById('save-btn').addEventListener('click', async (e) => {
  e.preventDefault();
  let infoValid = checkInput();
 
  if(infoValid){
    const saveButton = document.getElementById('save-btn');
    const error = document.querySelector('#info-section-error');
    saveButton.disabled = true;
    saveButton.innerHTML = `<span class="spinner"></span> Saving...`;

    // Collect the data
    const team = {
      name: document.querySelector('input[name="team-name"]').value,
      division: document.querySelector('select[name="team-division"]').value,
      theme: document.querySelector('select[name="prob-theme"]').value,
      problemStatement: document.querySelector('input[name="prob-statement"]').value,
    };

    const school = {
      name: document.querySelector('input[name="school-name"]').value,
      emailId: document.querySelector('input[name="school-email"]').value,
      contactNumber: document.querySelector('input[name="school-contact"]').value,
      state: document.querySelector('input[name="school-state"]').value,
      country: document.querySelector('input[name="school-country"]').value,
    };

    const mentor = {
      name: document.querySelector('input[name="mentor-name"]').value,
      contactNo: document.querySelector('input[name="mentor-contact"]').value,
      emailId: document.querySelector('input[name="mentor-email"]').value,
    };

    const s1 = {
      name: document.querySelector('input[name="stud-1-name"]').value,
      contactNo: document.querySelector('input[name="stud-1-contact"]').value,
      emailId: document.querySelector('input[name="stud-1-email"]').value,
      grade: document.querySelector('select[name="stud-1-grade"]').value,
    };

    const s2 = {
      name: document.querySelector('input[name="stud-2-name"]').value,
      contactNo: document.querySelector('input[name="stud-2-contact"]').value,
      emailId: document.querySelector('input[name="stud-2-email"]').value,
      grade: document.querySelector('select[name="stud-2-grade"]').value,
    };

    const s3 = {
      name: document.querySelector('input[name="stud-3-name"]').value || "",
      contactNo: document.querySelector('input[name="stud-3-contact"]').value || "",
      emailId: document.querySelector('input[name="stud-3-email"]').value || "",
      grade: document.querySelector('select[name="stud-3-grade"]').value || "",
    };
    let finalTeam = null;
    if(!stud3display){
            finalTeam = {team,school,mentor,s1,s2}
    }
    else{
            finalTeam = {team,school,mentor,s1,s2,s3}
    }

    // Send data to API
    try {
      const response = await fetch('http://localhost:3000/api/v1/team/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalTeam),
      });

      const result = await response.text();
      console.log(result);
      if (response.ok){
        alert('Registration successful');
        error.textContent=""
      } else {
        console.log(result)
        error.textContent = extractErrorMessage(result);
      }
    } catch (error) {
      alert('Failed to register. Please try again.');
      console.log(error);
    } finally {
      saveButton.disabled = false;
      saveButton.innerHTML = 'Save & Proceed to Payment';
    }
  }
  
});
