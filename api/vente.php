<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 5:13 PM
 */

require '../vendor/autoload.php';
require 'Config.php';
require 'model\vente.php';

    header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $ventes = array();

    $data = $conn->query('select * from vente_achat');

    foreach ($data as $key) {
        array_push($ventes, new vente($key['id_vente_achat'],$key['montant'],$key['data_aquisition'],$key['delai_valorisation'],$key['zone_franche'],$key['prix_unitaire'],$key['inverstissement'],$key['nom_commercial'],$key['nombre_enmploye'],$key['id_lot'],$key['id_client'],$key['date_contract'],$key['valoriser'])
        );
    }

echo json_encode($ventes);