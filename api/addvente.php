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
        $stmt = $conn->prepare('insert into vente_achat(montant,data_aquisition,delai_valorisation,prix_unitaire,zone_franche,
                  inverstissement,nom_commercial,nombre_enmploye,id_lot,id_client,date_contract)
               values(:mon,:acqui,:valori,:prix,:fran,
               :inve,:nom,:nombre,:lot,:client,:contract)');
        $stmt->bindParam(':mon', $data->montant);
        $ex = explode(' ',$data->data_acquisition);
        $st = "$ex[0]";
        $d = date("Y-m-d", strtotime($st));
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



       if($stmt->execute()){
               echo "executed";
       }else {
               echo $stmt->errorCode();
               echo $stmt->errorInfo();
       }




    