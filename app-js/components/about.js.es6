(() => {
  $(document).ready(() => {
    var aboutScreen = $("#about-screen")
    var body = $("body");
    var navbarAbout = $(".navbar-about");

    var openAbout = () => {
      if(aboutScreen.is(".about-static")){ return; }

      aboutScreen.fadeIn("normal", () => {
        aboutScreen.scrollTop(0);
      });

      body.addClass("about-screen-opened");
      navbarAbout.addClass("active");
    };
    var closeAbout = () => {
      if(aboutScreen.is(".about-static")){ return; }

      aboutScreen.fadeOut("fast");
      body.removeClass("about-screen-opened");
      navbarAbout.removeClass("active");
    };

    $(document).on("click", ".close-about", (e) => {
      e.preventDefault();
      closeAbout();
    });

    $(document).on("click", "#about-screen", (e) => {
      if($(e.target).closest(".about-inner").length > 0) {
        return;
      }
      closeAbout();
    });

    $(document).on("click", ".open-about", (e) => {
      e.preventDefault();
      openAbout();
    });

    $(document).on("click", ".toggle-about", (e) => {
      e.preventDefault();

      if(aboutScreen.is(":visible")) {
        closeAbout();
      }
      else {
        openAbout();
      }
    });

    // show about page on first visit
    if($("body").is(".show-intro")) {
      openAbout();
    }

  });
})();
