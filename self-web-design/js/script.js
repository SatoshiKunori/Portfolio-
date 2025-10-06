// ボタン揺れる
const btn = document.getElementById('contactBtn');

btn.addEventListener('mouseover', () => {
  let i = 0;
  const interval = setInterval(() => {
    i++;
    btn.style.transform = `translateX(${i % 2 === 0 ? -5 : 5}px)`;

    if (i > 6) {
      clearInterval(interval);
      btn.style.transform = 'translateX(0)';
    }
  }, 200); 
});

// カルーセル
const slides = document.querySelector('.slides');

const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

let currentIndex = 0;

const changeSlide = () => {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};


setInterval(changeSlide, 3000);
