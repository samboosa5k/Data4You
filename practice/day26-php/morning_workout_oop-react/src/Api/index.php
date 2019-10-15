<?php
//  Includes
include_once('data.php');
include_once('classes/Celebrity.class.php');

$celebrities = [];

$i = 0;
foreach ($data as $id => $value) {
    $new_celeb = new Celebrity();
    $new_celeb->fromArray($data[$i]);
    /* $celebrities[] = $new_celeb; */
    $celebrities[$i] = [
        'name' => $new_celeb->getName(),
        'photo' => $new_celeb->getPhoto(),
        'earnings' => $new_celeb->getEarnings(),
        'age' => $new_celeb->getAge(),
        'citizenship' => $new_celeb->getCitizenship(),
        'events' => $new_celeb->getEvents(),
    ];

    $i++;
}


header('Content-Type: application/json');
echo json_encode($celebrities);
