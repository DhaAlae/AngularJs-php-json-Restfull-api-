<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/12/2015
 * Time: 11:58 PM
 */

    require '../vendor/autoload.php';
    require 'Config.php';
    require 'model\secteur.php';

    header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $secteurs = array();

    $data = $conn->query('select * from secteur');

    foreach ($data as $key) {
        array_push($secteurs, new secteur($key['id_secteur'],$key['nom_secteur'])
        );
    }

    echo json_encode($secteurs);