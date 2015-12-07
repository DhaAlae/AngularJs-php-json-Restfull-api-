<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/12/2015
 * Time: 11:32 PM
 */

require '../vendor/autoload.php';
require 'Config.php';
require 'model\project.php';

    use Symfony\Component\HttpFoundation\Request;

        $request = Request::createFromGlobals();
        $db = new db();
        $conn = $db->getConnection();
        $data = json_decode($request->getContent());

/**
 * delete all from project_secteur
 */
        $st = $conn->prepare('delete from project_secteur where id_project = (:t)');
        $st->bindParam(':t', $data->id_project);
        $st->execute();
/**
 *
 */


        $stmt = $conn->prepare('update project set nom_project = (:nom) where id_project = (:id)');
        $stmt->bindParam(':id',$data->id_project);
        $stmt->bindParam(':nom',$data->nom_project);
        $stmt->execute();

/**
 * update
 */
        $stt = $conn->prepare('insert into project_secteur(id_project,id_secteur) values(:noms,:ide)');
        $var = array();
        $var = $data->id_secteur;
        $stt->bindParam(':noms',$data->id_project);
        foreach($var as $key){
            $stt->bindParam(':ide',$key);
            $stt->execute();
        }
