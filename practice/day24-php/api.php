<?php

header('Content-type: application/json');


$movies = [
    'Dredd 3D 2012',
    'Rambo 4',
    'New World',
    'Bladerunner 2049',
    '...'
];

echo json_encode($movies);
