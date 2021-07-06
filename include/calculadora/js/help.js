$(document).ready(function () {

    // Cambia el zoom del navegador

    document.body.style.zoom = "90%";

    // Inicio esconde div de solucion y capacidades

    $('#despedida').hide();

    $('#div_s-marca').hide();
    $('#div_s-call').hide();
    $('#div_s-ejecutivos').hide();
    $('#div_s-marketing').hide();
    $('#div_s-office').hide();
    $('#div_s-marketing').hide();
    $('#div_s-rrss').hide();
    $('#div_s-consultoria').hide();
    $('#div_s-ecommerce').hide();
    $('#div_s-sac').hide();
    $('#div_s-whatsapp').hide();

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

    $("#email").one("click",(function () {
        alertify.set({ delay: 8000 });
        alertify.success("<h5><label style='color: #FFD700;'>Recuerde!</label></h5> Ingresar un correo valido para que pueda ser enviada la simulación sin problemas.");
        
        })
    );

    $("#ventas_mes").one("click",(function () {

        alertify.set({ delay: 8000 });
        alertify.success("<h5><label style='color: #FFD700;'>Recuerde!</label></h5> Para que la simulación se ajuste a sus necesidades ingrese una volumetria valida.");
        
        })
    );

    $("#help_diseno_marca, #lb_diseno_marca").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Diseño de Marca',
            html: '<p style="text-align: justify;"><strong >Diseño e identidad de Marca:</strong> La creación de una marca inolvidable es la clave para atraer a tu público objetivo y posibles clientes. Más que un nombre y un logo, creamos un concepto que transmita tu propósito y filosofía, definiendo tu identidad corporativa, storytelling, tono de comunicación, aplicaciones de marca, diseño de logo, isotipo, packing y mucho más</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''
        })
    });

    $("#help_ecommerce, #lb_ecommerce").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'E-Commerce',
            html: '<p style="text-align: justify;"><strong >Tienda Online - Ecommerce:</strong> Empieza a vender tus productos y servicios en línea, creamos tu tienda online a medida según tus necesidades, fácil administración, carrito de compras, pagos seguros. Tu proyecto digital fácil, rápido y automatizado.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_sac, #lb_sac").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'SAC',
            html: '<p style="text-align: justify;"><strong >Servicio de Atención al Cliente SAC:</strong> Nos encargamos de la gestión de servicio al cliente. Mejora las interacciones con tus clientes ofreciendo una experiencia conectada con servicios todo en uno, atención al cliente, ventas, cobranzas y más. Usamos la Inteligencia Artificial para transformar tu empresa.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_marketing, #lb_marketing").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Marketing Digital',
            html: '<p style="text-align: justify;"><strong >Marketing Digital:</strong> En estos últimos años la presencia digital se ha convertido en un paso esencial para toda marca. En People creamos estrategias de marketing digital que llegan a tu audiencia ideal, en el momento y lugar adecuado cautivando y convirtiendo ese contacto en más ventas. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_call, #lb_call").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Click To Call',
            html: '<p style="text-align: justify;"><strong >Botón de Llamada desde tu Web:</strong> Ofrece a tus clientes la posibilidad de ponerse en contacto de forma inmediata, desde cualquier parte del mundo tus clientes estarán a un click, ahorra costos y tiempo aumentando tus ventas, estableciendo relaciones más estrechas con tus clientes, mejorando tu servicio al cliente y mucho más. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_ejecutivos, #lb_ejecutivos").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Ejecutivos',
            html: '<p style="text-align: justify;"><strong >Ejecutivos:</strong> Humanizamos tus procesos con ejecutivos orientados en gestionar eficientemente las diferentes interacciones con tus clientes como asesoría, venta, postventa, recobros y mucho más.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_office, #lb_office").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Back Office',
            html: '<p style="text-align: justify;"><strong >Back Office:</strong> ¡Te hacemos la vida más fácil! Mientras te enfocas en que tu negocio crezca, nosotros gestionamos de manera calificada todos los procesos administrativos, contabilidad, seguimiento de clientes, gestión de recursos humanos y más.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_whatsapp, #lb_whatsapp").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Whatsapp',
            html: '<p style="text-align: justify;"><strong >Botón Whatsapp en Tu Web:</strong> ¡Conversa con tus clientes! Acelera tus ventas con el botón de whatsapp en tu web, automatiza las conversaciones y aumenta las oportunidades comerciales, garantizando la seguridad y protección de tu base de datos. Integración con tu CRM para un seguimiento inmediato. </p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_rrss, #lb_rrss").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'RRSS',
            html: '<p style="text-align: justify;"><strong >Redes Sociales:</strong> Potenciamos tus redes sociales posicionando tu marca con contenido de calidad, aumentando seguidores y multiplicando tus ventas. En People tendrás a tu disposición community manager y diseñador que se encargarán de la estrategia de contenidos que tú necesitas.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_consultoria, #lb_consultoria").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Consultoria',
            html: '<p style="text-align: justify;"><strong >Consultoría:</strong> ¡Especialistas en crecimiento! Ofrecemos la mejor asesoría para el crecimiento de tu marca, te ayudamos a transformar tu negocio a través de estrategias adaptadas a tus necesidades, y enfocadas en el uso de la tecnología.</p>',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: '#C9D218',
            confirmButtonTextColor:'#231F36',
            footer: ''

        })
    });

    $("#help_grrss, #lb_grrss").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Gestión Redes Sociales',
            text: 'Contenido Gestión Redes Sociales',
            footer: ''
        })
    });

    $("#help_ivr, #lb_ivr").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'IVR',
            text: 'Contenido IVR',
            footer: ''
        })
    });

    $("#help_bpo, #lb_bpo").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'BPO',
            text: 'Contenido BPO',
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
            text: 'Contenido Contact Center',
            footer: ''
        })
    });

    $("#help_gecommerce, #lb_gecommerce").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'E-commerce',
            text: 'Contenido E-commerce',
            footer: ''
        })
    });

    $("#help_gcustomer, #lb_gcustomer").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Customer Experience',
            text: 'Contenido Customer Experience',
            footer: ''
        })
    });

    $("#help_gcrm, #lb_gcrm").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'CRM',
            text: 'Contenido CRM',
            footer: ''
        })
    });

    $("#help_gconsultoria, #lb_gconsultoria").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Consultoria',
            text: 'Contenido Consultoria',
            footer: ''
        })
    });

    $("#help_digital, #lb_digital").click(function () {

        Swal.fire({
            icon: 'question',
            title: 'Marketing Digital',
            text: 'Contenido Marketing Digital',
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
            })

            return false;

        }else if (ventas_mes == '' | interacciones_mes == '' | potenciales_mes == '') {

            Swal.fire({
                position: 'center',
                width: 800,
                icon: 'error',
                title: 'ERROR',
                text: 'Los Campos Volumetria deben ser Igual o Mayor a 0',
            })

            return false;

        } else if ($('#email').val().indexOf('@', 0) == -1 || $('#email').val().indexOf('.', 0) == -1) {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'ERROR',
                text: 'Correo ingresado no es valido',
            })

            return false;

        } else {

            $('#principal').hide();

            Swal.fire({
                title: 'Condiciones Manejo de Datos',
                text: `Peoplebpo utilizara su información exclusivamente para enviar simulación de costos de servicio a través de Email. Recuerde que para enviar la simulación, debe Aceptar este aviso pulsando el botón de "Aceptar", o rechazar el uso de la información entregada pulsando "Rechazar".`,
                width: 800,
                allowOutsideClick:false,
                showDenyButton: true,
                confirmButtonText: `Acepto`,
                denyButtonText: `Rechazar`,
            }).then((result) => {
                if (result.isConfirmed) {

                    // Inicio Enviar datos seleccionados a php para que envie simulacion por correo electronico

                    var datos = $('#frm_simulacion').serialize();

                    let timerInterval
                    Swal.fire({
                        title: 'ESPERE POR FAVOR!',
                        html: 'Creando Simulación</br><b></b>',
                        timer: 5000,
                        allowOutsideClick:false,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            timerInterval = setInterval(() => {
                                const content = Swal.getContent()
                                if (content) {
                                    const b = content.querySelector('b')
                                    if (b) {
                                        b.textContent = Swal.getTimerLeft()
                                    }
                                }
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            $('#despedida').show();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Simulación Creada',
                                showConfirmButton:false,
                                allowOutsideClick:false,
                                text: 'Esta fue Enviada al correo: '+ correo,
                            })

                            return false;
                        }
                    })

                        var valor_pais  = $('#pais').val();
                        var chile       = "includes/procesa_envio_chile.php";
                        var peru        = "includes/procesa_envio_peru.php" ;
                        var Colombia    = "includes/procesa_envio_colombia.php" ;

                        direccion       = (valor_pais == 'Chile') ? chile : (valor_pais == 'Peru') ? peru : Colombia;

                        $.ajax({
                        type: "POST",
                        url: direccion,
                        data: datos,

                    });

                    // Fin Enviar datos seleccionados a php para que envie simulacion por correo electronico

                } else if (result.isDenied) {
                    Swal.fire('No Acepto las Condiciones', '', 'info'),
                        $('#principal').show();
                }

            })

        }
    });


});