<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forms</title>
</head>

<body>
    <form action="index.php" method="post">
        Message: <input type="text" value="" name="message">
        <input type="submit" value="Send">
    </form>

    <?php

    if (isset($_POST["message"])) {
        $message = $_POST["message"];
        echo $message;
    }
    ?>

</body>

</html>