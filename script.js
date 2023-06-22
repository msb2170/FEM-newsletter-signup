const button = document.getElementById('button')
const dismiss = document.getElementById('dismiss')
const mainDiv = document.getElementById('container')
const successDiv = document.getElementById('success-container')

button.addEventListener('click', () => {
    mainDiv.style.display = 'none';
    successDiv.style.display = 'flex';
})

dismiss.addEventListener('click', () => {
    mainDiv.style.display = 'flex';
    successDiv.style.display = 'none';
})

