const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
}); 

// (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:3930942,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
// })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');