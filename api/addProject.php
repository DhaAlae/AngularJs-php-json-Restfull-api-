<?php
/**
 * User: Dahmani Alae
 */
require '../vendor/autoload.php';
require 'Config.php';

  use Symfony\Component\HttpFoundation\Request;

     $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();

    $data = json_decode($request->getContent());
    $stmt = $conn->prepare('insert into project(nom_project) values(:nom)');
    $stmt->bindParam(':nom',$data->nom_project);
    $stmt->execute();
    $id = $conn->lastInsertId();

/**
 * insert in project_secteur table
 */
    $stt = $conn->prepare('insert into project_secteur(id_project,id_secteur) values(:noms,:id)');
    $var = array();
    $var = $data->id_secteur;
    $stt->bindParam(':noms',$id);
    foreach($var as $key){
        $stt->bindParam(':id',$key);
        $stt->execute();
    }




