$(document).ready(function(){
  AOS.init();

  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
  });

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function(){
    if ( ( (!$(".scroll_up_button").hasClass("active")) && ($(window).scrollTop() > $("#banner_block").outerHeight()) ) ||  ($(".scroll_up_button").hasClass("active")) && ($(window).scrollTop() < $("#banner_block").outerHeight())){
      $(".scroll_up_button").toggleClass("active");  
    }
  });

  const swiper1 = new Swiper('#modal_window1 .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    allowTouchMove: false,

    // Navigation arrows
    navigation: {
      nextEl: '#modal_window1 .swiper-button-next',
      prevEl: '#modal_window1 .swiper-button-prev',
    },
  });


  $(".close_btn").click(function(){
    $(this).parents(".modal_window_container").fadeOut(500);
  });

  $(".portfolio_work_curtain_btn").click(function(){
    $(".modal_window_container .swiper-wrapper").append($(this).parent().find(".portfolio_work_curtain_gallery").html());
    $(".modal_window_title").append($(this).parent().find(".portfolio_work_curtain_title").text());
    $(".modal_window_subtitle").append($(this).parent().find(".portfolio_work_curtain_subtitle").text());
    $(".modal_window_view_btn").attr("href", $(".portfolio_work_curtain_link").attr("href"));
    $("#modal_window1").fadeIn(500);
    swiper1.update();
  });

  $("#modal_window1 .close_btn").click(function(){
    $("#modal_window1").fadeOut(500);
    setTimeout(function(){$(".modal_window_container .swiper-wrapper, .modal_window_title, .modal_window_subtitle").empty()}, 500);
  });

  $("#contact_form").validate({
    debug: false,
    rules:{ 
      mail: {
        required: true,
        email: true
      },
      f_name:{
        required: true,
        minlength: 2
      },
      message:{
        required: true,
        minlength: 2
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "form.php",
        context: $("#contact_form"),
        data: $("#contact_form").serialize(),
        success: function(){
          
        },
        fail: function(){
          alert("Упс! Ваше сообщение не было отправлено, попробуйте снова");
        }
      });
      //$(".modal_window_container").fadeIn(500);
    },
    invalidHandler: function(event, validator) {
      // 'this' refers to the form
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message = errors == 1
          ? 'You missed 1 field. It has been highlighted'
          : 'You missed ' + errors + ' fields. They have been highlighted';
        $("div.error span").html(message);
        $("div.error").show();
      } else {
        $("div.error").hide();
      }
    }
  });

  $('.toggle').click(function() {
    $(this).toggleClass('active');
    $('.mobile_menu').toggleClass('active');
  });

  $(".mobile_menu ul li a").click(function(){
    $('.toggle').toggleClass('active');
    $('.mobile_menu').toggleClass('active');
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Init plugin
  if ($(window).outerWidth()>800){
    $('#stars').constellation({
      star: {
        width: 3
      },
      line: {
        color: 'rgba(157, 188, 225, 1)'
      },
      radius: 200,
      length: 250
    });
  }else{
    $('#stars').constellation({
      star: {
        width: 3
      },
      line: {
        color: 'rgba(157, 188, 225, 1)'
      },
      radius: 250,
      length: 90
    });
  }
});
