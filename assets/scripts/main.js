/* eslint-disable */

/**
 * REMOVE IT
 *
 * Скрипты можно писать тут, либо подключать с помощь https://github.com/coderhaoxin/gulp-file-include
 *
 * ВАЖНО: Файлы просто подключаются, без транспиляции (babel) минификации, поэтому нужно писать на ES5
 * Так же доступа к блокам, которые собираются с помощью вебпака не будет.
 */

$(document).ready(function () {
  $('.js-catalog').click(function () {

    //$('.container__slider .main').fadeOut();
    //$('.main-section__content').toggleClass('main-section__content_catalog');
    $('.container__slider').toggleClass('container__slider_catalog');

    $('.main-section').toggleClass('main-section_black');
    $(this).toggleClass('is-active');


  });
});


/* eslint-enable */
