$(document).ready(function() {
  function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      duration: "150%",
      triggerElement: ".tig1",
      triggerHook: 0
    })
      .setPin(".tig1", {
        pushFollowers: false
      })
      .addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({
      duration: "90%",
      triggerElement: ".tig2",
      triggerHook: 0
    })
      .setPin(".tig2", {
        pushFollowers: false
      })
      .addIndicators()
      .addTo(controller);
  }

  if ($("body").width() > 480) {
    splitScroll();
  }

  $(window).resize(function() {
    if ($("body").width() < 480) {
      x = 1;
    } else {
    }
  });
});
