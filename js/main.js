'use strict';
{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-image');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let activeIndex = 0;

  thumbnails.forEach(clickedThumbnail => {
    clickedThumbnail.addEventListener('click', () => {
      thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
      });
      clickedThumbnail.classList.add('active');
      mainImage.src = clickedThumbnail.src;
    })
  });

  next.addEventListener('click', () => {
    if (activeIndex >= 2) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
    })
    thumbnails[activeIndex].classList.add('active');
  });

  prev.addEventListener('click', () => {
    if (activeIndex <= 0) {
      activeIndex = 2;
    } else {
      activeIndex--;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
    })
    thumbnails[activeIndex].classList.add('active');
  });
}
