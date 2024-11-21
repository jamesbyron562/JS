function redirectTo(page) {
    window.location.href = page; // Redirects to the specified page
}

function displayMessage(theme) {
    let message = "";
    if (theme === 'blue') {
        message = "Welcome to the Blue Theme Page!";
    } else if (theme === 'pink') {
        message = "Welcome to the Pink Theme Page!";
    } else if (theme === 'brown') {
        message = "Welcome to the Brown Theme Page!";
    }
    alert(message);
}

function goBack() {
    window.location.href = 'index.html'; // Return to the main page
}