import $ from 'jquery';
import * as Navbar from './navbar';

window.$ = $;
window.jQuery = $;

require('./slides.min');

(function(){
  $('.slider').slidesjs({
    play: {
      active: false,
      effect: "fade", //fade or slide
      interval: 4000,
      auto: true,
      swap: true,
      pauseOnHover: true,
      restartDelay: 2500
    }
  });

  $('.que-hacemos-slider').slidesjs({
    play: {
      active: false,
      effect: "slide", //fade or slide
      interval: 4000,
      auto: false,
      swap: false,
      pauseOnHover: false,
      restartDelay: 2500
    },
    pagination: {
      active: false,
    }
  });

  $('.como-hacemos-slider').slidesjs({
    play: {
      active: false,
      effect: "slide", //fade or slide
      auto: false,
      swap: false,
      pauseOnHover: false,
      restartDelay: 2500
    },
    pagination: {
      active: false,
    }
  });


  //funcion para tipoCliente
  function empresaControl(){
    $("#divEmpresa").hover(function(){
      $("#empresa").html("¡CREZCAMOS!");
    },function(){
      $("#empresa").html("SOY EMPRESA");
    });
    $("#divEmprendedor").hover(function(){
      $("#emprendedor").html("¡CREZCAMOS!");
    },function(){
      $("#emprendedor").html("SOY EMPRENDEDOR");
    });
  }

  // //funcion cargar imagenes de slider
  // function cargarSlider(){
  //   var slider = document.getElementsByClassName("slidesjs-control")[0];
  //   slider.innerHTML = `
  //   <img class="slide" src="img/slider-home1.png", alt="Social Media")>
  //   <img class="slide" src="img/slider-home2.png", alt="Marketin Digital")>
  //   <img class="slide" src="img/slider-home3.png", alt="Desarrollo Web")>
  //   <img class="slide" src="img/slider-home4.png", alt="Publicidad")>
  //   <img class="slide" src="img/slider-home5.png", alt="Sistemas")>
  //   <img class="slide" src="img/slider-home6.png", alt="Diseño Gráfico")>
  //   `
  // }
  // window.addEventListener('DOMContentLoaded', cargarSlider);
  window.addEventListener('DOMContentLoaded',empresaControl);
})();

