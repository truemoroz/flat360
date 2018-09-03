/* eslint-disable */
const $ = window.$;
import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

export default function header() {

  let video_bg = false;

  $('.js-catalog').click(function () {

    //$('.container__slider .main').fadeOut();
    //$('.main-section__content').toggleClass('main-section__content_catalog');
    $('.popup-catalog').toggleClass('is-active');
    $(this).toggleClass('is-active');
    //freeze();
    //console.log($(window).scrollTop());

    if ($(window).scrollTop() === 0) {
      video_bg = false;
      //$('.header__video').toggleClass('header__video_disabled');
    }
    else  {
      video_bg = true;
    }

    if (video_bg) {
      $('.header__video').removeClass('header__video_disabled');
      video_bg = false;
    } else {
      $('.header__video').addClass('header__video_disabled');
    }

    if($(this).hasClass('is-active')) {
      freeze();
    }
    else {
      unfreeze();
    }
    $('header').toggleClass('header_popup');

    if ($(this).hasClass('buttons__menu')) {
      if ($(this).hasClass('is-active')) {
        $(this).children().attr('src', './assets/images/close.png');
      }
      else {
        $(this).children().attr('src', './assets/images/menu.png');
      }
    }

    $('.main-section').toggleClass('main-section_black');




  });

}


/* eslint-enable */
