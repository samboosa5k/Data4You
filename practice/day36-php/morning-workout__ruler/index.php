<?php

$size = $_GET['size'];
$smallestInterval = $_GET['int'];

function ruler($size, $smallestInterval)
{
    for ($i = 0; $i <= $size / 10; $i++) {
        echo '<div style="margin: 0 10px" class="cm"><span>' . $i . '</span></div>';
        for ($x = 0; $x < (10 / $smallestInterval) - 1; $x++) {
            if ($i < ($size / 10)) {
                if ($x === 4 || $smallestInterval === 1) {
                    echo '<div style="margin: 0 10px" class="mm longer">X</div>';
                } else {
                    echo '<div style="margin: 0 10px" class="mm"></div>';
                }
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Morning Workout - Ruler</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class='ruler'>
        <?php

        /*  for ($i = 0; $i <= $size / 10; $i++) {
            echo '<div style="margin: 0 10px" class="cm"><span>' . $i . '</span></div>';
            for ($x = 0; $x < (10 - 1 / $smallestInterval); $x++) {
                if ($i < ($size / 10)) {
                    if ($x === 4) {
                        echo '<div style="margin: 0 10px" class="mm longer"></div>';
                    } else {
                        echo '<div style="margin: 0 10px" class="mm"></div>';
                    }
                }
            }
        } */

        ruler($size, $smallestInterval);

        ?>
    </div>

</body>

</html>