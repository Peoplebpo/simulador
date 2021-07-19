<?php
    //-----------------------------------------------------------------------------
    //------------- Enviar datos a Bitrix NEGOCIACION------------------------------
    //-----------------------------------------------------------------------------

    $first_name = "German Sanhueza";
    $phone      = "983682329";
    $email      = "prueba@prueba.com";
    $empresa    = "peoplebpo";
    $rut        = "13413471-2";
    $pais       = "Chile";

    $queryUrl 	= 'https://peoplebpo.bitrix24.es/rest/27/xbz2x7buwx9qjgvo/crm.lead.add';

    $queryData  = http_build_query(array(
        
    'fields' 			    => array(
    "TITLE" 			    => 'Simulacion Servicios', // titulo negociacion
    "NAME"               	=> $first_name, // nombre del cliente
    "COMPANY_TITLE"      	=> $empresa, // nombre empresa
    "UF_CRM_60F589640EA61" 	=> $rut, // Rut cliente
    "ADDRESS_COUNTRY" 	    => $pais,
    "ASSIGNED_BY_ID" 	    => 29,
    "PHONE" 			    => array(array("VALUE" => $phone, "VALUE_TYPE" => "WORK" )),
    "EMAIL" 			    => array(array("VALUE" => $email, "VALUE_TYPE" => "WORK" )),

  
    )
    ,));

    $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
    ));

    $result = curl_exec($curl);
    curl_close($curl);

?>