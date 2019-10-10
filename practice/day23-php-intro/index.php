<?php
require "includes/hello.inc.php";
require "includes/page.inc.php";

$page = new Page("form");
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CBP - First PHP practice</title>
</head>

<body>
    <?php

    $page->create();

    ?>
</body>

</html>