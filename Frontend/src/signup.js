



const teamDataString = localStorage.getItem('teamData');
  

const teamData = teamDataString ? JSON.parse(teamDataString) : null;

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
  
document.getElementById('signup-btn').addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get values from the input fields
  const teamName = document.getElementById('team-name').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const loadingSpinner = document.getElementById('signup-btn'); // Spinner element
  const errorDisplay = document.getElementById('error-shower');
  errorDisplay.innerHTML="";
  // Validate the form (simple example)
  if (!teamName || !password || !confirmPassword) {
      errorDisplay.innerHTML="All fields are required";
      return;
  }

  if (password !== confirmPassword) {
      errorDisplay.innerHTML="Confirm Password is not same as Password"
      return;
  }

  const signupData = {
      team_name: teamName,
      password: password
  };
  console.log(signupData);

  try {
      // Show the loading spinner before making the request
      loadingSpinner.innerHTML="Registering...";

      // Send the request
      const response = await fetch('https://yipserver2-0.onrender.com/api/v1/team/register',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(signupData)  // Send the data as JSON
      });
       

      // Hide the loading spinner after receiving the response
      if (response.ok) {
        const data = await response.json();
        console.log(data.data.team);
        showToast('Signup successful')
        loadingSpinner.innerHTML="Sign Up";
        
         
      
    }  
    else {
        const data = await response.json();
        console.error(data.message);
        errorDisplay.innerHTML = data.message
        loadingSpinner.innerHTML="Sign Up";
       
        
    }

      // Handle the response
     
  } catch (error) {
    loadingSpinner.innerHTML="Sign Up";
    console.error(error);
        
    errorDisplay.innerHTML="Something went wrong"   
    loadingSpinner.innerHTML="Login" 
    
      
  }
  finally{
    document.getElementById('team-name').value="";
    document.getElementById('password').value="";
    document.getElementById('confirmPassword').value="";
  }
   
});
