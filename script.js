// U5223-1368

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const preferences = Array.from(document.querySelectorAll('input[name="preferences"]:checked'))
                             .map(pref => pref.value);
    
    // fields are completed validation
    if (!name || !email || !eventDate) {
        alert("All fields are required!");
        return;
    }

    // Registration submitted to display on page
    const displayArea = document.getElementById('displayArea');
    const entry = document.createElement('div');
    entry.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Preferences:</strong> ${preferences.join(', ')}</p>
    `;
    displayArea.appendChild(entry);
    
    document.getElementById('registrationForm').reset();
});
