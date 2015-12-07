<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 4:46 PM
 */

require '../vendor/autoload.php';
require 'Config.php';
require 'model\dirigent.php';

    header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $dirigents = array();

    $data = $conn->query('select * from dirigent');

    foreach ($data as $key) {
        array_push($dirigents, new dirigent($key['id_dirigent'], $key['nom'], $key['prenom'], $key['qualite'], $key['fonction'], $key['tel'], $key['fax'],$key['email'],$key['id_client'])
        );
    }

echo json_encode($dirigents);