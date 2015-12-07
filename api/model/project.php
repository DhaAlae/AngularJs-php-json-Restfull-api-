<?php

/**
 * User: Dahmani Alae
 */

class project
{
    public $id_project;
    public $nom_project;

    function __construct($id, $nom)
    {
        $this->id_project = $id;
        $this->nom_project = $nom;
    }


}