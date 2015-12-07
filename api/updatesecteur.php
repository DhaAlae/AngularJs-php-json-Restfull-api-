<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/13/2015
 * Time: 4:35 PM
 */
require '../vendor/autoload.php';
require 'Config.php';
require 'model/secteur.php';

use Symfony\Component\HttpFoundation\Request;

        $request = Request::createFromGlobals();
        $db = new db();
        $conn = $db->getConnection();
        $data = json_decode($request->getContent());
/**
 * delete des sous secteur
 */
        $st = $conn->prepare('delete from sous_secteur where id_secteur= (:idd)');
        $st->bindParam(':idd',$data->id_secteur);
        $st->execute();

/**
 * modification du nom du secteur
 */
        $stmt = $conn->prepare('update secteur set nom_secteur = (:nom) where id_secteur = (:id)');
        $stmt->bindParam(':id',$data->id_secteur);
        $stmt->bindParam(':nom',$data->nom_secteur);
        $stmt->execute();

/**
 * ajout des sous_secteur
 */

        $stt = $conn->prepare('insert into sous_secteur(nom_sous_secteur,id_secteur) values(:noms,:ids)');
        $var = array();
        $var = $data->list_sous_secteur;
        $stt->bindParam(':ids',$data->id_secteur);
        foreach($var as $key){
            $stt->bindParam(':noms',$key);
            $stt->execute();
            }
