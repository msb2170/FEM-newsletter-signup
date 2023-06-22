const button = document.getElementById('button')
const dismiss = document.getElementById('dismiss')
const mainDiv = document.getElementById('container')
const successDiv = document.getElementById('success-container')
const inputText = document.getElementById('email')
const textDisplay = document.getElementById('email-input')

button.addEventListener('click', () => {
    mainDiv.style.display = 'none';
    successDiv.style.display = 'flex';
    textDisplay.innerHTML = inputText.value;
})

dismiss.addEventListener('click', () => {
    mainDiv.style.display = 'flex';
    successDiv.style.display = 'none';
})


