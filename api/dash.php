<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/20/2015
 * Time: 2:17 PM
 */
require '../vendor/autoload.php';
require 'Config.php';
require 'model\dashbord.php';

header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $dashs = array();

    $data = $conn->query("select v.id_vente_achat,l.nom_lot,c.raison_social,v.date_contract,
v.delai_valorisation,v.valoriser,l.id_lot,l.id_project,DATE_ADD( date_contract, INTERVAL delai_valorisation month ) as r from lot as l
join vente_achat as v on l.id_lot = v.id_lot join client as c on v.id_client = c.id_client order by r
");

    foreach ($data as $key) {
        $datefin = new DateTime($key['date_contract']);
        $interval = new DateInterval('P'.$key['delai_valorisation'].'M');
        $datefin->add($interval);
        $now = new DateTime();
        if($now <= $datefin){
            array_push($dashs, new dashbord($key['id_vente_achat'], $key['nom_lot'], $key['raison_social'], $key['date_contract'], $key['delai_valorisation'], $key['valoriser'], $key['id_lot'], $key['id_project'])
            );
        }
    }
echo json_encode($dashs);
