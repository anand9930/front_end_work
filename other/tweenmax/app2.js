imgr = document.querySelectorAll(".imgr");
overlay = document.querySelectorAll(".overlay");
imgr_class = document.getElementsByClassName("imgr");
console.log(imgr_class);

for (i = 0; i < imgr_class.length; i++) {
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  randx = Math.floor(Math.random() * 140 * plusOrMinus);
  if (i > imgr_class.length / 2) {
    randy = Math.floor(Math.random() * 400 * -1);
  } else {
    randy = Math.floor(Math.random() * 140 * -1);
  }

  //rand1=Math.floor(Math.random()* 100);
  imgr_class[i].style.transform =
    "scale(0.45)  translate(" + randx + "%," + randy + "%)";
  console.log(randx);
}
function anime() {
  document.getElementsByTagName("BODY")[0].style.overflow = "visible";
  document.getElementsByTagName("HTML")[0].style.overflow = "visible";
  const t = new TimelineMax();
  t.to(overlay, 0.4, { opacity: 0, ease: Power2.easeInOut })
    .to(
      imgr,
      0.35,
      { transform: "scale(1) translate(0%,0%)", ease: Power2.easeInOut },
      "-=0.2"
    )
    .to(overlay, 0.4, { display: "none", ease: Power2.easeInOut });

  //document.getElementsByClassName("overlay")[0].style.display = "none";
}
