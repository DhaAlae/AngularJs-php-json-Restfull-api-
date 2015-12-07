<?php

/**
 * User: Dahmani Alae
 */
class secteur
{
    public $id_secteur;
    public $nom_secteur;

    function __construct($id,$nom)
    {
        $this->id_secteur = $id;
        $this->nom_secteur = $nom;
    }
}