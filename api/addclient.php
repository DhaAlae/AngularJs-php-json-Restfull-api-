<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 4:21 PM
 */

require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;
    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());
    $stmt = $conn->prepare('insert into client(raison_social,email,tel,chiffre_affaire,fax,pays_origin,ville,logo,site_web,adress_postal,nombre_employe,rc_appartenance) values(:raison,:email,:tel,:chifre,:fax,:pay,:ville,:logo,:site,:adress,:nombre,:rc)');
    $stmt->bindParam(':raison', $data->raison_social);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':tel', $data->tel);
    $stmt->bindParam(':chifre', $data->chiffre_affaire);
    $stmt->bindParam(':fax', $data->fax);
    $stmt->bindParam(':pay', $data->pays_origin);
    $stmt->bindParam(':ville', $data->ville);
    $stmt->bindParam(':logo', $data->logo);
    $stmt->bindParam(':site', $data->site_web);
    $stmt->bindParam(':adress', $data->adress_postal);
    $stmt->bindParam(':nombre', $data->nombre_employe);
    $stmt->bindParam(':rc', $data->rc_appartenance);
    $stmt->execute();