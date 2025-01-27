const slides = [
    {
      src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'landscape1',
    },
    {
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'landscape2',
    },
    {
      src: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'landscape3',
    },
    {
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'landscape4',
    },
  ];
   
  let currentSlideIndex = 0;

  //встановити в якості початкового зображення slides[0]
  const slideImage = document.querySelector('img');
  slideImage.src = slides[currentSlideIndex].src;
  slideImage.alt = slides[currentSlideIndex].alt;

  const [prevBtn, nextBtn] = document.querySelectorAll('.navBtn');

  nextBtn.addEventListener('click', nextSlideHandler);
  function nextSlideHandler(event){
    if(currentSlideIndex < slides.length-1){
        currentSlideIndex++
    }else{
        currentSlideIndex = 0;
    }
    slideImage.src = slides[currentSlideIndex].src;
    slideImage.alt = slides[currentSlideIndex].alt;
  }

  prevBtn.addEventListener('click',prevSlideHandler)
  function prevSlideHandler(event){
    if(currentSlideIndex > 0){
        currentSlideIndex--;
    }else{
        currentSlideIndex = slides.length - 1;
    }
    slideImage.src = slides[currentSlideIndex].src;
    slideImage.alt = slides[currentSlideIndex].alt;
  }