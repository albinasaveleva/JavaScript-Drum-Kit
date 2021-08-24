let removeTransition = () => {
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('transitionend', (event) => {
            if (event.propertyName.toLowerCase() === 'transform') {
                key.classList.remove('playing');
            }
        }) 
    })
};
let playSound = (event) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.add('playing');
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
        setTimeout(removeTransition, .07)
    }
};

window.addEventListener('keydown', playSound);