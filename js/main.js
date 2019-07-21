//change size of header when scroll
function headerOnChange() {
  if ($(window).scrollTop() > 10) {
    $("#header__logo").addClass("active");
    $("#header__navbar").addClass("active");
    $("header .nav-link").addClass("active");
  } else {
    $("#header__logo").removeClass("active");
    $("#header__navbar").removeClass("active");
    $("header .nav-link").removeClass("active");
  }
}

//animate skills set on scroll to
function skillOnChange() {
  $("#span1").waypoint(
    function () {
      $("#span1").addClass("active");
    },
    { offset: "100%" }
  );
  $("#span2").waypoint(
    function () {
      $("#span2").addClass("active");
    },
    { offset: "100%" }
  );
  $("#span3").waypoint(
    function () {
      $("#span3").addClass("active");
    },
    { offset: "100%" }
  );
}

//activate button to scroll to top
function buttonToTop() {
  if ($(this).scrollTop() > 100) {
    $(".top_btn").addClass("active");
  } else {
    $(".top_btn").removeClass("active");
  }
}

//go to top function
function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function mdResize() {
  windowsize = $(window).width();
  var toggleCollapse = document.getElementsByClassName("collapse");

  if (windowsize > 768) {
    $(".main__plus").addClass("disabled");
    for (var i = 0; i < toggleCollapse.length; i++) {
      $(".collapse").removeClass("show");
    }
  } else {
    $(".main__plus").removeClass("disabled");
  }
}

//library: mixitup, slick, owl-carousel, countup, fancybox
function initLib() {
  $("[data-fancybox]").fancybox({
    toolbar: false,
    smallBtn: true,
    buttons: ["close"],
    loop: true
  });
  $(".vimeo").fancybox({
    helpers: {
      media: {}
    },
    height: 507,
    width: 900
  });
  $(".slide_1").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "./img/portfolio/7.jpg",
          opts: {
            caption: "Freshness Photo"
          }
        },
        {
          src: "./img/portfolio/7a.jpg",
          opts: {
            caption: "Awesome Lightbox"
          }
        },
        {
          src: "./img/portfolio/7b.jpg",
          opts: {
            caption: "Massive UI Components"
          }
        },
        {
          src: "./img/portfolio/7c.jpg",
          opts: {
            caption: "Amazing Theme"
          }
        }
      ],
      {
        loop: true,
        toolbar: false,
        smallBtn: true,
        buttons: ["close"],
        btnTpl: {
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
            '<span class="lnr lnr-left-arrow"></span>' +
            "</button>",

          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
            '<span class="lnr lnr-right-arrow"></span>' +
            "</button>"
        }
      }
    );
  });
  $(".slide_2").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "./img/portfolio/8.jpg",
          opts: {
            caption: "Freshness"
          }
        },
        {
          src: "./img/portfolio/8a.jpg",
          opts: {
            caption: "Massive"
          }
        },
        {
          src: "./img/portfolio/8b.jpg",
          opts: {
            caption: "Bootstrap"
          }
        }
      ],
      {
        loop: true,
        toolbar: false,
        smallBtn: true,
        buttons: ["close"],
        btnTpl: {
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
            '<span class="lnr lnr-left-arrow"></span>' +
            "</button>",

          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
            '<span class="lnr lnr-right-arrow"></span>' +
            "</button>"
        }
      }
    );
  });
  // mixitup
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: "local",
      toggleLogic: "and"
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  // owl
  $(".owl-carousel-mix").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 500
  });

  $(".owl-carousel-quote").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 2,
        loop: true
      },
      // 500: {
      //   items: 1,
      //   loop: true
      // },
      768: {
        items: 3
      },
      950: {
        items: 3
      },
      1200: {
        items: 1,
        loop: true
      }
    }
  });

  $(".owl-carousel-client").owlCarousel({
    nav: false,
    dots: true,

    responsive: {
      0: {
        items: 2
      },
      769: {
        items: 3
      },
      986: {
        items: 3
      },
      1200: {
        items: 6
      }
    }
  });

  // slick
  $(".slider").slick({
    dots: true,
    vertical: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2200,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: true
  });

  // count up
  $(".counter").countUp({
    time: 1000,
    delay: 50
  });
}

//on start/refresh page
$(window).ready(function () {
  initLib();
  mdResize();
  headerOnChange();
  skillOnChange();
});

//on scroll
$(window).scroll(function () {
  buttonToTop();
  $("#header__logo").addClass("smooth");
  $(".navbar").addClass("smooth");
  headerOnChange();
  skillOnChange();
});

//on mdResize
$(window).resize(function () {
  mdResize();
});

document.addEventListener("click", function (event) {
  var toggleTarget = event.target;
  var toggleSub = document.getElementsByClassName("dropdown_toggle");
  var toggleSubSub = document.getElementsByClassName("show__dropdown");
  var toggleHeadline = document.getElementsByClassName("nav-link");
  //Main menu
  if (toggleTarget.classList[0] == "main__plus") {
    checkMenu(toggleTarget, toggleHeadline, "collapsed");
  }

  //Sub menu of Main menu
  if (toggleTarget.classList[1] == "dropdown_toggle") {
    checkMenu(toggleTarget, toggleSub, "show-sub");
  }

  //Sub sub menu of Main menu
  if (toggleTarget.classList[1] == "show__dropdown") {
    checkMenu(toggleTarget, toggleSubSub, "show-sub");
  }
});

function checkMenu(toggleTarget, toggleClick, className) {
  var check = false;
  var flag = 0;
  //remove "show sub menu" from other classes
  for (var i = 0; i < toggleClick.length; i++) {
    if (toggleClick[i] != toggleTarget) {
      $(toggleClick[i]).removeClass(className);
      if (toggleTarget.classList[0] == "main__plus") {
        $("#collapseHead" + (i + 1)).removeClass("show");
      }
    } else {
      flag = i;
    }
  }
  //check if the current clicked class already opened or not, if opened => true
  for (var j = 0; j < toggleClick[flag].classList.length; j++) {
    if (toggleClick[flag].classList[j] === className) {
      check = true;
      break;
    }
  }
  if (!check) {
    $(toggleTarget).addClass(className);
  } else {
    //if is opened, closed on 2nd click
    $(toggleTarget).removeClass(className);
    if (toggleTarget.classList[0] == "main__plus") {
      $("#collapseHead" + (i + 1)).removeClass("show");
    }
  }
}
