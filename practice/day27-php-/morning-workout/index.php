<?php

spl_autoload_register(function ($class_name) {
    include './classes/' . $class_name . '.class.php';
});


$connection = new Database();

$orderby = null;
$way = null;

if (isset($_GET['orderby'])) {
    $orderby = $_GET['orderby'];
    $way = $_GET['way'];
}


header('Content-Type: application/json');
$arr = ($connection->read('games', $orderby, $way));

echo json_encode($arr);

/* var_dump($connection->read('games', 'name', $orderby, $way)); */
