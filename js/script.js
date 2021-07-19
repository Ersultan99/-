function BackToTop(){
  let button = $('.back-to-top');

  $(window).on('scroll', ()=>{
    if ($(this).scrollTop()>=50) {
      button.fadeIn();
    }
    else{
      button.fadeOut();
    }
  });
  button.on('click', (e)=> {
    e.preventDefault();
    $('html').animate({scrollTop:0},1000);
  })
}

BackToTop();
function preloader(){
  $(() =>{
    setInterval(() =>{
          let p=$('.loader_bg');
    p.css('opacity',0); 
    setInterval(
      () => p.remove(),
      parseInt(p.css('.loader'))*1000
      );
    },1000);
 
  });
}
preloader();
function preloader(){
  $(() =>{
    setInterval(() =>{
          let p=$('.preloader');
    p.css('opacity',0); 
    setInterval(
      () => p.remove(),
      parseInt(p.css('--duration'))*1000
      );
    },1000);
 
  });
}
preloader();
function burgerMenu(selector){
  let menu = $(selector);
  let button = menu.find('.burger-menu__button');
  let links = menu.find('.burger-menu__link');
  let overlay = menu.find('.burger-menu__overlay');

  button.on('click', (e)=>{
    e.preventDefault();
    toggleMenu();
  })
  links.on('click', ()=>toggleMenu());
  overlay.on('click', ()=>toggleMenu());
  function toggleMenu(){
    menu.toggleClass('burger-menu-active');
    if (menu.hasClass('burger-menu-active')) {
      $('body').css('overflow','hidden');
    } else{
      $('body').css('overflow','visible');
    }
  }
}
burgerMenu('.burger-menu');
$(document).ready(function() {

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
  
});
$(function(){
  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});