<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 4:30 PM
 */

require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;
    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());
    $stmt = $conn->prepare('update client set raison_social = (:raison),email = (:email),tel = (:tel),chiffre_affaire = (:chifre),fax = (:fax),pays_origin = (:pay),ville = (:ville),logo = (:logo),site_web = (:site),adress_postal = (:adress),nombre_employe = (:nombre),rc_appartenance = (:rc) where id_client = (:id)');
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
    $stmt->bindParam(':id',$data->id_client);
    $stmt->execute();