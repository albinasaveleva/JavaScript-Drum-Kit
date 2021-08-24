let playSound = (event) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.add('playing');
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
    }
};

window.addEventListener('keydown', playSound);