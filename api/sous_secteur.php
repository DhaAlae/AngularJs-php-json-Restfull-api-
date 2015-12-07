<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/13/2015
 * Time: 4:55 PM
 */
require '../vendor/autoload.php';
require 'Config.php';
require 'model\sous_secteur.php';

        header('Content-type: application/json');
        $db = new db();
        $conn = $db->getConnection();
        $secteurs = array();

        $data = $conn->query('select * from sous_secteur');

        foreach ($data as $key) {
            array_push($secteurs, new sous_secteur($key['id_sous_secteur'],$key['nom_sous_secteur'],$key['id_secteur'])
            );
        }

        echo json_encode($secteurs);