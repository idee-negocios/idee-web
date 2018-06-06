window.formUrl = 'https://dev.ideenegocios.com.ar:3001/idee-negocios';

(function() {
    //VARIABLES    
    var form = document.jkForm;
    var elementos = form.elements;
    var elem = [elementos[0]];
    var required = document.getElementsByClassName("required");
    const elements = form.elements.length;

    //FUNCIONES
    // enviar
    var enviar = function(e) {
        e.preventDefault();

        //COMO TODOS LOS ELEMENTOS SON REQUERIDOS SE LOS AGREGO ACA POR SI ALGUN BOLUDO LE SACA LA CLASE REQUERIDO
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add("required");
        }

        //CUENTO LOS ELEMENTOS PARA VER SI ALGUN BOLUDO BORRO EL ELEMENTO HTML ENTERO
        if (elementos.length !== elements) {
            console.log("faltan elementos");
        }

        // VALIDACION DE ELEMENTOS ANTES DE ENVIAR FORMULARIO
        else if (!validarInput()) {
            console.log("error inputs");
            form.submit.classList.add("error");
        }

        //ENVIAR FORMULARIO
        else {
            console.log("enviando...");
            form.submit.classList.add("correcto");
        

            //API ALAN
            var contactData = $(this).serializeArray();
            contactData = contactData.reduce((data, item) => {
                data[item.name] = item.value;
                return data;
            }, {});

            console.log(contactData);

            $.post(window.formUrl, contactData, function(res) {
                console.log('enviado', res);

                // MOSTRAR MENSAJE FORMULARIO ENVIADO CORRECTAMENTE
                $('.form').hide('slow', function() {
                    $('.contact-message').show('slow');
                });
            });
        }
    }

    // validar input
    var validarInput = function() {
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "tel") {
                if (isNaN(elementos[i].value)) {
                    elementos[i].classList.add('error', 'active');
                    console.log("fallo tel")
                    alert("Por favor, escriba un Teléfono valido y vuelva a intentarlo");
                    return false;
                }
            } else if (elementos[i].type == "email") {
                if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(elementos[i].value)) && elementos[i].value.length > 0) {
                    elementos[i].classList.add('error', 'active');
                    console.log("fallo email");
                    alert("Por favor, escriba un E-mail valido y vuelva a intentarlo");
                    return false;
                }
            }
        }
        for (var i = 0; i < required.length; i++) {
            if (required[i].value.length == 0) {
                required[i].classList.add('error', 'active');
                console.log("faltan campos obligatorios");
                alert("Algunos campos requeridos están vacíos. Por favor, completelos.");
                return false;
            }
        }
        return true;
    }


    //validar input de tipo tel
    var validarTel = function() {
        if (isNaN(this.value)) {
            this.classList.add('error', 'active');
        }
    }
    //validar input de tipo email
    var validarEmail = function() {
        if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.value)) && this.value.length > 0) {
            this.classList.add('error', 'active');
        }
    }


    //validar required
    var validarRequired = function() {
        if (this.value.length == 0) {
            this.classList.add('error', 'active');
        }
    }

    //focus
    var focusInput = function() {
        this.classList.remove('error', 'active');
    }

    //blur
    function blurInput() {
        if (this.value.length > 0) {
            // var longitud = this.value.length;
            // alert(longitud);
            this.classList.add('active');
        }
    }


    //EVENTOS

    form.addEventListener("submit", enviar);

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("focus", focusInput);
        elementos[i].addEventListener("blur", blurInput);

        if (elementos[i].type == "tel") {
            elementos[i].addEventListener("blur", validarTel);
        } else if (elementos[i].type == "email") {
            elementos[i].addEventListener("blur", validarEmail);
        }
    }
    for (var i = 0; i < required.length; i++) {
        required[i].addEventListener("blur", validarRequired)
    }



}())
