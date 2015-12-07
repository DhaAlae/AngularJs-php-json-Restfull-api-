<?php

/**
 * User: Dahmani Alae
 */
class lot
{

    public $id_lot;
    public $superficie;
    public $vendu;
    public $nom_lot;
    public $id_project;

    function __construct($id,$seper,$project,$nom,$vendu)
    {
        $this->id_lot = $id;
        $this->id_project = $project;
        $this->superficie = $seper;
        $this->vendu = $vendu;
        $this->nom_lot = $nom;
    }


}