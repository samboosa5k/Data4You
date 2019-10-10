<?php

$car_prices = [
    'Subaru' => 'Priceless',
    'BMW' => '2',
    'Skyline' => '10000'
];

foreach ($car_prices as $key => $value){
    echo "Car brand: " . $key . "Price: " . $value;
}
