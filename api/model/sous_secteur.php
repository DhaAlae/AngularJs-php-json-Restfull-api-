<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/12/2015
 * Time: 4:33 PM
 */
class sous_secteur
{

    public $id_sous_secteur;
    public $nom_sous_secteur;
    public $id_secteur;

    function __construct($id,$nom,$secteur)
    {
        $this->id_sous_secteur = $id;
        $this->nom_sous_secteur = $nom;
        $this->id_secteur = $secteur;
    }



}