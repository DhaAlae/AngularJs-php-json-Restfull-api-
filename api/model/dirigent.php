<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 3:22 PM
 */
class dirigent
{
    public $id_dirigent;
    public $nom;
    public $prenom;
    public $qualite;
    public $fonction;
    public $tel;
    public $fax;
    public $email;
    public $id_client;


    public function __construct($id,$nom,$pre,$qua,$fon,$tel,$fax,$email,$client)
    {
        $this->id_dirigent = $id;
        $this->nom = $nom;
        $this->prenom = $pre;
        $this->qualite = $qua;
        $this->fonction = $fon;
        $this->tel = $tel;
        $this->fax = $fax;
        $this->email = $email;
        $this->id_client = $client;
    }


}