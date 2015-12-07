<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/13/2015
 * Time: 12:09 AM
 */
require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;

    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());

/**
 * delete from project_secteur
 */
    $st = $conn->prepare('delete from project_secteur where id_project = (:proj)');
    $st->bindParam(':proj',$data->id_project);
    $st->execute();

/**
 * delete du project
 */
    $stmt = $conn->prepare('delete from project where id_project = (:id)');
    $stmt->bindParam(':id',$data->id_project);
    $stmt->execute();


