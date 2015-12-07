<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 4:17 PM
 */


require '../vendor/autoload.php';
require 'Config.php';
require 'model\client.php';

    header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $clients = array();

    $data = $conn->query('select * from client');

    foreach ($data as $key) {
        array_push($clients, new client($key['id_client'], $key['raison_social'], $key['email'], $key['tel'], $key['chiffre_affaire'], $key['fax'], $key['pays_origin'], $key['ville'], $key['logo'], $key['site_web'], $key['adress_postal'], $key['nombre_employe'], $key['rc_appartenance'])
        );
    }

    echo json_encode($clients);