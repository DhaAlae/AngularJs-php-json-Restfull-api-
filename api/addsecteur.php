<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/13/2015
 * Time: 2:12 PM
 */


require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;
    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());
    $nom = $data->nom_secteur;
    $stmt = $conn->prepare('insert into secteur(nom_secteur) values(:nom)');
    $stmt->bindParam(':nom',$nom);
    $stmt->execute();
   $id = $conn->lastInsertId();
/**
 * add on sous secteur table
 */
    $stt = $conn->prepare('insert into sous_secteur(nom_sous_secteur,id_secteur) values(:noms,:id)');
        $var = array();
        $var = $data->list_sous_secteur;
        $stt->bindParam(':id',$id);
      foreach($var as $key){
          $stt->bindParam(':noms',$key);
          $stt->execute();
      }


