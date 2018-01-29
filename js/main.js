import $ from 'jquery';
import * as slide from './slides.min.js';

// (() => {  
// })();

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
  

})()