<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/20/2015
 * Time: 2:05 PM
 */
class dashbord
{
    public $id_vente_achat;
    public $nom_lot;
    public $raison_social;
    public $date_contract;
    public $delai_valorisation;
    public $valoriser;
    public $id_lot;
    public $id_project;

    public function __construct($id, $lot, $raison, $date, $delai, $valoriser, $idlot, $idproject)
    {
        $this->id_vente_achat = $id;
        $this->nom_lot = $lot;
        $this->raison_social = $raison;
        $this->date_contract = $date;
        $this->delai_valorisation = $delai;
        $this->valoriser = $valoriser;
        $this->id_lot = $idlot;
        $this->id_project = $idproject;
    }

}