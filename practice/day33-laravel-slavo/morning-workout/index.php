<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cheeseboard</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="board">
        <?php
        for ($y = 0; $y < 8; $y++) {
            ?>
            <div class="row">
                <?php
                    for ($i = 0; $i < 8; $i++) {
                        if (($y + $i) % 2 === 0) {
                            if (($y * 8) * ($i + 1) === 24) {
                                echo "<div id=" . ($y * 8) * ($i + 1) . " class='white'>Hello</div>";
                            } else {
                                echo "<div id=" . ($y * 8) * ($i + 1) . " class='white'></div>";
                            }
                        } else {
                            echo "<div id=" . ($y * 8) * ($i + 1) . " class='black'></div>";
                        }
                    }
                    ?>
            </div>
        <?php } ?>
    </div>
</body>

</html>