//var img_wrapper = document.querySelector(".img-wrapper");
bk = document.querySelector(".wrapper-bk");
img_wrapper = document.querySelector(".img-wrapper");

const t = new TimelineMax();
t.fromTo(
  img_wrapper,
  1.5,
  { height: "0%" },
  { height: "90%", ease: Power2.easeInOut }
)
  .fromTo(
    img_wrapper,
    1.2,
    { width: "90%" },
    { width: "40%", ease: Power2.easeInOut }
  )
  .fromTo(
    img_wrapper,
    1.2,
    { height: "90%" },
    { height: "60%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    bk,
    1.2,
    { width: "0%" },
    { width: "65%", ease: Power2.easeInOut },
    "-=1.2"
  );
