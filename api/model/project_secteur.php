<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/12/2015
 * Time: 4:30 PM
 */
class project_secteur
{

    public $id_project_secteur;
    public $id_project;
    public $id_secteur;

    function __construct($id,$secteur,$project)
    {
        $this->id_project_secteur = $id;
        $this->id_project = $project;
        $this->id_secteur = $secteur;
    }


}