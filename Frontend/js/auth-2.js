const switchLoginBtn = document.querySelector("#switch-login-btn");
const switchSignupBtn = document.querySelector("#switch-signup-btn");
const signupBox = document.querySelector(".signup-box");
const loginBox = document.querySelector(".login-box");
const loginBtn = document.querySelector("#login-btn");
const signupBtn = document.querySelector("#signup-btn");


switchSignupBtn.addEventListener("click", () => {
  signupBox.classList.remove("move-left");
  loginBox.classList.add("move-right");
});

switchLoginBtn.addEventListener("click", () => {
    signupBox.classList.add("move-left");
    loginBox.classList.remove("move-right");
});


loginBtn.addEventListener('click', async (ev)=> {
    ev.preventDefault();
    console.log("Login button clicked");

    const team = {
        teamName : document.querySelector("#login-team-name").value,
        password : document.querySelector("#login-password").value

    }
    // console.log(team.teamName + "\n" + team.password);
    try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(team),
        });
  
        const result = await response.text();
        console.log("response = " + result);
        if (response.ok){
          alert('Login successful');
          error.textContent=""
        } else {
          console.log(result)
          error.textContent = extractErrorMessage(result);
        }
      } catch (error) {
        alert('line 49 : Failed to register. Please try again.');
        console.log(error);
      }
})


signupBtn.addEventListener('click', async (ev)=> {
    ev.preventDefault();
    const teamName = document.querySelector("#signup-team-name").value;
    const password = document.querySelector("#signup-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    console.log("Signup button clicked");
    if(confirmPassword === password){
        const team = {
            teamName : document.querySelector("#signup-team-name").value,
            password : document.querySelector("#signup-password").value,
        }
        console.log(team.teamName + "\n" + team.password);
        try {
            const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(team),
            });
    
            const result = await response.text();
            if (response.ok){
            alert('Signup successful');
            // error.textContent=""
            } else {
            alert(result)
            error.textContent = extractErrorMessage(result);
            }
        } catch (error) {
            alert('Failed to signup. Please try again.');
            console.log(error);
        }
    }else{
        alert('Password and confirm password do not match');
    }


})

