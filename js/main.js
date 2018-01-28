import $ from 'jquery';

window.$ = $;
window.jQuery = $;

require('./slides.min');

(function(){
  $('.slider').slidesjs({
    play: {
    active: true,
    effect: "slider",
    interval: 6000,
    auto: true,
    swap: true,
    pauseOnHover: false,
    restartDelay: 2500
    }
  });
})();
