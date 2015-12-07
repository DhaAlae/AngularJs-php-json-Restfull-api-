<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/13/2015
 * Time: 4:47 PM
 */

require '../vendor/autoload.php';
require 'Config.php';


use Symfony\Component\HttpFoundation\Request;

                $request = Request::createFromGlobals();
                $db = new db();
                $conn = $db->getConnection();
                $data = json_decode($request->getContent());
        /**
         * delete des sous secteurs
         */
                $st = $conn->prepare('delete from sous_secteur where id_secteur = (:id)');
                $st->bindParam(':id',$data->id_secteur);
                $st->execute();
        /**
         * delete du secteur
         */
                $stmt = $conn->prepare('delete from secteur where id_secteur = (:id)');
                $stmt->bindParam(':id',$data->id_secteur);
                $stmt->execute();
