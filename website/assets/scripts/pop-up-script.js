//ALL THANKS TO THE AMAZING CHAT GPT FOR MAKING THE JAVASCRIPT CODE FOR ME AND GUIDING ME!!//
//Right now I know next to nothing of javascript, and I am too tired to stop and learn rn, so this is really helpful!!!//
const images = document.querySelectorAll('.item__img-style');
const modal = document.querySelector('.pop-up__img');
const modalImage = document.querySelector('.popup-item__img-style');

images.forEach(image => {
  image.addEventListener('click', function() {
    modalImage.src = this.src;
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', function() {
  modal.style.display = 'none';
});