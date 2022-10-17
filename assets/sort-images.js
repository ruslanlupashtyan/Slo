

let productColor = document.querySelectorAll('.product-variant__item');
  productColor[0].addEventListener('click', function(){
    let galleryItems = document.querySelectorAll('.product-gallery__item img')
    galleryItems.forEach(el=>{
      console.log(el.getAttribute('alt'));
    })
  })