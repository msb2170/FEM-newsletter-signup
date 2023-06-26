const button = document.getElementById('button')
const dismiss = document.getElementById('dismiss')
const mainDiv = document.getElementById('container')
const successDiv = document.getElementById('success-container')
const inputText = document.getElementById('email')
const textDisplay = document.getElementById('email-input')
const warnText = document.getElementById('warn-text')

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
}

button.addEventListener('click', () => {
    if (isValidEmail(inputText.value)) {
        console.log('valid')
        mainDiv.style.display = 'none';
        successDiv.style.display = 'flex';
        textDisplay.innerHTML = inputText.value;
    } else {
        warnText.style.display = 'inline-block';
    }
    
})

dismiss.addEventListener('click', () => {
    mainDiv.style.display = 'flex';
    successDiv.style.display = 'none';
})


