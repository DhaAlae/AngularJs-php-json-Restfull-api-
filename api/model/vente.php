<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 3:22 PM
 */
class vente
{
    public $id_vente_achat;
    public $montant;
    public $data_acquisition ;
    public $delai_valorisation;
    public $prix_unitaire;
    public $zone_franche;
    public $inverstissement;
    public $nom_commercial;
    public $nombre_enmpoloye;
    public $id_lot;
    public $id_client;
    public $date_contract;
    public $valoriser;


    public function __construct($id_vente_achat, $montant, $data_acquisition,$delai_valorisation, $zone_franche, $prix_unitaire, $inverstissement, $nom_commercial, $nombre_enmpoloye, $id_lot, $id_client, $date_contract, $valoriser)
    {
        $this->id_vente_achat = $id_vente_achat;
        $this->montant = $montant;
        $this->data_acquisition = $data_acquisition;
        $this->delai_valorisation = $delai_valorisation;
        $this->zone_franche = $zone_franche;
        $this->prix_unitaire = $prix_unitaire;
        $this->inverstissement = $inverstissement;
        $this->nom_commercial = $nom_commercial;
        $this->nombre_enmpoloye = $nombre_enmpoloye;
        $this->id_lot = $id_lot;
        $this->id_client = $id_client;
        $this->date_contract = $date_contract;
        $this->valoriser = $valoriser;
    }


}