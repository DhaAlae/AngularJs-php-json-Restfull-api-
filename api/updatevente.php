<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 5:25 PM
 */
require '../vendor/autoload.php';
require 'Config.php';

use Symfony\Component\HttpFoundation\Request;
    $request = Request::createFromGlobals();
    $db = new db();
    $conn = $db->getConnection();
    $data = json_decode($request->getContent());
    $stmt = $conn->prepare('update vente_achat set montant = (:mon),data_aquisition = (:acqui),delai_valorisation = (:valori),prix_unitaire = (:prix),zone_franche = (:fran)
                                     ,inverstissement = (:inve),nom_commercial = (:nom),nombre_enmploye = (:nombre),id_lot = (:lot),id_client = (:client),date_contract = (:contract),valoriser = (:valoriser) where id_vente_achat     = (:id)');
        $stmt->bindParam(':mon', $data->montant);
        $ex = explode(' ', $data->data_acquisition);
        print_r($data->data_acquisition);
        $st = "$ex[0]";
        $d = date("Y-m-d", strtotime($st));
        print_r($d);
        $stmt->bindParam(':acqui', $d);
        $stmt->bindParam(':valori', $data->delai_valorisation);
        $stmt->bindParam(':prix', $data->prix_unitaire);
        $stmt->bindParam(':fran', $data->zone_franche);
        $stmt->bindParam(':inve', $data->inverstissement);
        $stmt->bindParam(':nom', $data->nom_commercial);
        $stmt->bindParam(':nombre', $data->nombre_enmploye);
        $stmt->bindParam(':lot', $data->id_lot);
        $stmt->bindParam(':client', $data->id_client);
        $exp = explode(' ',$data->date_contract);
        $string = "$exp[0]";
        $date = date("Y-m-d",strtotime($string));
        $stmt->bindParam(':contract', $date);
        $stmt->bindParam(':valoriser', $data->valoriser);
        $stmt->bindParam(':id', $data->id_vente_achat);
    $stmt->execute();