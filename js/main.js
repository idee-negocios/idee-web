import $ from 'jquery';
import * as Navbar from './navbar';
import * as Form from './form';

window.$ = $;
window.jQuery = $;

require('./slides.min');

(function () {
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
  $(".scroll-presupuestador").click(function () {
    $('html, body').animate({
      scrollTop: $("#presupuestador").offset().top
    }, 1000);
  });

  $(".scroll-que-hacemos").click(function () {
    $('html, body').animate({
      scrollTop: $("#que-hacemos").offset().top
    }, 1000);
  });

  $(".scroll-como-hacemos").click(function () {
    $('html, body').animate({
      scrollTop: $("#como-hacemos").offset().top
    }, 1000);
  });

  $(".scroll-nuestros-proyectos").click(function () {
    $('html, body').animate({
      scrollTop: $("#nuestros-proyectos").offset().top
    }, 1000);
  });

  $(".scroll-contacto").click(function () {
    $('html, body').animate({
      scrollTop: $("#contacto").offset().top
    }, 1000);
  });




  //funcion para tipoCliente
  let empresaActive = false;
  let emprendedorActive = false;

  function empresaControl() {

    if (empresaActive == false) {
      document.getElementById("divEmpresa").classList.remove("box-active");
      $("#divEmpresa").hover(function () {
        $("#empresa").html("¡CREZCAMOS!");
      }, function () {
        $("#empresa").html("TENGO <br class='m-hide l-hide'> UNA EMPRESA");
      });
      $("#empresa").hover(function () {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-down'> </span> ");
      }, function () {
        $("#empresa").html("¡CREZCAMOS!");
      });

    } else {
      document.getElementById("divEmpresa").classList.add("box-active");
      $("#divEmpresa").hover(function () {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");
      }, function () {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");
      });
      $("#empresa").hover(function () {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span> ");
      }, function () {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");
      });


    };
    if (emprendedorActive == false) {
      document.getElementById("divEmprendedor").classList.remove("box-active");
      $("#divEmprendedor").hover(function () {
        $("#emprendedor").html("¡EMPRENDAMOS!");
      }, function () {
        $("#emprendedor").html("SOY <br class='m-hide l-hide'> EMPRENDEDOR");
      });
      $("#emprendedor").hover(function () {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-down'> </span> ");
      }, function () {
        $("#emprendedor").html("¡EMPRENDAMOS!");
      });



    } else {
      document.getElementById("divEmprendedor").classList.add("box-active");
      $("#divEmprendedor").hover(function () {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span> ");
      }, function () {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span> ");
      });
      $("#emprendedor").hover(function () {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span> ");
      }, function () {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span>");
      });


    };
  }

  //funciones para mostrar tipoClienteDescription
  $(document).ready(function () {

    $("#divEmpresa").on("click", function () {
      empresaActive = (!empresaActive);
      emprendedorActive = false;
      empresaControl();
      $('#clienteDescriptionEmpresa').toggle("slow");
      $("#emprendedor").html("SOY <br class='m-hide l-hide'> EMPRENDEDOR");

      if (empresaActive == true) {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-up'> </span>");

      } else {
        $("#empresa").html("¡CREZCAMOS! <span class='arrow-down'> </span>");
      }
      if ($('#clienteDescriptionEmprendedor').show()) {
        $('#clienteDescriptionEmprendedor').hide();
      }
    });

    $("#divEmprendedor").on("click", function () {
      emprendedorActive = (!emprendedorActive);
      empresaActive = false;
      empresaControl();
      $('#clienteDescriptionEmprendedor').toggle("slow");

      $("#empresa").html("TENGO UNA <br class='m-hide l-hide'> EMPRESA");

      if (emprendedorActive == true) {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-up'> </span>");

      } else {
        $("#emprendedor").html("¡EMPRENDAMOS! <span class='arrow-down'> </span>");
      }

      if ($('#clienteDescriptionEmpresa').show()) {
        $('#clienteDescriptionEmpresa').hide();
      }
    });
  });



  //funcion cargar imagenes de slider
  function cargarSlider() {
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


  //funcionalidad de casos de exito
  function proyectosInit() {

    let proyectos = document.getElementsByClassName("proyectos")[0];
    let proyectsDescription = false;
    // let activeCeco = false;
    // let activeEfectoWeb = false;
    // let activeJohnJarana = false;
    // let activeSushibox = false;
    // let activeDrinking = false;
    // let activeGustavoArenas = false;

    
      $(".proyecto-ceco").click(() => {
        $(".proyectos-description").removeClass("hide");
        $(".box-ceco").removeClass("hide");
        $(".modal-container").removeClass("hide");
        proyectsDescription = true;
        proyectosCeco();
      });
    
      $(".modal-container").click(() => {
      $(".modal-container").addClass("hide");
      $(".proyectos-description").addClass("hide");
      $(".box-ceco").addClass("hide");
      $(".box-efecto-web").addClass("hide");
      $(".box-john-jarana").addClass("hide");
      $(".box-sushibox").addClass("hide");
      $(".box-drinking").addClass("hide");
      $(".box-gustavo-arenas").addClass("hide");
      proyectsDescription = false;
      });
      

    



  }

  function proyectosCeco() {
    let positionY = document.getElementsByClassName('proyecto-box-img-ceco')[0];
    let cecoText = document.getElementsByClassName('proyecto-box-text-ceco')[0];
    //ceco have 5 description
    let subtitle2 = cecoText.getElementsByClassName('subtitle2');
    let description = cecoText.getElementsByClassName('description');
    const mqL = window.matchMedia( "(min-width: 1020px)" );

    if (mqL.matches){

      $(positionY).scroll(() => {
        if (positionY.scrollTop > 3179) {
          subtitle2[4].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
  
          description[4].classList.remove('hide');
          description[0].classList.add('hide');
          description[1].classList.add('hide');
          description[2].classList.add('hide');
          description[3].classList.add('hide');
        } else if (positionY.scrollTop > 2750) {
          subtitle2[3].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[4].classList.remove('active');
  
          description[3].classList.remove('hide');
          description[0].classList.add('hide');
          description[1].classList.add('hide');
          description[2].classList.add('hide');
          description[4].classList.add('hide');
        } else if (positionY.scrollTop > 1180) {
          subtitle2[2].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
  
          description[2].classList.remove('hide');
          description[0].classList.add('hide');
          description[1].classList.add('hide');
          description[3].classList.add('hide');
          description[4].classList.add('hide');
        } else if (positionY.scrollTop > 770) {
          subtitle2[1].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
          
          description[1].classList.remove('hide');
          description[0].classList.add('hide');
          description[2].classList.add('hide');
          description[3].classList.add('hide');
          description[4].classList.add('hide');
        } else if (positionY.scrollTop > 346) {
          subtitle2[0].classList.add('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
  
          description[0].classList.remove('hide');
          description[1].classList.add('hide');
          description[2].classList.add('hide');
          description[3].classList.add('hide');
          description[4].classList.add('hide');
        } else {
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
  
          description[0].classList.add('hide');
          description[1].classList.add('hide');
          description[2].classList.add('hide');
          description[3].classList.add('hide');
          description[4].classList.add('hide');
        }
  
      })
    } else {
      $(positionY).scroll(() => {
        if (positionY.scrollTop > 1330) {
          subtitle2[4].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
        } else if (positionY.scrollTop > 1150) {
          subtitle2[3].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[4].classList.remove('active');
        } else if (positionY.scrollTop > 490) {
          subtitle2[2].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
        } else if (positionY.scrollTop > 326) {
          subtitle2[1].classList.add('active');
          subtitle2[0].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
        } else if (positionY.scrollTop > 155) {
          subtitle2[0].classList.add('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
        } else {
          subtitle2[0].classList.remove('active');
          subtitle2[1].classList.remove('active');
          subtitle2[2].classList.remove('active');
          subtitle2[3].classList.remove('active');
          subtitle2[4].classList.remove('active');
        }

      })
    }


  }

  window.addEventListener('DOMContentLoaded', empresaControl);
  window.addEventListener('DOMContentLoaded', proyectosInit);
})();