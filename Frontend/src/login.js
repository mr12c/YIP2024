

    const teamDataString = localStorage.getItem('teamData');
  
// Parse it back into an object
const teamData = teamDataString ? JSON.parse(teamDataString) : null;

// If no teamData or user is not logged in, redirect to login page
if (teamData) {
    window.location.href = 'sub.html';
}

const showToast = (message) => {
    const toast = document.getElementById('toast');
    toast.innerHTML=message
    toast.classList.remove('opacity-0');
    toast.classList.add('opacity-100');
  
    // Hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove('opacity-100');
      toast.classList.add('opacity-0');
    }, 3000);
  };


document.getElementById('login-btn').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent form submission
  
    // Get values from the input fields
    const teamName = document.getElementById('team-name').value;
    const password = document.getElementById('password').value;
    const loadingSpinner = document.getElementById('login-btn');
     const errorDisplay = document.getElementById('error-shower');
     errorDisplay.innerHTML="";

  
    // Validate the form (simple example)
    if (!teamName || !password) {
        
         errorDisplay.innerHTML="Please Fill all fields";
         
        return;
    }
  
    const loginData = {
        team_name: teamName,
        password: password
    };
    console.log(loginData);
  
    try {
        // Show the loading spinner before making the request
        loadingSpinner.innerHTML = "Logging.."
        // Send the request
        const response = await fetch('https://yipbackend-2.onrender.com/api/v1/team/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)  // Send the data as JSON
        });
  
        // Hide the loading spinner after receiving the response
        loadingSpinner.style.display = 'Login';
  
        // Handle the response
        if (response.ok) {
            const data = await response.json();
            console.log(data.data.team);

            showToast("Login Successfully")
            
           
            localStorage.setItem('teamData', JSON.stringify(data?.data?.team)); 
        console.log('local storage', localStorage.getItem('teamData'))
         setTimeout(()=>{
             window.location.href = 'sub.html';
              
         },3000)
            
        }  
        else {
            const data = await response.json();
            console.error(data.message);
            errorDisplay.innerHTML = data.message

           
        }
    } catch (error) {
        console.error(error);
        
        errorDisplay.innerHTML="Something went wrong"
         
        
        
    }
    finally{
        loadingSpinner.innerHTML = "Login";
        document.getElementById("team-name").value="";
        document.getElementById("password").value="";
    }
  });
  