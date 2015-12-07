<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 2:31 PM
 */

require '../vendor/autoload.php';
require 'Config.php';
require 'model\lot.php';

    header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $lots = array();

    $data = $conn->query('select * from lot');

    foreach ($data as $key) {
        array_push($lots, new lot($key['id_lot'], $key['superficie'], $key['id_project'], $key['nom_lot'], $key['vendu'])
        );
    }

    echo json_encode($lots);