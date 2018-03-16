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
      
    } else{
      document.getElementById("divEmpresa").classList.add("box-active");
      $("#divEmpresa").hover(function(){
        $("#empresa").html("¡CREZCAMOS!");
      },function(){
        $("#empresa").html("¡CREZCAMOS!");
      });
      
     
    };
    if (emprendedorActive == false ){
      document.getElementById("divEmprendedor").classList.remove("box-active");
      $("#divEmprendedor").hover(function(){
        $("#emprendedor").html("¡EMPRENDAMOS!");
      },function(){
        $("#emprendedor").html("SOY <br class='m-hide l-hide'> EMPRENDEDOR");
      });

    

    }else{
      document.getElementById("divEmprendedor").classList.add("box-active");
      $("#divEmprendedor").hover(function(){
        $("#emprendedor").html("¡EMPRENDAMOS!");
      },function(){
        $("#emprendedor").html("¡EMPRENDAMOS!");
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
      $("#empresa").html("¡CREZCAMOS!");
      $("#emprendedor").html("SOY <br class='m-hide l-hide'> EMPRENDEDOR");

      if($('#clienteDescriptionEmprendedor').show()){
        $('#clienteDescriptionEmprendedor').hide();
      }
    });

    $("#divEmprendedor").on( "click", function() {	 
      emprendedorActive = (!emprendedorActive);
      empresaActive = false;
      empresaControl();
      $('#clienteDescriptionEmprendedor').toggle("slow");
      $("#emprendedor").html("¡EMPRENDAMOS!");
      $("#empresa").html("TENGO UNA <br class='m-hide l-hide'> EMPRESA");

      if($('#clienteDescriptionEmpresa').show()){
        $('#clienteDescriptionEmpresa').hide();
      }
    });
  });



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

