<?php

    $connect = mysqli_connect('localhost', 'root', '', 'zan');

    if (!$connect) {
        die('Error connect to DataBase');
    }