<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 2:47 PM
 */

require '../vendor/autoload.php';
require 'Config.php';
require 'model/secteur.php';

use Symfony\Component\HttpFoundation\Request;

    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());

    $stmt = $conn->prepare('update lot set nom_lot = (:nom), superficie = (:superficie), vendu= (:vendu) where id_lot = (:id)');
    $stmt->bindParam(':id',$data->id_lot);
    $stmt->bindParam(':nom',$data->nom_lot);
    $stmt->bindParam(':superficie', $data->superficie);
    $stmt->bindParam('vendu', $data->vendu);
    $stmt->execute();
