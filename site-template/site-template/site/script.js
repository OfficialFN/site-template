const textElement = document.getElementById('developer');
const contact = document.getElementById('contact');
var text = 'Developer';

const texts = ['Put', 'Any', 'Of', 'Your', 'Specialties', 'Here!'];
var count = 0;

setInterval(() => {
    if (count >= texts.length) {
        count = 0;
    }
    text = texts[count];
    count++;
  textElement.textContent = text;
}, 3000);

function redirect1() {
    window.location.href = "https://github.com/"
}
function redirect2() {
    window.location.href = "https://github.com/"
}
function redirect3() {
    window.location.href = "https://github.com/"
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

contact.addEventListener('click', () => {
    alert('Copied contact info to clipboard!');
    copyToClipboard('Put your contact info: Email, discord, phone number');
})

