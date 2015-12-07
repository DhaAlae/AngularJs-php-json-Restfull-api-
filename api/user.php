<?php
/**
 * Created by PhpStorm.
 * User: Dahmani Alae
 * Date: 11/16/2015
 * Time: 5:41 PM
 */

require '../vendor/autoload.php';
require 'Config.php';
require 'model\user.php';

    header('Content-type: application/json');
    $db = new db();
    $conn = $db->getConnection();
    $users = array();

    $data = $conn->query('select * from users');

    foreach ($data as $key) {
        array_push($users,new user($key['id'],$key['pass'])
        );
    }

echo json_encode($users);