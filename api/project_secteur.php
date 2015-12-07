<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/13/2015
 * Time: 10:25 PM
 */
require '../vendor/autoload.php';
require 'Config.php';
require 'model\project_secteur.php';

header('Content-type: application/json');
        $db = new db();
        $conn = $db->getConnection();
        /*$project = ;*/
        $projects = array();

        $data = $conn->query('select * from project_secteur');

        foreach ($data as $key) {
            array_push($projects,new project_secteur($key['id_project_secteur'],$key['id_secteur'],$key['id_project'])
            );
        }

        echo json_encode($projects);
