import $ from 'jquery';
import * as Navbar from './navbar';
import * as Form from './form';

window.$ = $;
window.jQuery = $;

require('./slides.min');

(function(){
  //slider
  cargarSlider();
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



  //funciones scrolltop para barra de navegacion
  $(".scroll-presupuestador").click(function() {
    $('html, body').animate({
      scrollTop: $("#presupuestador").offset().top
    }, 1000);
  });

  $(".scroll-que-hacemos").click(function() {
    $('html, body').animate({
      scrollTop: $("#que-hacemos").offset().top
    }, 1000);
  });

  $(".scroll-como-hacemos").click(function() {
    $('html, body').animate({
      scrollTop: $("#como-hacemos").offset().top
    }, 1000);
  });

  $(".scroll-nuestros-proyectos").click(function() {
    $('html, body').animate({
      scrollTop: $("#nuestros-proyectos").offset().top
    }, 1000);
  });

  $(".scroll-contacto").click(function() {
    $('html, body').animate({
      scrollTop: $("#contacto").offset().top
    }, 1000);
  });




  //funcion para tipoCliente
  let empresaActive = false;
  let emprendedorActive = false;

  function empresaControl(){

    if(empresaActive == false){
      document.getElementById("divEmpresa").classList.remove("box-active");
      $("#divEmpresa").hover(function(){
        $("#empresa").html("¡CREZCAMOS!");
      },function(){
        $("#empresa").html("TENGO <br class='m-hide l-hide'> UNA EMPRESA");
      });
      $("#empresa").hover(function(){
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-down'> </span> ");
      },function(){
        $("#empresa").html("¡CREZCAMOS!");
      });
      
    } else{
      document.getElementById("divEmpresa").classList.add("box-active");
      $("#divEmpresa").hover(function(){
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");
      },function(){
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");
      });
      $("#empresa").hover(function(){
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span> ");
      },function(){
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");
      });
      
     
    };
    if (emprendedorActive == false ){
      document.getElementById("divEmprendedor").classList.remove("box-active");
      $("#divEmprendedor").hover(function(){
        $("#emprendedor").html("¡EMPRENDAMOS!");
      },function(){
        $("#emprendedor").html("SOY <br class='m-hide l-hide'> EMPRENDEDOR");
      });
      $("#emprendedor").hover(function(){
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-down'> </span> ");
      },function(){
        $("#emprendedor").html("¡EMPRENDAMOS!");
      });

    

    }else{
      document.getElementById("divEmprendedor").classList.add("box-active");
      $("#divEmprendedor").hover(function(){
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span> ");
      },function(){
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span> ");
      });
      $("#emprendedor").hover(function(){
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span> ");
      },function(){
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span>");
      });
      
     
    };
  }

  //funciones para mostrar tipoClienteDescription
  $(document).ready(function(){

    $("#divEmpresa").on( "click", function() {	 
      empresaActive = (!empresaActive); 
      emprendedorActive = false;
      empresaControl();
      $('#clienteDescriptionEmpresa').toggle("slow");
      $("#emprendedor").html("SOY <br class='m-hide l-hide'> EMPRENDEDOR");
      
      if(empresaActive == true){
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");

      } else {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-down'> </span>");
      }
      if($('#clienteDescriptionEmprendedor').show()){
        $('#clienteDescriptionEmprendedor').hide();
      }
    });

    $("#divEmprendedor").on( "click", function() {	 
      emprendedorActive = (!emprendedorActive);
      empresaActive = false;
      empresaControl();
      $('#clienteDescriptionEmprendedor').toggle("slow");
      
      $("#empresa").html("TENGO UNA <br class='m-hide l-hide'> EMPRESA");

      if(emprendedorActive == true){
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span>");

      } else {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-down'> </span>");
      }
      
      if($('#clienteDescriptionEmpresa').show()){
        $('#clienteDescriptionEmpresa').hide();
      }
    });
  });



  //funcion cargar imagenes de slider
  function cargarSlider(){
    var slider = document.getElementsByClassName("header-slider")[0];
    slider.innerHTML = `
    <div class="slide">
      <picture>
        <source srcset="img/index/home-slider1.webp" type="image/webp"/>
        <img src="img/index/home-slider1.jpg" alt="SOCIAL MEDIA"/>
      </picture>
    </div>
    <div class="slide">
      <picture>
        <source srcset="img/index/home-slider2.webp" type="image/webp"/>
        <img src="img/index/home-slider2.jpg" alt="MARKETING DIGITAL"/>
      </picture>
    </div>
    <div class="slide">
      <picture>
        <source srcset="img/index/home-slider3.webp" type="image/webp"/>
        <img src="img/index/home-slider3.jpg" alt="DESAROLLO WEB"/>
      </picture>
    </div>
    <div class="slide">
      <picture>
        <source srcset="img/index/home-slider4.webp" type="image/webp"/>
        <img src="img/index/home-slider4.jpg" alt="PUBLICIDAD"/>
      </picture>
    </div>
    <div class="slide">
      <picture>
        <source srcset="img/index/home-slider5.webp" type="image/webp"/>
        <img src="img/index/home-slider5.jpg" alt="SISTEMAS"/>
      </picture>
    </div>
    <div class="slide">
      <picture>
        <source srcset="img/index/home-slider6.webp" type="image/webp"/>
        <img src="img/index/home-slider6.jpg" alt="DISEÑO GRÁFICO"/>
      </picture>
    </div>
    `;
    
  }

  window.addEventListener('DOMContentLoaded',empresaControl);
})();

