<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 2:47 PM
 */

require '../vendor/autoload.php';
require 'Config.php';


use Symfony\Component\HttpFoundation\Request;

    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());

    $stmt = $conn->prepare('delete from lot where id_lot = (:id)');
    $stmt->bindParam(':id',$data->id_lot);
    $stmt->execute();