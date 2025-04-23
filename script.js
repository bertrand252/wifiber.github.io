// Password reveal steps for the prank
let steps = [
    "********", "Connecting...", "Fetching password...", "Decrypting data...",
    "Almost there...", "Wait for it...", "Password: 0910405289"
];
let index = 0;
let actualPassword = "0910405289";  


function revealPassword() {
    if (index < steps.length) {
        document.getElementById("password").innerText = steps[index];
        index++;
        setTimeout(revealPassword, 1000);  
    } else {
        document.getElementById("qrButton").style.display = "block";
    }
}

