<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 5:00 PM
 */

require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;
    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());
    $stmt = $conn->prepare('insert into dirigent(nom,prenom,qualite,fonction,tel,fax,email,id_client) values(:raison,:email,:tel,:chifre,:fax,:pay,:ville,:logo)');
    $stmt->bindParam(':raison', $data->nom);
    $stmt->bindParam(':email', $data->prenom);
    $stmt->bindParam(':tel', $data->qualite);
    $stmt->bindParam(':chifre', $data->fonction);
    $stmt->bindParam(':fax', $data->tel);
    $stmt->bindParam(':pay', $data->fax);
    $stmt->bindParam(':ville', $data->email);
    $stmt->bindParam(':logo', $data->id_client);
    $stmt->execute();