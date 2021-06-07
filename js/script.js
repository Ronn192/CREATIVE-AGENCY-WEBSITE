const toggle = document.querySelector("#hamburger-wrapper");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  navigation.classList.toggle("active");
});

// GSAP
var tl = gsap.timeline();
function pageTransition() {
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
  toggle.classList.toggle("open");
  navigation.classList.toggle("active");
}

function contentAnimation() {
  tl.from(".animated-content", {
    duration: 1.5,
    translateY: 50,
    opacity: 0,
  });
}

// Barbajs

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  transitions: [
    {
      leave(data) {
        toggle.classList.toggle("open");
        navigation.classList.toggle("active");

        return (
          gsap.to(data.current.container, {
            opacity: 0,
          }),
          tl.to("ul.transition li", {
            duration: 0.5,
            scaleY: 1,
            transformOrigin: "bottom left",
            stagger: 0.2,
          })
        );
      },
      enter(data) {
        return (
          tl.to("ul.transition li", {
            duration: 0.5,
            scaleY: 0,
            transformOrigin: "bottom left",
            stagger: 0.1,
            delay: 0.1,
          }),
          gsap.from(data.next.container, {
            opacity: 0,
          })
        );
      },
    },
  ],
});
