<?php

function headline($text, $level = 1)
{
    return "<h{$level}>$text</h{$level}>";
}

var_dump(headline("It's ya boooyy", 2));

var_dump([1, 2, 3, 4, 5]);
