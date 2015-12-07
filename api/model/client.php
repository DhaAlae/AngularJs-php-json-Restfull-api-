<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 3:22 PM
 */
class client
{
    public $id_client;
    public $raison_social;
    public $email;
    public $tel;
    public $chiffre_affaire;
    public $fax;
    public $pays_origin;
    public $ville;
    public $logo;
    public $site_web;
    public $adresse_postal;
    public $nombre_employe;
    public $rc_appartenance;

    public function __construct($id,$raison,$email,$tel,$chifre,$fax,$pays,$ville,$logo,$site,$adress,$nombre,$rc)
    {
        $this->id_client = $id;
        $this->raison_social = $raison;
        $this->email = $email;
        $this->tel = $tel;
        $this->chiffre_affaire = $chifre;
        $this->fax = $fax;
        $this->pays_origin = $pays;
        $this->ville = $ville;
        $this->logo = $logo;
        $this->site_web = $site;
        $this->adresse_postal = $adress;
        $this->nombre_employe = $nombre;
        $this->rc_appartenance = $rc;
    }


}