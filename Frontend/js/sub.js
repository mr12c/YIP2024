const teamDataString = localStorage.getItem('teamData');
  
// Parse it back into an object
const teamData = teamDataString ? JSON.parse(teamDataString) : null;

// If no teamData or user is not logged in, redirect to login page
if (!teamData) {
    window.location.href = 'login.html';
}


document.getElementById('team-name').innerHTML = teamData.name;
document.getElementById('password').innerHTML = teamData.password;
