<?php

/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 2:27 PM
 */
class user
{
    public $id;
    public $pass;

    public function __construct($id,$pass)
    {
        $this->id = $id;
        $this->pass = $pass;
    }
}