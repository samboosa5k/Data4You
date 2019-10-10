<?php

$number1 = 1;

$number2 = 2;

function sumTwo(&$a, &$b)
{
    return $a + $b;
}

echo sumTwo($number1, $number2);
