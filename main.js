const emblaViewport = document.querySelector('.embla__viewport');
const emblaContainer = document.querySelector('.embla__container');

// ✨ Здесь твой список фотографий
const images = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.jpg',
  'photo5.jpg',
  'photo6.jpg',
  'photo7.jpg',
  'photo8.jpg',
  'photo9.jpg',
  'photo10.jpg'
  // Просто дописывай новые фото сюда, например:
  // 'newphoto1.jpg',
  // 'vacation2024.png',
];

// Автоматическая генерация слайдов
images.forEach(image => {
  const slide = document.createElement('div');
  slide.className = 'embla__slide';
  
  const img = document.createElement('img');
  img.src = `./img/${image}`;
  img.alt = image;
  
  slide.appendChild(img);
  emblaContainer.appendChild(slide);
});

// Инициализация карусели
const emblaInstance = EmblaCarousel(emblaViewport, { loop: true });

const prevButton = document.querySelector('.embla__prev');
const nextButton = document.querySelector('.embla__next');

prevButton.addEventListener('click', () => emblaInstance.scrollPrev());
nextButton.addEventListener('click', () => emblaInstance.scrollNext());

// Автопрокрутка каждые 3 секунды
// setInterval(() => {
//   emblaInstance.scrollNext();
// }, 3000);
