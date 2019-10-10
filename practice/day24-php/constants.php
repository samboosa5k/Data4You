<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Constant Practice</title>
</head>

<body>

    <?php

    define("MYVAR", 123);

    function callMyVar()
    {

        echo "This value is a constant: " . MYVAR;
    }

    callMyVar();

    ?>

    <hr>

    <?php

    $outside = "I am outside";

    function callMyVarAgain()
    {
        global $outside;

        echo $outside;
    }

    callMyVarAgain();

    ?>

</body>

</html>