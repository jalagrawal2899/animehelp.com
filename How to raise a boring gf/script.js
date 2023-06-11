// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-container img');
showSlide();

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = 'block';
  setTimeout(showSlide, 3000); // Change slide every 3 seconds
}

function changeSlide(n) {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
}

// Opinion Toggle
const opinionBtns = document.querySelectorAll('.opinion-btn');
const opinionText = document.getElementById('opinion-text');

function changeOpinion(opinion) {
  opinionBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.innerText.toLowerCase() === opinion.toLowerCase());
  });

  if (opinion.toLowerCase() === 'personal') {
    opinionText.value = 'This anime tells us about the fight between the workshop witches who strive to protect the citizens, and the tower witches, who desire to steal the power hidden in a boy(who is also our main hero), to keep the boy safe the workshop witches assign a girl to protect him all the time, without the boy’s knowledge, but soon he discovers that and the truth about the witches, and how the girl and the boy starts to like each other.';
  } else if (opinion.toLowerCase() === 'professional') {
    opinionText.value = 'This anime follows the story of a young boy who becomes the target of a powerful witch. With the help of a girl who is also a witch, he must navigate the dangerous world of magic and witchcraft in order to survive.';
  }
}
