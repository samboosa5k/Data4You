<?php
if (isset($_GET)) {
    var_dump($_GET);
};
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form Post</title>
</head>

<body>


    <form action="get_post.php?page=submit&amp;user=1" method="post">

        <input type="text" name="name" placeholder="name">
        <br>
        <input type="text" name="age" placeholder="age">
        <br>
        <label for="">
            <input type="checkbox" name="married" value="1">
            married
        </label>
        <br>
        <input type="submit" value="send">

    </form>


</body>

</html>