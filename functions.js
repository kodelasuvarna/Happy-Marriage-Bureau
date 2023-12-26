$(document).click(function (event) {
  let clickover = $(event.target);
  let opened = $(".navbar-collapse").hasClass("in");
  if (opened === true && !clickover.hasClass("navbar-toggle")) {
    $("button.navbar-toggle").click();
  }
});
(function ($) {
  "use strict";
  function about_img() {
    var width = $(window).width();
    var about_section_height = $(".about-section").height();
    var about_content_height = $(".about-detail").height();
    var ele_id = 0;
    if (width >= 992) {
      $(".about-img").removeAttr("style");
      $(".about-img img").remove();
      let about_img = $(".about-img").attr("data-image");
      $(".about-img").css({
        "background-image": "url('" + about_img + "')",
        height: about_section_height,
      });
    } else {
      $(".about-img").removeAttr("style");
      $(".about-img img").remove();
      let about_img = $(".about-img").attr("data-image");
      $(".about-img").append("<img src='" + about_img + "' />");
    }
  }
  function left_bg() {
    var width = $(window).width();
    var container_width = $(".container").width();
    var left_bg = (width - container_width) / 2;
    $(".left-background").css("width", left_bg);
  }
  function webdesign_img() {
    var width = $(window).width();
    if (width >= 992) {
      $(".webdesign-bg").removeAttr("style");
      var contact_section_height = $(".webdesign-section").height();
      $(".getintouch-img img").remove();
      let webdesign_img = $(".webdesign-bg").attr("data-image");
      $(".webdesign-bg").css({
        "background-image": "url('" + webdesign_img + "')",
        height: contact_section_height,
      });
    } else {
      $(".webdesign-bg").removeAttr("style");
      $(".webdesign-bg img").remove();
      let webdesign_img = $(".webdesign-bg").attr("data-image");
      $(".webdesign-bg").append("<img src='" + webdesign_img + "' />");
    }
  }
  function what_we_do_img() {
    var width = $(window).width();
    if (width >= 992) {
      $(".whatwedo-img").removeAttr("style");
      var what_we_do_section_height = $(".whatwedo-section").height();
      $(".whatwedo-img img").remove();
      var whatwedo_img = $(".whatwedo-img").attr("data-image");
      $(".whatwedo-img").css({
        "background-image": "url('" + whatwedo_img + "')",
        height: what_we_do_section_height,
      });
    } else {
      $(".whatwedo-img").removeAttr("style");
      $(".whatwedo-img img").remove();
      var whatwedo_img = $(".whatwedo-img").attr("data-image");
      $(".whatwedo-img").append("<img src='" + whatwedo_img + "' />");
    }
  }
  function getintouch_img() {
    var width = $(window).width();
    if (width >= 992) {
      $(".getintouch-img").removeAttr("style");
      var contact_section_height = $(".contact-section").height();
      $(".getintouch-img img").remove();
      var getintouch_img = $(".getintouch-img").attr("data-image");
      $(".getintouch-img").css({
        "background-image": "url('" + getintouch_img + "')",
        height: contact_section_height,
      });
    } else {
      $(".getintouch-img").removeAttr("style");
      $(".getintouch-img img").remove();
      var getintouch_img = $(".getintouch-img").attr("data-image");
      $(".getintouch-img").append("<img src='" + getintouch_img + "' />");
    }
  }
  function homeshop_img() {
    var width = $(window).width();
    var ele_id = 0;
    $("[id*='homeshop_ppt_img-']").removeAttr("style");
    $("[id*='homeshop_ppt-']").each(function () {
      ele_id = $(this).attr("id").split("-")[1];
      var homeshop_img_height = $(
        "[id*='homeshop_ppt-" + ele_id + "']"
      ).height();
      var homeshop_img = $("[id*='homeshop_ppt_img-" + ele_id + "']").attr(
        "data-image"
      );
      $("[id*='homeshop_ppt_img-" + ele_id + "']").css({
        "background-image": "url('" + homeshop_img + "')",
        height: homeshop_img_height,
      });
    });
  }
  function contact1right_bg() {
    var width = $(window).width();
    var container_width = $(".container").width();
    var contact1right_bg = (width - container_width) / 2;
    $(".contact1right-bg").css("width", contact1right_bg);
  }
  function initialize(obj) {
    var lat = $("#" + obj).attr("data-lat");
    var lng = $("#" + obj).attr("data-lng");
    var title = $("#" + obj).attr("data-title");
    var contentString =
      '<div style="overflow: auto;"><h4 style="margin:0 0 5px;color: #00a500;font-weight:400">' +
      title +
      "</h4>" +
      $("#" + obj).attr("data-string") +
      '<a style="display: block; margin-top: 12px;" target="_blank" href="https://www.google.com/maps/dir/' +
      lat +
      "," +
      lng +
      '">View on Google Maps</a></div>';
    var myLatlng = new google.maps.LatLng(lat, lng);
    var map, marker, infowindow;
    var image = {
      url: "/icon/map-marker.svg",
      scaledSize: new google.maps.Size(40, 40),
    };
    var zoomLevel = parseInt($("#" + obj).attr("data-zoom"), 10);
    var styles = [{}];
    var styledMap = new google.maps.StyledMapType(styles, {
      name: "Styled Map",
    });
    var mapOptions = {
      zoom: zoomLevel,
      disableDefaultUI: true,
      center: myLatlng,
      scrollwheel: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
      },
    };
    map = new google.maps.Map(document.getElementById(obj), mapOptions);
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    infowindow = new google.maps.InfoWindow({ content: contentString });
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: title,
    });
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }
  $(document).scroll(function () {
    var scroll = $(window).scrollTop();
    var width = $(window).width();
    var height = $(window).height();
    if (scroll >= 300) {
      $(".header-section:not(.vertical-menu)")
        .addClass("navbar-fixed-top animated fadeInDown")
        .delay(2e3)
        .fadeIn();
      $(".header-section + div, .header-section + main").css(
        "padding",
        "126px 0 0 0"
      );
      $(".header-section .dropdown-menu").addClass("scrolled");
    } else if (scroll <= 300) {
      $(".header-section:not(.vertical-menu)").removeClass(
        "navbar-fixed-top animated fadeInDown"
      );
      $(".header-section + div, .header-section + main").css("padding", "0");
      $(".header-section .dropdown-menu").removeClass("scrolled");
    } else {
      $(".header-section:not(.vertical-menu)").removeClass(
        "navbar-fixed-top animated fadeInDown"
      );
      $(".header-section + div, .header-section + main").css("padding", "0");
      $(".header-section .dropdown-menu").removeClass("scrolled");
    }
    if ($(this).scrollTop() >= 50) {
      $("#back-to-top").fadeIn(200);
    } else {
      $("#back-to-top").fadeOut(200);
    }
  });
  $("#back-to-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });
  $(document).ready(function ($) {
    var scroll = $(window).scrollTop();
    var width = $(window).width();
    var height = $(window).height();
    if (scroll >= height - 500) {
      $(".header-section:not(.vertical-menu)")
        .addClass("navbar-fixed-top")
        .delay(2e3)
        .fadeIn();
    } else if (scroll <= height) {
      $(".header-section:not(.vertical-menu)").removeClass("navbar-fixed-top");
    } else {
      $(".header-section:not(.vertical-menu)").removeClass("navbar-fixed-top");
    }
    $(
      '.navbar-nav li a[href*="#"]:not([href="#"]),#back-to-top[href*="#"]:not([href="#"]), .homeshop_ppt-index li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])'
    ).bind("click", function (e) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $($anchor.attr("href")).offset().top - 49 },
          1500,
          "easeInOutExpo"
        );
      e.preventDefault();
    });
    $(".ddl-switch").on("click", function () {
      var li = $(this).parent();
      if (
        li.hasClass("ddl-active") ||
        li.find(".ddl-active").length !== 0 ||
        li.find(".dropdown-menu").is(":visible")
      ) {
        li.removeClass("ddl-active");
        li.children().find(".ddl-active").removeClass("ddl-active");
        li.children(".dropdown-menu").slideUp();
      } else {
        li.addClass("ddl-active");
        li.children(".dropdown-menu").slideDown();
      }
    });
    $('[data-toggle="tooltip"]').tooltip();
    if ($(".vertical-menu").length) {
      $("#menu-switch").on("click", function () {
        $(".vertical-menu").addClass("active");
      });
      $("#menu-close").on("click", function () {
        $(".vertical-menu").removeClass("active");
      });
    }
    if ($(".vertical-menu3").length) {
      $("#menu-switch").on("click", function () {
        $(".vertical-menu").addClass("active");
        var menu_width = $(".vertical-menu").width();
        $("main").css("margin-left", menu_width);
      });
      $("#menu-close").on("click", function () {
        $(".vertical-menu").removeClass("active");
        $("main").css("margin-left", "0");
      });
    }
    if ($(".slider-section").length) {
      $("#slider-light1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9e3,
        navigation: { arrows: { enable: true } },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [700, 768, 960, 720],
      });
      $("#slider1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9e3,
        navigation: {
          arrows: { enable: true },
          bullets: {
            enable: true,
            hide_onmobile: true,
            hide_under: 778,
            style: "",
            hide_onleave: false,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 20,
            space: 15,
            tmp: "",
          },
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [700, 768, 960, 720],
      });
      $("#slider-shop1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9e3,
        navigation: { arrows: { enable: true } },
        gridwidth: 1230,
        gridheight: 910,
      });
      $("#shop-slider1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9e3,
        navigation: { arrows: { enable: false } },
        gridwidth: 1170,
        gridheight: 570,
      });
      $("#slider-shop-with-sidebar1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9e3,
        navigation: { arrows: { enable: true } },
        gridwidth: 1230,
        gridheight: 960,
      });
      $("#slider-shop-parallex1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9e3,
        navigation: { arrows: { enable: true } },
        parallax: {
          type: "mouse",
          origo: "slidercenter",
          speed: 2e3,
          levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
        },
        gridwidth: 1230,
        gridheight: 910,
      });
    }
    if ($(".search-box").length) {
      $("body").on("click", "#search", function () {
        $(".search-box").addClass("open");
        $(".search-box form input").focus();
      });
      $(".search-box .close").on("click", function () {
        $(".search-box").removeClass("open");
      });
    }
    if ($(".burger-menu-block").length) {
      var header_height = $(".header-section").height();
      var burger_menu_height = height - header_height;
      $(".burger-menu-block").css({
        height: burger_menu_height,
        top: header_height,
      });
      $(".burger-menu a").on("click", function () {
        $(".burger-menu-block").addClass("active");
      });
      $(".burger-menu-block span").on("click", function () {
        $(".burger-menu-block").removeClass("active");
      });
    }
    if ($(".fact-section").length) {
      $(".fact-section").each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");
        $this.appear(function () {
          var statistics_item_count = 0;
          var statistics_count = 0;
          statistics_item_count = $("[id*='statistics_count-']").length;
          for (var i = 1; i <= statistics_item_count; i++) {
            statistics_count = $("[id*='statistics_count-" + i + "']").attr(
              "data-statistics_percent"
            );
            $("[id*='statistics_count-" + i + "']").animateNumber(
              { number: statistics_count },
              4e3
            );
          }
        });
      });
    }
    var ele_id = 0;
    $("[id*='clock-']").each(function () {
      ele_id = $(this).attr("id").split("-")[1];
      var cnt_date = $(this).attr("data-date");
      $("[id*='clock-" + ele_id + "']").countdown(cnt_date, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              "<p>%D <span>Days</span></p>" +
              "<p>%H <span>Hours</span></p>" +
              "<p>%M <span>Mins</span></p>" +
              "<p>%S <span>Secs</span></p>"
          )
        );
      });
    });
    about_img();
    left_bg();
    $(".skill-progress").each(function () {
      var $this = $(this);
      var myVal = $(this).data("value");
      $this.appear(function () {
        var skill_item_count = 0;
        var skills_count = 0;
        skill_item_count = $("[id*='skill_count-']").length;
        for (var i = 1; i <= skill_item_count; i++) {
          skills_count = $("[id*='skill_count-" + i + "']").attr(
            "data-skills_percent"
          );
          $("[id*='skill_count-" + i + "']").animateNumber(
            { number: skills_count },
            2e3
          );
        }
      });
    });
    $(".dial").each(function () {
      var $this = $(this);
      var myVal = $(this).data("value");
      $this.appear(function () {
        $this.knob({});
        $({ value: 0 }).animate(
          { value: myVal },
          {
            duration: 2e3,
            easing: "swing",
            step: function () {
              $this.val(Math.ceil(this.value)).trigger("change");
            },
          }
        );
      });
    });
    $(".progress-section").each(function () {
      var $this = $(this);
      var myVal = $(this).data("value");
      $this.appear(function () {
        var skill_type1_item_count = 0;
        var skill_type1_count = 0;
        skill_type1_item_count = $("[id*='skill_type1_count-']").length;
        var skill_bar_count = 0;
        var skills_bar_count = 0;
        skill_bar_count = $("[id*='skill_bar1_count-']").length;
        for (var i = 1; i <= skill_type1_item_count; i++) {
          skill_type1_count = $("[id*='skill_type1_count-" + i + "']").attr(
            "data-skill_percent"
          );
          $("[id*='skill_type1_count-" + i + "']").animateNumber(
            { number: skill_type1_count },
            2e3
          );
        }
        for (var j = 1; j <= skill_bar_count; j++) {
          skills_bar_count = $("[id*='skill_type1_count-" + j + "']").attr(
            "data-skill_percent"
          );
          $("[id*='skill_bar1_count-" + j + "']").css({
            width: skills_bar_count + "%",
          });
        }
      });
    });
    if (
      $("#gallery-owl.owl-carousel").length &&
      $("#gallery-owl.owl-carousel .item").length > 1
    ) {
      $("#gallery-owl.owl-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 2e3,
        lazyLoad: true,
        navigation: true,
        loop: true,
        slideBy: 1,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 4 } },
      });
    }
    if (
      $("#homeBanner-owl.owl-carousel").length &&
      $("#homeBanner-owl.owl-carousel .item").length > 1
    ) {
      $("#homeBanner-owl.owl-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 2e3,
        lazyLoad: true,
        navigation: false,
        loop: true,
        slideBy: 1,
        nav: false,
        dots: false,
        responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } },
      });
    }
    if (
      $(".staff-carousel").length &&
      $(".staff-carousel .card-container").length > 4
    ) {
      $(".staff-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplaySpeed: 2e3,
        lazyLoad: true,
        navigation: true,
        slideBy: 1,
        dots: false,
        center: true,
        responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 4 } },
      });
    } else {
      $(".staff-carousel .card-container").css("min-width", "240px");
      $(".staff-carousel .card-container").css("margin", "10px");
    }
    if (
      $("#product-detail-owl.owl-carousel").length &&
      $("#product-detail-owl.owl-carousel .item").length > 1
    ) {
      $("#product-detail-owl.owl-carousel").owlCarousel({
        lazyLoad: true,
        dots: true,
        nav: true,
        loop: false,
        slideBy: 1,
        items: 1,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>',
        ],
      });
    }
    if ($(".gallery-post").length) {
      var totalItems = $("#blog-carousel .item").length;
      var currentIndex = $("#blog-carousel div.active").index() + 1;
      $(".num").html("" + currentIndex + " / " + totalItems + "");
      $("#blog-carousel").carousel({ interval: 2900 });
      $("#blog-carousel").bind("slide.bs.carousel", function () {
        currentIndex = $("#blog-carousel div.active").index() + 1;
        $(".num").html("" + currentIndex + " / " + totalItems + "");
      });
    }
    if ($(".gallery-post").length) {
      var totalItems = $("#postgrid-carousel .item").length;
      var currentIndex = $("#postgrid-carousel div.active").index() + 1;
      $(".num").html("" + currentIndex + " / " + totalItems + "");
      $("#postgrid-carousel").carousel({ interval: 2900 });
      $("#postgrid-carousel").bind("slide.bs.carousel", function () {
        currentIndex = $("#postgrid-carousel div.active").index() + 1;
        $(".num").html("" + currentIndex + " / " + totalItems + "");
      });
    }
    webdesign_img();
    what_we_do_img();
    getintouch_img();
    if ($(".portfolio-image-block").length) {
      $(".portfolio-image-block").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
      });
    }
    if ($(".portfolio-image").length) {
      $(".portfolio-image").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
      });
    }
    if ($("#image-gallery").length) {
      $("#image-gallery").lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 4,
        responsive: [
          { breakpoint: 992, settings: { thumbItem: 3 } },
          { breakpoint: 768, settings: { thumbItem: 4 } },
          { breakpoint: 767, settings: { thumbItem: 4 } },
          { breakpoint: 500, settings: { thumbItem: 3 } },
        ],
        slideMargin: 0,
        thumbMargin: 30,
        speed: 500,
        auto: false,
        loop: true,
        onSliderLoad: function () {
          $("#image-gallery").removeClass("cS-hidden");
        },
      });
    }
    if ($("#vertical").length) {
      $("#vertical").lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        thumbItem: 3,
        verticalHeight: 564,
        thumbMargin: 20,
        responsive: [
          { breakpoint: 992, settings: { vThumbWidth: 100, thumbItem: 3 } },
          {
            breakpoint: 768,
            settings: {
              verticalHeight: 464,
              vThumbWidth: 100,
              thumbItem: 2,
              thumbMargin: 30,
            },
          },
          {
            breakpoint: 641,
            settings: {
              verticalHeight: 245,
              vThumbWidth: 60,
              thumbItem: 2,
              thumbMargin: 30,
            },
          },
        ],
        slideMargin: 0,
      });
    }
    if ($(".img-gallery-style").length) {
      $("#img_gallery_carousel").lightSlider({
        gallery: true,
        loop: true,
        item: 1,
        autoWidth: false,
        controls: true,
        enableDrag: false,
        thumbItem: 7,
        thumbMargin: 20,
        galleryMargin: 18,
        responsive: [
          { breakpoint: 800, settings: { item: 1, slideMargin: 7 } },
          { breakpoint: 480, settings: { thumbItem: 4 } },
        ],
      });
    }
    if ($(".img-gallery-style.layout2").length) {
      var url;
      $(".img-gallery-style.layout2").magnificPopup({
        delegate: ".gallery-popup",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: { enabled: true, navigateByImgClick: false, preload: [0, 1] },
        image: {
          tError:
            ("<a href=" % url) % ">The image #%curr%</a> could not be loaded.",
        },
      });
    }
    $(".qtyplus").on("click", function (e) {
      e.preventDefault();
      var fieldName = $(this).attr("data-field");
      var currentVal = parseInt($("input[name=" + fieldName + "]").val());
      if (!isNaN(currentVal)) {
        $("input[name=" + fieldName + "]").val(currentVal + 1);
      } else {
        $(this)
          .find("input[name=" + fieldName + "]")
          .val(0);
      }
    });
    $(".qtyminus").on("click", function (e) {
      e.preventDefault();
      var fieldName = $(this).attr("data-field");
      var currentVal = parseInt($("input[name=" + fieldName + "]").val());
      if (!isNaN(currentVal) && currentVal > 0) {
        $("input[name=" + fieldName + "]").val(currentVal - 1);
      } else {
        $("input[name=" + fieldName + "]").val(0);
      }
    });
    $(".wc-tabs-wrapper, .woocommerce-tabs")
      .on("init", function () {
        $(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();
        var hash = window.location.hash;
        var url = window.location.href;
        var $tabs = $(this).find(".wc-tabs, ul.tabs").first();
        if (
          hash.toLowerCase().indexOf("comment-") >= 0 ||
          hash === "#reviews"
        ) {
          $tabs.find("li.reviews_tab a").click();
        } else if (
          url.indexOf("comment-page-") > 0 ||
          url.indexOf("cpage=") > 0
        ) {
          $tabs.find("li.reviews_tab a").click();
        } else {
          $tabs.find("li:first a").click();
        }
      })
      .on("click", ".wc-tabs li a, ul.tabs li a", function () {
        var $tab = $(this);
        var $tabs_wrapper = $tab.closest(".wc-tabs-wrapper, .woocommerce-tabs");
        var $tabs = $tabs_wrapper.find(".wc-tabs, ul.tabs");
        $tabs.find("li").removeClass("active");
        $tabs_wrapper.find(".wc-tab, .panel:not(.panel .panel)").hide();
        $tab.closest("li").addClass("active");
        $tabs_wrapper.find($tab.attr("href")).show();
        return false;
      })
      .trigger("init");
    $("a.woocommerce-review-link").click(function () {
      $(".reviews_tab a").click();
      return true;
    });
    $("#rating")
      .hide()
      .before(
        '<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>'
      );
    $("body")
      .on("click", "#respond p.stars a", function () {
        var $star = $(this),
          $rating = $(this).closest("#respond").find("#rating"),
          $container = $(this).closest(".stars");
        $rating.val($star.text());
        $star.siblings("a").removeClass("active");
        $star.addClass("active");
        $container.addClass("selected");
        return false;
      })
      .on("click", "#respond #submit", function () {
        var $rating = $(this).closest("#respond").find("#rating"),
          rating = $rating.val();
        if (
          $rating.size() > 0 &&
          !rating &&
          wc_single_product_params.review_rating_required === "yes"
        ) {
          window.alert(wc_single_product_params.i18n_required_rating_text);
          return false;
        }
      });
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 15e3,
      values: [0, 1e4],
      slide: function (event, ui) {
        $("#amount").html("$" + ui.values[0]);
        $("#amount2").html("$" + ui.values[1]);
      },
    });
    $("#amount").html("$" + $("#slider-range").slider("values", 0));
    $("#amount2").html("$" + $("#slider-range").slider("values", 1));
    homeshop_img();
    if (
      $(".related-products .products").length &&
      $(".related-products .products li").length > 1
    ) {
      $(".related-products .products").owlCarousel({
        autoplay: true,
        animateIn: "fadeIn",
        loop: true,
        dots: false,
        nav: true,
        responsive: { 0: { items: 1 }, 640: { items: 2 }, 992: { items: 3 } },
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
      });
    }
    $(".payment-gatway .payment-option input").on("click", function () {
      if ($(".payment-gatway .payment-option input:not(:checked)")) {
        $(".payment-gatway .payment-option").removeClass("style1");
      }
      if ($(".payment-gatway .payment-option input").is(":checked")) {
        $(this).parent().addClass("style1");
      }
    });
    if ($("#map-canvas-contact").length == 1) {
      initialize("map-canvas-contact");
    }
    if ($("#map-canvas-contact2").length == 1) {
      initialize("map-canvas-contact2");
    }
    if ($("#map-canvas-contact3").length == 1) {
      initialize("map-canvas-contact3");
    }
    if ($("#map-canvas-contact4").length == 1) {
      initialize("map-canvas-contact4");
    }
    if ($("#map-canvas-contact5").length == 1) {
      initialize("map-canvas-contact5");
    }
    if ($("#map-canvas-contact6").length == 1) {
      initialize("map-canvas-contact6");
    }
    if ($("#map-canvas-contact7").length == 1) {
      initialize("map-canvas-contact7");
    }
    contact1right_bg();
    $("#btn_submit").on("click", function (event) {
      event.preventDefault();
      var mydata = $("form").serialize();
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "contact.php",
        data: mydata,
        success: function (data) {
          if (data["type"] == "error") {
            $("#alert-msg").html(data["msg"]);
            $("#alert-msg").removeClass("alert-msg-success");
            $("#alert-msg").addClass("alert-msg-failure");
            $("#alert-msg").show();
          } else {
            $("#alert-msg").html(data["msg"]);
            $("#alert-msg").addClass("alert-msg-success");
            $("#alert-msg").removeClass("alert-msg-failure");
            $("#input_name").val("");
            $("#input_email").val("");
            $("#input_company").val("");
            $("#input_subject").val("");
            $("#textarea_message").val("");
            $("#alert-msg").show();
          }
        },
        error: function (xhr, textStatus, errorThrown) {},
      });
      return false;
    });
    $("#btn_submit1").on("click", function (event) {
      event.preventDefault();
      var mydata = $("form").serialize();
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "contact1.php",
        data: mydata,
        success: function (data) {
          if (data["type"] == "error") {
            $("#alert-msg_1").html(data["msg"]);
            $("#alert-msg_1").removeClass("alert-msg-success");
            $("#alert-msg_1").addClass("alert-msg-failure");
            $("#alert-msg_1").show();
          } else {
            $("#alert-msg_1").html(data["msg"]);
            $("#alert-msg_1").addClass("alert-msg-success");
            $("#alert-msg_1").removeClass("alert-msg-failure");
            $("#input_name_1").val("");
            $("#input_email_1").val("");
            $("#input_subject_1").val("");
            $("#textarea_message_1").val("");
            $("#alert-msg_1").show();
          }
        },
        error: function (xhr, textStatus, errorThrown) {},
      });
      return false;
    });
    $("#btn_submit2").on("click", function (event) {
      event.preventDefault();
      var mydata = $("form").serialize();
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "contact2.php",
        data: mydata,
        success: function (data) {
          if (data["type"] == "error") {
            $("#alert-msg_2").html(data["msg"]);
            $("#alert-msg_2").removeClass("alert-msg-success");
            $("#alert-msg_2").addClass("alert-msg-failure");
            $("#alert-msg_2").show();
          } else {
            $("#alert-msg_2").html(data["msg"]);
            $("#alert-msg_2").addClass("alert-msg-success");
            $("#alert-msg_2").removeClass("alert-msg-failure");
            $("#input_name_2").val("");
            $("#input_email_2").val("");
            $("#input_subject_2").val("");
            $("#textarea_message_2").val("");
            $("#alert-msg_2").show();
          }
        },
        error: function (xhr, textStatus, errorThrown) {},
      });
      return false;
    });
    if ($("#tweecool").length) {
      $("#tweecool").tweecool({
        username: "@onistaweb2",
        limit: 2,
        profile_image: false,
      });
    }
  });
  $(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();
    about_img();
    left_bg();
    webdesign_img();
    what_we_do_img();
    getintouch_img();
    homeshop_img();
    contact1right_bg();
  });
  $(window).load(function () {
    if (!$("html").is(" .ie6, .ie7, .ie8 ")) {
      $("#site-loader").delay(1e3).fadeOut("slow");
    } else {
      $("#site-loader").css("display", "none");
    }
    var $container = $(".portfolio-list");
    $container.isotope({
      itemSelector: "li",
      gutter: 0,
      transitionDuration: "0.5s",
    });
    $("#filters a").on("click", function () {
      $("#filters a").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $container.isotope({ filter: selector });
      return false;
    });
    if ($(".blog_masonry").length) {
      var $container = $(".blog-masonry-list");
      $container.isotope({
        itemSelector: ".blog-masonry-box",
        gutter: 0,
        transitionDuration: "0.5s",
      });
    }
  });
})(jQuery);
let modalDisplayed = 0;
$(".ask-us-anything").click(function () {
  $(".modal-overlay.enquiry-modal").show();
  $(".modal-content.enquiry-modal").animate({ top: "50%", opacity: "1" }, 300);
  modalDisplayed = 1;
  $("body").css({ "overflow-y": "hidden" });
  let businessName = $(".business-name").text();
  let kid = $(this).data("kid");
  let datatype = $(this).data("type");
  var messageText;
  if ($(this).data("type") == "general") {
    messageText =
      "Hi " +
      businessName +
      ',\n\nI wanted to know about "_____________________________"\nPlease inform me on my below email address/mobile number.\nThanks.';
  } else {
    messageText =
      "Hi " +
      businessName +
      ',\n\nI wanted to know about "' +
      $(this).data("name") +
      '"\nPlease inform me on my below email address/mobile number.\nThanks.';
  }
  $(".modal-content.enquiry-modal textarea").val(messageText);
  $('.modal-content.enquiry-modal input[name="kid"]').val(kid);
  $('.modal-content.enquiry-modal input[name="datatype"]').val(datatype);
});
$(".whatsapp-link").click(function () {
  $(".whatsapp-modal .modal-content form").css({ display: "block" });
  $(".whatsapp-modal .modal-content h2").css({ display: "block" });
  $(".whatsapp-modal.modal-content .message").text("");
  $(".whatsapp-modal .modal-content .modal-close").css({ display: "none" });
  $(".modal-overlay.whatsapp-modal").show();
  $(".modal-content.whatsapp-modal").animate({ top: "50%", opacity: "1" }, 300);
  modalDisplayed = 1;
  $("body").css({ "overflow-y": "hidden" });
  let businessName = $(".business-name").text();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://5f801d039b0d2a00013a362a.preview.boostkit.dev/data/countries.json",
    success: function (resp) {
      let countriesData = resp;
      let countryDropdownTemplate = "";
      countriesData.map(function (item) {
        if (item.Iso === "+91") {
          countryDropdownTemplate =
            countryDropdownTemplate +
            `<option value="${item.Iso}" selected>${item.Iso}</option>`;
        } else {
          countryDropdownTemplate =
            countryDropdownTemplate +
            `<option value="${item.Iso}">${item.Iso}</option>`;
        }
      });
      document.getElementById("countrycode").innerHTML =
        countryDropdownTemplate;
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log("not found");
    },
  });
});
$(".sharelink-toggle").click(function () {
  let content = $(this).siblings(".sharelink-toggle-html").html();
  let title = $(this).data("type");
  let productcategoryverb = $(this).data("productcategoryverb");
  $(".modal-overlay.share-modal").show();
  $(".modal-content.share-modal").animate({ top: "50%", opacity: "1" }, 300);
  $(".modal-content.share-modal .content").html(content);
  if (title == "products") {
    title = "Share this on:";
  } else if (title == "updates") {
    title = "Share this update on:";
  } else if (title == "custompages") {
    title = "Share this page on:";
  }
  $(".modal-content.share-modal h2").text(title);
  modalDisplayed = 1;
  $("body").css({ "overflow-y": "hidden" });
  $(".tooltip-toggle").each(function () {
    let title = $(this).data("title");
    $(this).tooltip({ title: title, placement: "auto" });
  });
});
$(".modal-overlay").on("click", function (event) {
  if (event.target == this || event.target.className == "modal-close") {
    modalDisplayed = 0;
    $(".modal-content").animate({ top: "40%", opacity: 0 }, 300, function () {
      setTimeout(function () {
        $(".modal-overlay").hide();
      }, 200);
    });
    $("body").css({ "overflow-y": "scroll" });
  }
});
$(document).keyup(function (e) {
  if (e.keyCode == 27 && modalDisplayed == 1) {
    modalDisplayed = 0;
    $(".modal-content").animate({ top: "40%", opacity: 0 }, 300, function () {
      setTimeout(function () {
        $(".modal-overlay").hide();
      }, 200);
    });
    $("body").css({ "overflow-y": "scroll" });
  }
});
function mobile_validate(class_name) {
  var phone_msg = "Please enter valid mobile number.";
  var subm3 = "Submit";
  var regExMob = new RegExp("/[0-9]/");
  var blank_msg = "Please enter a valid mobile number/email address";
  if ($.trim($("." + class_name + " input").val()).length == 0) {
    $(".enquiry-modal.modal-content .message").text(blank_msg);
    $(".enquiry-modal.modal-content .message").css({ color: "red" });
    return false;
  }
  if (
    $.trim($("." + class_name + " input").val()).length != 10 &&
    !$("." + class_name + " input")
      .val()
      .match(regExMob)
  ) {
    $(".enquiry-modal.modal-content .message").text(phone_msg);
    $(".enquiry-modal.modal-content .message").css({ color: "red" });
    return false;
  }
  return true;
}
function email_validate(class_name) {
  var email_msg = "Please enter a valid email address";
  var subm2 = "Submit";
  var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  var regExEmail = new RegExp(pattern);
  var blank_msg = "Please enter a valid mobile number/email address";
  if ($.trim($("." + class_name + " input").val()).length == 0) {
    $(".enquiry-modal.modal-content .message").text(blank_msg);
    $(".enquiry-modal.modal-content .message").css({ color: "red" });
    return false;
  }
  if (
    !$("." + class_name + " input")
      .val()
      .match(regExEmail)
  ) {
    $(".enquiry-modal.modal-content .message").text(email_msg);
    $(".enquiry-modal.modal-content .message").css({ color: "red" });
    return false;
  }
  return true;
}
function email_validate1(class_name) {
  $("." + class_name + " input")
    .last()
    .next()
    .html("");
  var email_msg = "Invalid Email Address.";
  var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  var regExEmail = new RegExp(pattern);
  var blank_msg = "Invalid Input Value";
  if ($.trim($("." + class_name + " input").val()).length == 0) {
    $("." + class_name + " input")
      .last()
      .next()
      .html(blank_msg);
    return false;
  }
  if (
    !$("." + class_name + " input")
      .last()
      .val()
      .match(regExEmail)
  ) {
    $("." + class_name + " input")
      .last()
      .next()
      .html(email_msg);
    return false;
  }
  return true;
}
function text_validate(class_name) {
  var text_msg =
    "Sorry, but that doesnt look like much of a query. Want to type something first?";
  var subm1 = "Submit";
  if ($.trim($("." + class_name + " textarea").val()).length < 2) {
    $(".enquiry-modal.modal-content .message").text(text_msg);
    $(".enquiry-modal.modal-content .message").css({ color: "red" });
    return false;
  }
  return true;
}
$(".enquiry-modal.modal-content .modal-submit").click(function () {
  var text_status;
  var mob_status;
  var email_status;
  var enq_msg;
  if (
    $.isNumeric(
      $(".enquiry-modal.modal-content input[name=contact-email]").val()
    )
  ) {
    mob_status = mobile_validate("enquiry-modal");
  } else {
    email_status = email_validate("enquiry-modal");
  }
  text_status = text_validate("enquiry-modal");
  if (text_status == false || mob_status == false || email_status == false) {
    return false;
  }
  var eCnt = $(".enquiry-modal.modal-content input[name=contact-email]").val();
  var eMsg = $(
    ".enquiry-modal.modal-content textarea[name=contact-message]"
  ).val();
  var eType = $('.enquiry-modal.modal-content input[name="datatype"]').html();
  var eId = $('.enquiry-modal.modal-content input[name="kid"]').html();
  KEQ(eCnt, eMsg, eType, eId);
});
function KEQ(eCnt, eMsg, eType, eId) {
  KitsuneBusinessEnquiry(
    { eMsg: eMsg, eCnt: eCnt, eType: eType, eid: eId },
    function (result) {
      $(".enquiry-modal.modal-content .message").text(result);
      $(".enquiry-modal.modal-content .message").css({ color: "#32be60" });
      $(".enquiry-modal.modal-content textarea[name=contact-message]").val("");
      $(".enquiry-modal.modal-content input[name=contact-email]").val("");
    },
    function (error) {
      $(".enquiry-modal.modal-content .message").text(error);
      $(".enquiry-modal.modal-content .message").css({ color: "red" });
    }
  );
}
$("#start-chat").click(function () {
  let enquiryMessage = $(
    ".whatsapp-modal .modal-content textarea[name=contact-message]"
  ).val();
  let enquiryContact = `${
    document.getElementById("countrycode").value.substring(1) +
    $(".whatsapp-modal .modal-content input[name=contact-email]").val()
  }`;
  KitsuneBusinessEnquiry(
    {
      eMsg: enquiryMessage,
      eCnt: enquiryContact,
      eType: "WHATSAPPQUERY",
      eid: "",
    },
    function (result) {
      $(".whatsapp-modal.modal-content .message").text(result);
      $(".whatsapp-modal.modal-content .message").css({ color: "#32be60" });
      $(".whatsapp-modal .modal-content .modal-close").css({
        display: "block",
      });
      $(".whatsapp-modal .modal-content h2").css({ display: "none" });
      $(".whatsapp-modal.modal-content textarea[name=contact-message]").val("");
      $(".whatsapp-modal.modal-content input[name=contact-email]").val("");
      $(".whatsapp-modal .modal-content form").css({ display: "none" });
      if (
        $(".whatsapp-modal .modal-content input[name=whatsapp-query]").val() ==
        "whatsapp"
      ) {
        let whatsappnumber = $("#whatsapp-number").text();
        let fptag = $("#fptag").text();
        ga("send", "event", "WHATSAPPQUERY", "click", fptag);
        let anchor = document.createElement("a");
        document.body.appendChild(anchor);
        anchor.style = "display: none";
        anchor.target = "_blank";
        anchor.href =
          "https://api.whatsapp.com/send?phone=" +
          whatsappnumber +
          "&text=" +
          enquiryMessage;
        anchor.click();
        document.body.removeChild(anchor);
      }
    },
    function (error) {
      $(".whatsapp-modal.modal-content .message").text(error);
      $(".whatsapp-modal.modal-content .message").css({ color: "red" });
    }
  );
});
$(".tooltip-toggle").each(function () {
  let title = $(this).data("title");
  $(this).tooltip({ title: title });
});
$(document).ready(function () {
  var width = $(window).width();
  var height = $(window).height();
  if ($("body").hasClass("home-page")) {
    $("header#header").removeClass("navbar-fixed-top");
    $(".navbar-toggle").click(function (event) {
      event.preventDefault();
      if ($(window).scrollTop() <= 300) {
        if ($(".navbar-toggle").hasClass("collapsed")) {
          $(".header-two").css({ "background-color": "white" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a"
          ).css({ color: "black" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a>i"
          ).css({ color: "black" });
          $(".header-two .cart img").css({ filter: "invert(1)" });
          $(".header-two .search img").css({ filter: "invert(1)" });
        } else {
          $(".header-one").css({ "background-color": "rgba(0,0,0,.26)" });
          $(".header-one .contact-info a span").css({ color: "white" });
          $(".header-two").css({ "background-color": "transparent" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a"
          ).css({ color: "white" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a>i"
          ).css({ color: "white" });
          $(".header-two .cart img").css({ filter: "invert(0)" });
          $(".header-two .search img").css({ filter: "invert(0)" });
        }
      } else {
        $(".header-one .contact-info a span").css({ color: "#000" });
        $(".header-two").css({ "background-color": "white" });
        $(".home-page .header-section .ow-navigation .nav.navbar-nav>li>a").css(
          { color: "black" }
        );
        $(".home-page .header-section .ow-navigation .nav.navbar-nav>li>a").css(
          { color: "black" }
        );
        $(".header-two .cart img").css({ filter: "invert(1)" });
        $(".header-two .search img").css({ filter: "invert(1)" });
      }
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() <= 300) {
        if ($(".navbar-toggle").hasClass("collapsed")) {
          $(".header-one").css({ "background-color": "rgba(0,0,0,.26)" });
          $(".header-one .contact-info a span").css({ color: "white" });
          $(".header-two").css({ "background-color": "transparent" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a"
          ).css({ color: "white" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a>i"
          ).css({ color: "white" });
          $(".header-two .cart img").css({ filter: "invert(0)" });
          $(".header-two .search img").css({ filter: "invert(0)" });
        } else {
          $(".header-one").css({ "background-color": "white" });
          $(".header-one .contact-info a span").css({ color: "black" });
          $(".header-two").css({ "background-color": "white" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a"
          ).css({ color: "black" });
          $(
            ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a>i"
          ).css({ color: "black" });
          $(".header-two .cart img").css({ filter: "invert(1)" });
          $(".header-two .search img").css({ filter: "invert(1)" });
        }
      } else {
        $(".header-one .contact-info a span").css({ color: "black" });
        $(".header-two").css({ "background-color": "white" });
        $(".home-page .header-section .ow-navigation .nav.navbar-nav>li>a").css(
          { color: "black" }
        );
        $(
          ".home-page .header-section .ow-navigation .nav.navbar-nav>li>a>i"
        ).css({ color: "black" });
        $(".header-two .cart img").css({ filter: "invert(1)" });
        $(".header-two .search img").css({ filter: "invert(1)" });
      }
    });
  }
});
