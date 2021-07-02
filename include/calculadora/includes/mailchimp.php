<?php

  $emailname          = $email_solicitante;
  $firstname          = $nombre_solicitante;
  $telephone          = $telefono;
  $pais_usuario       = $pais;
  $plataforma         = "Simulador";

  $data = [
    'email'       => $emailname,
    'status'      => 'subscribed',
    'firstname'   => $firstname,
    'pais'        => $pais_usuario,
    'telephone'   => $telephone,
    'plataforma'  => $plataforma
  ];

  function syncMailchimp($data) {
    $apiKey = '5b2bc8bbf17c137a379c4cca8074a0db-us1';
    $listId = '325a63abb4';

    $memberId = md5(strtolower($data['email']));
    $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

    $json = json_encode([
        'email_address' => $data['email'],
        'status'        => $data['status'], // "subscribed","unsubscribed","cleaned","pending"
        'merge_fields'  => [
            'FNAME'     => $data['firstname'],
            'MMERGE2'   => $data['pais'],
            'PHONE'     => $data['telephone'],
            'MMERGE6'   => $data['plataforma'],
        ]
    ]);

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);                                                                                                                 

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return $httpCode;
    }

    syncMailchimp($data);

?>