<?php

function browse_directory($directory)
{
    $files = scandir($directory);
    foreach ($files as $file) {
        if ($file == '.' || $file == '..') continue;
        if (is_dir($directory . '/' . $file)) {
            browse_directory($directory . '/' . $file);
        } else {
            echo $file;
        }
    }
}

browse_directory('..');
