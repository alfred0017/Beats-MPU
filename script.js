document.addEventListener("DOMContentLoaded", function () {
  // Initialize GreenSock timeline
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 3, paused: false });

  // Function to update timeline for screens smaller than 600px
  function updateTimelineForSmallScreens() {
    tl.clear();
    tl.to(".ad1-text1", { x: 115.70, duration: 1 }, 0);
    tl.to(".main-img", { x: -213, duration: 1 }, 0);
    tl.to(".ad1-text1", { x: 150, opacity: 0, duration: 0.8 }, 3);
    tl.to(".main-img", { x: -350, scale: 0.6, duration: 1 }, "3");
    tl.to(".mpu-logo, .ad1-text2, .button", { opacity: 1, duration: 1 }, "3");
    tl.to(".button", { scale: 1.1, duration: 1, ease: "power1.inOut" }, 4);
    tl.to(".button", { scale: 1, duration: 0.8, ease: "power1.inOut" }, 4.5);
  }

  // Default timeline setup for larger screens
  tl.to(".ad1-text1", { x: 329.84, duration: 1 }, 0);
  tl.to(".main-img", { x: -426, duration: 1 }, 0);
  tl.to(".ad1-text1", { x: 429.84, opacity: 0, duration: .8 }, 3);
  tl.to(".main-img", { x: -700, scale: 0.6, duration: 1 }, 3);
  tl.to(".mpu-logo, .ad1-text2, .button", { opacity: 1, duration: 1 }, "3");
  tl.to(".button", { scale: 1.1, duration: 1, ease: "power1.inOut" }, 4);
  tl.to(".button", { scale: 1, duration: 0.8, ease: "power1.inOut" }, 4.5);

  // Function to handle hover event on screens above 768px
  function handleHoverEvent() {
    if (window.innerWidth > 768) {
      var hoverTrigger = document.querySelector(".main-img");
      var hiddenElement = document.querySelector(".product-container");

      // Event listener for mouseenter
      hoverTrigger.addEventListener("mouseenter", function () {
        hiddenElement.style.opacity = "1";
        tl.pause();
      });

      // Event listener for mouseleave
      hoverTrigger.addEventListener("mouseleave", function () {
        hiddenElement.style.opacity = "0";
        tl.play();
      });
    }
  }

  // Check initial screen width
  if (window.innerWidth <= 600) {
    updateTimelineForSmallScreens();
  } else {
    handleHoverEvent();
  }

  // ScrollTrigger for timeline animation
  gsap.to(tl, {
    scrollTrigger: {
      trigger: ".main",
      start: "top 80%",
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    },
  });

  // Event listener for window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 600) {
      updateTimelineForSmallScreens();
    } else {
      handleHoverEvent();
    }
  });

  // Event listener for visibility change
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      tl.restart();
    }
  });
});
