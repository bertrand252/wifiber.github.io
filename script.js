// Password reveal steps for the prank
let steps = [
    "********", "Connecting...", "Fetching password...", "Decrypting data...",
    "Almost there...", "Wait for it...", "Password: 0910405289"
];
let index = 0;
let actualPassword = "0910405289";  // The correct Wi-Fi password

// Reveal password step-by-step
function revealPassword() {
    if (index < steps.length) {
        document.getElementById("password").innerText = steps[index];
        index++;
        setTimeout(revealPassword, 1200);  // 1.2 seconds between each step
    } else {
        // Show the QR code button after the password is revealed
        document.getElementById("qrButton").style.display = "block";
    }
}

// Function to display the QR code
function showQRCode() {
    document.getElementById("qrCode").innerHTML = '<img src="https://assets.onecompiler.app/42wsygy8d/42wsxgtwr/qr%20wifi.jpg" alt="qr wifi.jpg">';
}
