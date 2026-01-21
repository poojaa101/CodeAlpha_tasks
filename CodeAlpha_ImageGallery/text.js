const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterBtns = document.querySelectorAll('.filters button');

let currentIndex = 0;
let visibleImages = [...images];

images.forEach(img => {
  img.addEventListener('click', () => {
    visibleImages = [...document.querySelectorAll('.gallery img:not(.hide)')];
    currentIndex = visibleImages.indexOf(img);
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeBtn.onclick = () => lightbox.style.display = 'none';

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
};

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    images.forEach(img => {
      if (filter === 'all' || img.dataset.category === filter) {
        img.classList.remove('hide');
      } else {
        img.classList.add('hide');
      }
    });
  });
});
