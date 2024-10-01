
document.getElementById('save-btn').addEventListener('click', async (e) => {
  e.preventDefault();  
  
  const saveButton = document.getElementById('save-btn');
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
    name: document.querySelector('input[name="stud-3-name"]').value,
    contactNo: document.querySelector('input[name="stud-3-contact"]').value,
    emailId: document.querySelector('input[name="stud-3-email"]').value,
    grade: document.querySelector('select[name="stud-3-grade"]').value,
  };

  // Send data to API
  try {
    const response = await fetch('http://localhost:3000/api/v1/team/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ team, school, mentor, s1, s2, s3 }),
    });

    const result = await response.text();
    console.log(result);
    if (response.ok){
      alert('Registration successful');
    } else {
      console.log(result)
      alert('Registration failed');
    }
  } catch (error) {
    alert('Failed to register. Please try again.');
    console.log(error);
  } finally {
    saveButton.disabled = false;
    saveButton.innerHTML = 'Save & Proceed to Payment';
  }
});
