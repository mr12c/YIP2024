// const switchLoginBtn = document.querySelector("#switch-login-btn");
// const switchSignupBtn = document.querySelector("#switch-signup-btn");
// const signupBox = document.querySelector(".signup-box");
// const loginBox = document.querySelector(".login-box");
// const loginBtn = document.querySelector("#login-btn");
// const signupBtn = document.querySelector("#signup-btn");


// switchSignupBtn.addEventListener("click", () => {
//   signupBox.classList.remove("move-left");
//   loginBox.classList.add("move-right");
// });

// switchLoginBtn.addEventListener("click", () => {
//     signupBox.classList.add("move-left");
//     loginBox.classList.remove("move-right");
// });


// document.getElementById('login-btn').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent form submission

//   // Get values from the input fields
//   const teamName = document.getElementById('login-team-name').value;
//   const password = document.getElementById('login-password').value;
//   const loadingSpinner = document.getElementById('login-loading-spinner'); // Spinner element

//   // Validate the form (simple example)
//   if (!teamName || !password) {
//       alert('Please fill in all fields.');
//       return;
//   }

//   const loginData = {
//       team_name: teamName,
//       password: password
//   };
//   console.log(loginData);

//   try {
//       // Show the loading spinner before making the request
//       loadingSpinner.style.display = 'block';

//       // Send the request
//       const response = await fetch('http://localhost:4000/api/v1/team/login', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(loginData)  // Send the data as JSON
//       });

//       // Hide the loading spinner after receiving the response
//       loadingSpinner.style.display = 'none';

//       // Handle the response
//       if (response.ok) {
//           const data = await response.json();
//           console.log(data.data.team);
//           alert('Login successful!');
          
//           localStorage.setItem('teamData', JSON.stringify(data?.data?.team)); 
//           console.log('local storage', localStorage.getItem('teamData'))
//       }  
//       else {
//           const data = await response.json();
//           console.error(data.message);
//           alert(data.message);
//       }
//   } catch (error) {
//       console.error(error.response.data.message);
//       loadingSpinner.style.display = 'none'; // Hide spinner in case of error
//       alert(error.response.data.message);
//   }
// });


 

 
// document.getElementById('signup-btn').addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent form submission

//   // Get values from the input fields
//   const teamName = document.getElementById('signup-team-name').value;
//   const password = document.getElementById('signup-password').value;
//   const confirmPassword = document.getElementById('confirm-password').value;
//   const loadingSpinner = document.getElementById('loading-spinner'); // Spinner element

//   // Validate the form (simple example)
//   if (!teamName || !password || !confirmPassword) {
//       alert('Please fill in all fields.');
//       return;
//   }

//   if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//   }

//   const signupData = {
//       team_name: teamName,
//       password: password
//   };
//   console.log(signupData);

//   try {
//       // Show the loading spinner before making the request
//       loadingSpinner.style.display = 'block';

//       // Send the request
//       const response = await fetch('http://localhost:4000/api/v1/team/register',{
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(signupData)  // Send the data as JSON
//       });
//       const data = await response.json();

//       // Hide the loading spinner after receiving the response
//       if(!data.status){
//         alert(data.message);
//         loadingSpinner.style.display = 'none';
//       }
//       else{
//         console.log(data)
//       }

//       // Handle the response
     
//   } catch (error) {
//       alert(error); 
//       console.error('Error during signup:', error);
//       loadingSpinner.style.display = 'none'; // Hide spinner in case of error
      
//   }
// });
