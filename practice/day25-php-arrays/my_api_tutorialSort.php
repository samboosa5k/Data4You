<?php

header('Content-type: application/json');


$movie_names = [
    '0' => 'Dredd 3D 2012',
    '1' => 'Rambo 4',
    '2' => 'New World',
    '3' => 'No Mercy',
    '4' => 'Bladerunner 2049',
    '5' => 'Star Trek 2009',
    '6' => 'Star Trek 2013',
    '7' => 'Star Trek 2016',
];

$movie_ratings = [
    '0' => 10,
    '1' => 8,
    '2' => 10,
    '3' => 9,
    '4' => 9,
    '5' => 8,
    '6' => 8,
    '7' => 8,
];

$final = [];

/* 
*   KSORT on both first
*   ---> This way keys of both arrays will match before combining into 1 array
*
*
*/


//  SORTING TUTORIAL
$index = 0;
foreach ($movie_ratings as $key => $value) {
    $final[$index] = ["name" => $movie_names[$key], "rating" => $movie_ratings[$key]];
    $index++;
}

$columns = array_column($final, "rating");

array_multisort($columns, SORT_DESC, $final);

/* print_r($final); */

echo json_encode($final);
