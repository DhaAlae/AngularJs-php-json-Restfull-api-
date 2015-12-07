<?php

require '../vendor/autoload.php';
require 'Config.php';
require 'model\project.php';

 header('Content-type: application/json');
$db = new db();
$conn = $db->getConnection();
/*$project = ;*/
$projects = array();

    $data = $conn->query('select * from project');
    
    foreach ($data as $key) {
      array_push($projects,new project($key['id_project'],$key['nom_project'])
      );
    }

echo json_encode($projects);
