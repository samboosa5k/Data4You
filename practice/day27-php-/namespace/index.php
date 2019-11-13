<?php

include './folder1/file1.php';
include './folder2/file2.php';

use folder1 as namespace1;
use folder2 as namespace2;

echo namespace1\OutputClass::output();
echo namespace2\OutputClass::output();
