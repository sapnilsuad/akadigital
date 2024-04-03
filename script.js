const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false, 
    },
    // Optional parameters 
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true, 
    pagination: {
      el: '.swiper-pagination', 
    },
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
    },
});
const swiper2 = new Swiper('.swiper2', {
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
    },
    // Optional parameters 
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true, 
});
const swiper3 = new Swiper('.swiper3', {
    autoplay: {
        delay: 3500, 
        disableOnInteraction: false, 
      },
      // Optional parameters 
      slidesPerView: 1,
      spaceBetween: 30, 
      loop: true,
});
// cursor follow
const cursor = document.querySelector('.cursor');
const smoothing = 0.2; // Adjust this value between 0 and 1

document.addEventListener('mousemove', (event) => {
  const targetX = event.clientX;
  const targetY = event.clientY;

  // Calculate smoothed positions based on current and target values
  const newX = cursor.offsetLeft + (targetX - cursor.offsetLeft) * smoothing;
  const newY = cursor.offsetTop + (targetY - cursor.offsetTop) * smoothing;

  cursor.style.left = newX + 'px';
  cursor.style.top = newY + 'px';
});
$(document).ready(function() {
    $('.filter-btn').click(function() {
      var filterValue = $(this).attr('data-filter');
      $('.gallery-item').hide(); // Hide all images initially
      if (filterValue === "*") {
        $('.gallery-item').show(); // Show all if "All" button clicked
      } else {
        $('.gallery-item').filter(filterValue).show(); // Show based on filter value
      }
    });
  });