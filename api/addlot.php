<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 2:39 PM
 */

require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;
    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());
    $stmt = $conn->prepare('insert into lot(superficie,id_project,nom_lot,vendu) values(:superficie,:project,:nom,:vendu)');
    $stmt->bindParam(':nom', $data->nom_lot);
    $stmt->bindParam(':superficie', $data->superficie);
    $stmt->bindParam(':project', $data->id_project);
    $stmt->bindParam(':vendu', $data->vendu);
    $stmt->execute();

