<?php
/**
 * User: Dahmani Alae
 * Date: 11/12/2015
 * database configuration
 */


class db {

      public function getConnection(){
        $user = 'root';
        $pass = '';
        try {
        $dbh = new PDO('mysql:host=localhost;dbname=medz', $user, $pass);
           return $dbh;
        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }

      }
}



