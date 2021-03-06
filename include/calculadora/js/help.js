$(document).ready(function () {

    // Cambia el zoom del navegador

    document.body.style.zoom = "90%";

    // Inicio esconde div de solucion y capacidades

    $('#despedida').hide();

    $('#div_s-marca').show();
    $('#div_s-call').show();
    $('#div_s-ejecutivos').show();
    $('#div_s-marketing').show();
    $('#div_s-office').show();
    $('#div_s-marketing').show();
    $('#div_s-rrss').show();
    $('#div_s-consultoria').show();
    $('#div_s-ecommerce').show();
    $('#div_s-sac').show();
    $('#div_s-whatsapp').show();

    $('#div_c-rrss').hide();
    $('#div_c-ivr').hide();
    $('#div_c-predictivo').hide();
    $('#div_c-ecommerce').hide();
    $('#div_c-crm').hide();
    $('#div_c-bpo').hide();
    $('#div_c-center').hide();
    $('#div_c-customer').hide();
    $('#div_c-consultoria').hide();
    $('#div_titulo-capacidades').hide();
    $('#div_c-digital').hide();

    // inicio habilita botones recursos tecnologicos

    $('#btn_tecnologicos').on('change', function () {

        if ($(this).is(':checked')) {

            // Hacer algo si el checkbox ha sido seleccionado 

            console.log('on');

            $('#div_s-marca').show();
            $('#div_s-marketing').show();

        } else {

            // Hacer algo si el checkbox ha sido deseleccionado 

            console.log('off');

            $('#div_s-marca').hide();
            $('#div_s-marketing').hide();


        }
    });

    // inicio habilita botones recursos ejecucion

    $('#btn_ejecucion').on('change', function () {

        if ($(this).is(':checked')) {

            // Hacer algo si el checkbox ha sido seleccionado 

            console.log('on');

            $('#div_s-ecommerce').show();
            $('#div_s-call').show();
            $('#div_s-rrss').show();
            $('#div_s-whatsapp').show();

        } else {

            // Hacer algo si el checkbox ha sido deseleccionado 

            console.log('off');

            $('#div_s-ecommerce').hide();
            $('#div_s-call').hide();
            $('#div_s-rrss').hide();
            $('#div_s-whatsapp').hide();


        }
    });

    // inicio habilita botones recursos estrategicos

    $('#btn_estrategicos').on('change', function () {

        if ($(this).is(':checked')) {

            // Hacer algo si el checkbox ha sido seleccionado 

            console.log('on');

            $('#div_s-sac').show();
            $('#div_s-ejecutivos').show();
            $('#div_s-office').show();
            $('#div_s-consultoria').show();

        } else {

            // Hacer algo si el checkbox ha sido deseleccionado 

            console.log('off');

            $('#div_s-sac').hide();
            $('#div_s-ejecutivos').hide();
            $('#div_s-office').hide();
            $('#div_s-consultoria').hide();

        }
    });

    // inicio oculta o muestra mensaje no ha seleccionado soluciones

    $('#btn_sig-capacidades').on('click', function () {

        if (($('#btn_estrategicos').is(':checked')) && ($('#btn_ejecutivos').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_estrategicos').is(':checked')) && ($('#btn_sac').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_estrategicos').is(':checked')) && ($('#btn_office').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_estrategicos').is(':checked')) && ($('#btn_consultoria').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_ejecucion').is(':checked')) && ($('#btn_call').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_ejecucion').is(':checked')) && ($('#btn_whatsapp').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_ejecucion').is(':checked')) && ($('#btn_rrss').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_ejecucion').is(':checked')) && ($('#btn_ecommerce').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_tecnologicos').is(':checked')) && ($('#btn_marca').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else if (($('#btn_tecnologicos').is(':checked')) && ($('#btn_marketing').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_aviso1').hide();
            $('#div_aviso2').hide();
            $('#div_titulo-capacidades').show();
            $('#btn_sig_volumetria').attr("disabled", false);

        } else {

            $('#div_aviso1').show();
            $('#div_aviso2').show();
            $('#div_titulo-capacidades').hide();
            $('#btn_sig_volumetria').attr("disabled", true);

        }
    });

    // inicio muestra capacidades segun solucion seleccionada

    $('#btn_sig-capacidades').on('click', function () {

        if (($('#btn_tecnologicos').is(':checked')) && ($('#btn_marca').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-rrss').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-rrss').hide();

        }

        if (($('#btn_tecnologicos').is(':checked')) && ($('#btn_marketing').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-digital').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-digital').hide();

        }

        if (($('#btn_ejecucion').is(':checked')) && ($('#btn_call').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-ivr').show();
            $('#div_c-predictivo').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-ivr').hide();
            $('#div_c-predictivo').hide();

        }

        if (($('#btn_ejecucion').is(':checked')) && ($('#btn_whatsapp').is(':checked')) | ($('#btn_rrss').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-crm').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-crm').hide();

        }


        if (($('#btn_ejecucion').is(':checked')) && ($('#btn_ecommerce').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-ecommerce').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-ecommerce').hide();

        }

        if (($('#btn_estrategicos').is(':checked')) && ($('#btn_ejecutivos').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-center').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-center').hide();

        }

        if (($('#btn_estrategicos').is(':checked')) && ($('#btn_sac').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-customer').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-customer').hide();

        }

        if (($('#btn_estrategicos').is(':checked')) && ($('#btn_office').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-bpo').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-bpo').hide();

        }

        if (($('#btn_estrategicos').is(':checked')) && ($('#btn_consultoria').is(':checked'))) {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-consultoria').show();

        } else {

            // Hacer algo si el checkbox ha sido seleccionado 

            $('#div_c-consultoria').hide();

        }
    });

    // inicio cuadro mensajes descripcion de ayuda 

    $("#email").one("click", (function () {

        Swal.fire({
            icon: undefined,
            html: `
        <div class="alert d-flex align-items-center" role="alert"
        style="background-color: #c9d219; padding: 5px; width: 320px;">
        <p><span style="color: #322a45; font-size: 14px;">RECUERDA</span>
        <br>
        <br>
        <span style="font-size: 16px;">Ingresa un correo v??lido para recibir la simulaci??n de la soluciones que selecciones.</span></p>
        <div>
        <img src="images/advertencia.png">
        </div>
        </div>`,
            toast: true,
            showConfirmButton: false,
            position: 'bottom-start',
            background: '#c9d219',
            padding: '1px',
            timer: 8000
        })






    }));

    $("#ventas_mes").one("click", (function () {

        Swal.fire({
            icon: undefined,
            html: `
        <div class="alert d-flex align-items-center" role="alert"
        style="background-color: #c9d219; padding: 5px; width: 320px;">
        <p><span style="color: #322a45; font-size: 14px;">RECUERDA</span>
        <br>
        <br>
        <span style="font-size: 16px;">Para que la simulaci??n se ajuste a sus necesidades ingrese una volumetria valida.</span></p>
        <div>
        <img src="images/advertencia.png">
        </div>
        </div>`,
            toast: true,
            showConfirmButton: false,
            position: 'bottom-start',
            background: '#c9d219',
            padding: '1px',
            timer: 3000
        })
    }));

    $("#help_diseno_marca, #lb_diseno_marca").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Dise??o de Marca',
            html: '<p style="text-align: justify;"><strong >Dise??o e identidad de Marca:</strong> La creaci??n de una marca inolvidable es la clave para atraer a tu p??blico objetivo y posibles clientes. M??s que un nombre y un logo, creamos un concepto que transmita tu prop??sito y filosof??a, definiendo tu identidad corporativa, storytelling, tono de comunicaci??n, aplicaciones de marca, dise??o de logo, isotipo, packing y mucho m??s</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''
        })
    });

    $("#help_ecommerce, #lb_ecommerce").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'E-Commerce',
            html: '<p style="text-align: justify;"><strong >Tienda Online - Ecommerce:</strong> Empieza a vender tus productos y servicios en l??nea, creamos tu tienda online a medida seg??n tus necesidades, f??cil administraci??n, carrito de compras, pagos seguros. Tu proyecto digital f??cil, r??pido y automatizado.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_sac, #lb_sac").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'SAC',
            html: '<p style="text-align: justify;"><strong >Servicio de Atenci??n al Cliente SAC:</strong> Nos encargamos de la gesti??n de servicio al cliente. Mejora las interacciones con tus clientes ofreciendo una experiencia conectada con servicios todo en uno, atenci??n al cliente, ventas, cobranzas y m??s. Usamos la Inteligencia Artificial para transformar tu empresa.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_marketing, #lb_marketing").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Marketing Digital',
            html: '<p style="text-align: justify;"><strong >Marketing Digital:</strong> En estos ??ltimos a??os la presencia digital se ha convertido en un paso esencial para toda marca. En People creamos estrategias de marketing digital que llegan a tu audiencia ideal, en el momento y lugar adecuado cautivando y convirtiendo ese contacto en m??s ventas. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_call, #lb_call").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Click To Call',
            html: '<p style="text-align: justify;"><strong >Bot??n de Llamada desde tu Web:</strong> Ofrece a tus clientes la posibilidad de ponerse en contacto de forma inmediata, desde cualquier parte del mundo tus clientes estar??n a un click, ahorra costos y tiempo aumentando tus ventas, estableciendo relaciones m??s estrechas con tus clientes, mejorando tu servicio al cliente y mucho m??s. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_ejecutivos, #lb_ejecutivos").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Ejecutivos',
            html: '<p style="text-align: justify;"><strong >Ejecutivos:</strong> Humanizamos tus procesos con ejecutivos orientados en gestionar eficientemente las diferentes interacciones con tus clientes como asesor??a, venta, postventa, recobros y mucho m??s.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_office, #lb_office").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Back Office',
            html: '<p style="text-align: justify;"><strong >Back Office:</strong> ??Te hacemos la vida m??s f??cil! Mientras te enfocas en que tu negocio crezca, nosotros gestionamos de manera calificada todos los procesos administrativos, contabilidad, seguimiento de clientes, gesti??n de recursos humanos y m??s.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_whatsapp, #lb_whatsapp").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Whatsapp',
            html: '<p style="text-align: justify;"><strong >Bot??n Whatsapp en Tu Web:</strong> ??Conversa con tus clientes! Acelera tus ventas con el bot??n de whatsapp en tu web, automatiza las conversaciones y aumenta las oportunidades comerciales, garantizando la seguridad y protecci??n de tu base de datos. Integraci??n con tu CRM para un seguimiento inmediato. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_rrss, #lb_rrss").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'RRSS',
            html: '<p style="text-align: justify;"><strong >Redes Sociales:</strong> Potenciamos tus redes sociales posicionando tu marca con contenido de calidad, aumentando seguidores y multiplicando tus ventas. En People tendr??s a tu disposici??n community manager y dise??ador que se encargar??n de la estrategia de contenidos que t?? necesitas.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_consultoria, #lb_consultoria").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Consultoria',
            html: '<p style="text-align: justify;"><strong >Consultor??a:</strong> ??Especialistas en crecimiento! Ofrecemos la mejor asesor??a para el crecimiento de tu marca, te ayudamos a transformar tu negocio a trav??s de estrategias adaptadas a tus necesidades, y enfocadas en el uso de la tecnolog??a.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_grrss, #lb_grrss").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Gesti??n de RRSS',
            html: '<p style="text-align: justify;"><strong >Redes Sociales:</strong> Potenciamos tus redes sociales posicionando tu marca con contenido de calidad, aumentando seguidores y multiplicando tus ventas. En People tendr??s a tu disposici??n community manager y dise??ador que se encargar??n de la estrategia de contenidos que t?? necesitas.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_ivr, #lb_ivr").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'IVR',
            html: '<p style="text-align: justify;"><strong >IVR (Respuesta de Voz Interactiva):</strong> Mejora tu productividad automatizando consultas repetitivas. Crea un sistema de IVR para enrutar llamadas de manera precisa utilizando el reconocimiento de voz. Logra una campa??a de voz que cumpla 100% con la regulaci??n. ??IVR - Poderoso y f??cil de usar!.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_bpo, #lb_bpo").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'BPO',
            html: '<p style="text-align: justify;"><strong >BPO (Externalizaci??n de procesos):</strong> Destaca tu negocio con el servicio de externalizaci??n de procesos empresariales PEOPLE. Brindamos apoyo en sus procesos adaptando sus necesidades en oportunidades de negocio que generan valores agregados.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_predictivo, #lb_predictivo").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Discador Predictivo',
            text: 'Contenido Discador Predictivo',
            footer: ''
        })
    });

    $("#help_center, #lb_center").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Contact Center',
            html: '<p style="text-align: justify;"><strong >Contact Center:</strong> Un centro de llamadas potente que facilita el contacto con tus clientes, tenemos herramientas y servicios multicanal brindando soluciones de la m??s alta calidad al menor costo. ??Aumenta tus ganancias con resultados de calidad!</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_gecommerce, #lb_gecommerce").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'E-Commerce',
            html: '<p style="text-align: justify;"><strong >Tienda Online - Ecommerce:</strong> Empieza a vender tus productos y servicios en l??nea, creamos tu tienda online a medida seg??n tus necesidades, f??cil administraci??n, carrito de compras, pagos seguros. Tu proyecto digital f??cil, r??pido y automatizado.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_gcustomer, #lb_gcustomer").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Customer Experience',
            html: '<p style="text-align: justify;"><strong >Customer Experience:</strong> Brinda experiencias ??nicas pensadas en cada cliente, garantizando que cada interacci??n con su marca sea un ??xito.  Cliente Inc??gnito, Valoraci??n de Experiencia, Investigaci??n, Desarrollo de Experiencia, y muchos m??s.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_gcrm, #lb_gcrm").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'CRM',
            html: '<p style="text-align: justify;"><strong >CRM - (Gesti??n de clientes):</strong> Da a los clientes una resoluci??n r??pida y f??cil a sus problemas. Le ayudamos a ofrecer una experiencia conectada con un conjunto de servicios de colaboraci??n todo en uno. ??Un CRM que re??ne todas sus funciones empresariales!  </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_gconsultoria, #lb_gconsultoria").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Consultoria',
            html: '<p style="text-align: justify;"><strong >Consultor??a:</strong> ??Especialistas en crecimiento! Ofrecemos la mejor asesor??a para el crecimiento de tu marca, te ayudamos a transformar tu negocio a trav??s de estrategias adaptadas a tus necesidades, y enfocadas en el uso de la tecnolog??a.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    $("#help_digital, #lb_digital").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Marketing Digital',
            html: '<p style="text-align: justify;"><strong >Marketing Digital:</strong> En estos ??ltimos a??os la presencia digital se ha convertido en un paso esencial para toda marca. En People creamos estrategias de marketing digital que llegan a tu audiencia ideal, en el momento y lugar adecuado cautivando y convirtiendo ese contacto en m??s ventas. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor: '#231F36',
            footer: ''

        })
    });

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // inicio validacion aceptacion de condiciones y envio de correo electronico

    $("#btn_enviar").click(function () {

        // inicio validar campos
        var ventas_mes = $('#ventas_mes').val();
        var interacciones_mes = $('#interacciones_mes').val();
        var potenciales_mes = $('#potenciales_mes').val();
        var correo = $('#email').val();

        if (
            $('#nombre').val() == '' ||
            $('#nombre_empresa').val() == '' ||
            $('#rut_empresa').val() == '' ||
            $('#email').val() == '' ||
            $('#telefono').val() == '' ||
            $('#pais').val() == '') {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'ERROR',
                text: 'Complete todos los campos',
                confirmButtonText: 'CERRAR',
                confirmButtonColor: '#C9D218',
                confirmButtonTextColor: '#231F36'
            })

            return false;

        } else if (ventas_mes == '' | interacciones_mes == '' | potenciales_mes == '') {

            Swal.fire({
                position: 'center',
                width: 800,
                icon: 'error',
                title: 'ERROR',
                text: 'Los Campos Volumetria deben ser Igual o Mayor a 0',
                confirmButtonText: 'CERRAR',
                confirmButtonColor: '#C9D218',
                confirmButtonTextColor: '#231F36',
            })

            return false;

        } else if ($('#email').val().indexOf('@', 0) == -1 || $('#email').val().indexOf('.', 0) == -1) {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'ERROR',
                text: 'Correo ingresado no es valido',
                confirmButtonText: 'CERRAR',
                confirmButtonColor: '#C9D218',
                confirmButtonTextColor: '#231F36'
            })

            return false;

        } else {

            $('#principal').hide();

            Swal.fire({
                title: 'Condiciones Manejo de Datos',
                html: '<p style="text-align: justify;"><strong>PEOPLE</strong> utilizar?? su informaci??n exclusivamente para enviar simulaci??n de costos de servicio a trav??s de Email.</p> <p style="text-align: justify;">Recuerde que para enviar la simulaci??n, debe aceptar este aviso pulsando el bot??n de "Aceptar", o rechazar el uso de la informaci??n entregada pulsando "Rechazar". </p>',
                width: 800,
                allowOutsideClick: false,
                showDenyButton: true,
                confirmButtonText: 'ACEPTO',
                confirmButtonColor: '#C9D218',
                denyButtonText: 'RECHAZAR',
                denyButtonColor: '#E03552',


            }).then((result) => {
                if (result.isConfirmed) {

                    // Inicio Enviar datos seleccionados a php para que envie simulacion por correo electronico

                    var datos = $('#frm_simulacion').serialize();

                    let timerInterval
                    Swal.fire({
                        title: 'ESPERE POR FAVOR!',
                        timer: 5000,
                        imageUrl: 'https://i.ibb.co/PT4fRMF/978.gif',
                        text: 'Cada vez mas cerca de la soluci??n mas sencilla para la transformaci??n digital y aumentar tu rentabilidad',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#C9D218',


                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            $('#despedida').show();
                            Swal.fire({
                                position: 'center',
                                title: '??FELICIDADES SIMULACI??N CREADA!',
                                imageUrl: 'https://i.ibb.co/wz1tpcq/Trazado-7046.png',
                                showConfirmButton: false,
                                allowOutsideClick: false,
                                text: 'Estamos procesando tu simulaci??n. En unos instantes la enviaremos a su correo: ' + correo,
                            })

                            return false;
                        }
                    })

                    var valor_pais = $('#pais').val();
                    var chile = "includes/procesa_envio_chile.php";
                    var peru = "includes/procesa_envio_peru.php";
                    var colombia = "includes/procesa_envio_colombia.php";
                    var latam = "includes/procesa_envio_latam.php";
                    var usa = "includes/procesa_envio_usa.php";
                    var espana = "includes/procesa_envio_espana.php";

                    direccion = (valor_pais == 'Chile') ? chile :
                        (valor_pais == 'Peru') ? peru :
                        (valor_pais == 'Colombia') ? colombia :
                        (valor_pais == 'Latam') ? latam :
                        (valor_pais == 'Usa') ? usa : espana;

                    $.ajax({
                        type: "POST",
                        url: direccion,
                        data: datos,

                    });

                    // Fin Enviar datos seleccionados a php para que envie simulacion por correo electronico

                } else if (result.isDenied) {
                    Swal.fire({

                            html: '<div><img src="https://i.ibb.co/tD9ccMD/manoc.png"></div>',
                            title: 'No acepto las Condiciones',
                            confirmButtonText: 'CERRAR',
                            confirmButtonColor: '#C9D218',

                        }),
                        $('#principal').show();
                }

            })

        }
    });


});