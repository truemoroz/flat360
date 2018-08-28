export const HIDDEN = 'dropdown/shown';
export const SHOWN = 'dropdown/hidden';
export const BEFORE_SHOW = 'dropdown/beforeshow';
export const BEFORE_HIDE = 'dropdown/beforehide';

const $ = window.$;

// let isOpen = false;

/**
 *
 * @param {jQuery Element} dropdown
 * @param {Boolean} show
 */
const toggle = (dropdown, show = true) => {
  if (!dropdown.length) {
    return;
  }

  const event = [BEFORE_HIDE, BEFORE_SHOW][Number(show)];
  const btn = dropdown.prev();

  if (btn.hasClass('js-dropdown-toggle')) {
    btn.toggleClass('is-active', show);
  }

  dropdown
      .trigger(event)
      .toggleClass('is-active', show);
};


$(document).on('click', '.js-dropdown-toggle', function (e) {
  const btn = $(this);
  const dropdown = btn.next();

  if (!dropdown.hasClass('js-dropdown')) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  toggle(dropdown, !btn.hasClass('is-active'));
});

/**
 * Trigger shown/hidden event, after transition end
 */
$(document).on('transitionend', '.js-dropdown', function () {
  const self = $(this);
  const isActive = Number(self.hasClass('is-active'));

  self.trigger([HIDDEN, SHOWN][isActive]);
});

/**
 * Hide all visible dropdown before to show new one
 */
$(document).on(BEFORE_SHOW, '.js-dropdown', () => {
  $('.js-dropdown.is-active').each(function () {
    toggle($(this), false);
  });
});

/**
 * Hide dropdown when click outside
 */
$(document).on('click', (e) => {
  const target = $(e.target);

  if (target.hasClass('js-dropdown') || target.parents('.js-dropdown').length) {
    return;
  }

  $('.js-dropdown.is-active').each(function () {
    toggle($(this), false);
  });
});

// const Dropdown = document.getElementsByClassName('js-dropdown-toggle');

// $('.js-dropdown-toggle').on('mouseout', () => {
//   // const target = $(e.target);
//   $('.js-dropdown.is-active').each(function () {
//     toggle($(this), false);
//   });
// });

let timer;

function doSomething() {
  $('.js-dropdown.is-active').each(function () {
    toggle($(this), false);
  });
}

$('.js-dropdown-toggle, .js-dropdown').mouseleave(() => {
  timer = setTimeout(doSomething, 100);
}).mouseenter(() => {
  clearTimeout(timer);
});

// $('.js-dropdown-toggle').mouseenter(() => {
//   /* анимация начало */
// // в то время как timePassed идёт от 0 до 2000
// // left принимает значения от 0 до 400px
// //   function draw(timePassed) {
// //     // const width = timePassed / 10;
// //     $('.button__bg')[0].style.width = `${timePassed / 10}%`;
// //     // train.style.left = timePassed / 5 + 'px';
// //   }
//
//   const start = Date.now(); // сохранить время начала
//
//   const timerHover = setInterval(() => {
//     // вычислить сколько времени прошло с начала анимации
//     const timePassed = Date.now() - start;
//     $('.button__bg')[0].style.width = `${timePassed / 10}%`;
//     if (timePassed >= 1000) {
//       clearInterval(timerHover); // конец через 2 секунды
//       // return;
//     }
//     // рисует состояние анимации, соответствующее времени timePassed
//     // draw(timePassed);
//   }, 50);
//   /* анимация конец */
// });


// $(document).on('mouseout', (e) => {
//   const target = $(e.target);
//   // console.log(target[0].classList);
//
//
//   // const targetTo = $(eTo.target);
// //  console.log('targetTo: ', targetTo[0].classList);
// // || target.hasClass('js-dropdown'))
//   if (target.hasClass('is-active') && !target.hasClass('js-dropdown-toggle')) {
//     if (target.hasClass('js-dropdown') || target.parents('.js-dropdown').length) {
//       return;
//     }
//
//     $('.js-dropdown.is-active').each(function () {
//       toggle($(this), false);
//     });
//   }
// });
// if (!target.hasClass('is-active')) {
// if (target.hasClass('js-dropdown') || target.parents('.js-dropdown').length) {
//   return;
// }
//
// $('.js-dropdown.is-active').each(function () {
//   toggle($(this), false);
// });
// }

