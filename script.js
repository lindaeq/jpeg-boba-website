const bubbleTeaImage = document.getElementById('bubbleTea');

bubbleTeaImage.addEventListener('click', () => {
    bubbleTeaImage.classList.add('bounce');

    // Remove the class after the animation ends so it can be clicked again
    bubbleTeaImage.addEventListener('animationend', () => {
        bubbleTeaImage.classList.remove('bounce');
    }, { once: true }); // Ensures the event listener only runs once per click
});
