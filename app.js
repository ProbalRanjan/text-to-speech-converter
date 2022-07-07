let btn = document.querySelector('.convert-btn');
btn.onclick = () => {
    let enterText = document.querySelector('.text-area').value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = enterText;
    speech.rate = 1;
    speech.volume = 2;
    speech.pitch = 2;
    speechSynthesis.speak(speech);
}