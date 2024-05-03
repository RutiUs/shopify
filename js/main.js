document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".burger").addEventListener("click", function() {
        document.querySelector(".user-nav").classList.toggle("open")
    })
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },

    autoplay: {
        delay: 2000,
      },

});