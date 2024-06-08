  function roomSwiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,  
      },
      speed: 800,
    effect: "slide",
    breakpoints: {
      // When window width is >= 640px (sm), set slidesPerView to 3
      768: {
        slidesPerView: 3,
      },
    },
  });

  }

  roomSwiper();

  
  function commentsSwiper(){
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, // Set loop to true to make the swiper continuous
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: "slide",
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
  }

  commentsSwiper();


  function menuBar() {
    const menu = document.querySelector('.mobile-navbar');
    const close = document.querySelector('.close');
    const bars = document.querySelector('.bars');
  
    bars.addEventListener("click", () => {
      menu.classList.remove('hidden');
      close.classList.remove('hidden');
      bars.classList.add('hidden');
    });
  
    close.addEventListener("click", () => {
      menu.classList.add('hidden');
      close.classList.add('hidden');
      bars.classList.remove('hidden');
    });
  }
  
  menuBar();
  


  function reload(){
    window.onload = function() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 0);
    }
  }

  reload();


function animation(){
  const tl = gsap.timeline()

 tl.from(".navbar", { 
    opacity: 0, 
    y: -100, 
    duration: 1,
    delay:1,
    stagger:1,
  });

 tl.from(".hero-section", { 
    opacity: 0,  
    duration: 2,
  });


  // gsap.from('.abt-heading', {
  //   x:120,
  //   stagger:0.5,
  //   duration:1,
  //   opacity:0,
  //   scrollTrigger:{
  //     trigger:".section-2",
  //     scroller:"body",
  //     start:"top 20%",
  //     end: "top 30%",
  //     // markers:true,
  //     scrub:2,
  //   }
  // })


  gsap.from('.about-image', {
    x:-120,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".section-2",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })


  gsap.from('.about-text', {
    x:120,
    stagger:2,
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".section-2",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  // gsap.from('.faci-text', {
  //   x:120,
  //   stagger:0.5,
  //   duration:1,
  //   opacity:0,
  //   scrollTrigger:{
  //     trigger:".section-2",
  //     scroller:"body",
  //     start:"top 20%",
  //     end: "top 30%",
  //     // markers:true,
  //     scrub:2,
  //   }
  // })

  // gsap.from('.abt-btn', {
  //   x:-120,
  //   stagger:0.5,
  //   duration:1,
  //   opacity:0,
  //   scrollTrigger:{
  //     trigger:".section-2",
  //     scroller:"body",
  //     start:"top 20%",
  //     end: "top 30%",
  //     // markers:true,
  //     scrub:2,
  //   }
  // })


  gsap.from('.section-3', {
    y:100,
    duration:10,
    opacity:0,
    scrollTrigger:{
      trigger:".section-3",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.rooms-heading', {
    duration:10,
    opacity:0,
    scrollTrigger:{
      trigger:".section-4",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.pages-image', {
    x:-120,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
      trigger:".section-5",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })


  gsap.from('.pages-text', {
    x:120,
    stagger:2,
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".section-5",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  
  gsap.from('.section-6', {
    x:100,
    duration:10,
    opacity:0,
    scrollTrigger:{
      trigger:".section-6",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.review-heading', {
    duration:10,
    opacity:0,
    scrollTrigger:{
      trigger:".section-7",
      scroller:"body",
      start:"top 50%",
      end: "top 40%",
      // markers:true,
      scrub:2,
    }
  })

  gsap.from('.contact-image', {
    x:120,
    duration:2,
    opacity:0,
    scrollTrigger:{
      trigger:".section-8",
      scroller:"body",
      start:"top 70%",
      end: "top 60%",
      // markers:true,
      scrub:2,
    }
  })


  gsap.from('.contact-text', {
    x:-120,
    duration:2,
    opacity:0,
    scrollTrigger:{
      trigger:".section-8",
      scroller:"body",
      start:"top 70%",
      end: "top 60%",
      // markers:true,
      scrub:2,
    }
  })

  
}

animation();