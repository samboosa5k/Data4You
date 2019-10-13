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

//  HONZA SORTING
$movies = [];

foreach ($movie_names as $id => $name) {
    $rating = $movie_ratings[$id];

    $movie_info =
        [
            'name' => $name,
            'rating' => $rating
        ];

    $movies = $movie_info;
}

usort($movies, function ($a, $b) {
    if ($a['rating'] > $b['rating']) {
        return -1;
    } elseif ($a['rating'] < $b['rating']) {
        return 1;
    } else {
        return 0;
    }
});

/* print_r($final); */

echo json_encode($movies);
