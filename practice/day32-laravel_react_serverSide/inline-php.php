<?php
$dontbreakitlad = ['0' => 'kurwa', '1' => 'more kurwa', '2' => 'so much kurwa'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php
    for ($i = 0; $i < 30; $i++) {
        echo '<h3 style="margin-left:' . abs(intval(128 * ($i % 5))) . 'px;color: rgb(' . intval(255 * $i / 30) . ',' . intval(255 - (255 * $i / 30)) . ', ' . intval(255 * $i / 30) . ')">' . $dontbreakitlad[($i % 3)] . '</h3>';
    }
    ?>
</body>

</html>