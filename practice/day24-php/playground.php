<?php

class Person
{
    private $first_name;
    private $last_name;
    private $birth_year;
    private $height;

    function __construct($first_name, $last_name, $birth_year, $height)
    {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->birth_year = $birth_year;
        $this->height = $height;
    }

    //  Methods

    function get_info()
    {
        return "First name: " . $this->first_name . "<br>"
            . "Last name: " . $this->last_name . "<br>"
            . "Birth year: " . $this->birth_year . "<br>"
            . "Height: " . $this->height;
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Get Person - OOP</title>
</head>

<body>
    <?php
    $new_person = new Person("Jasper", "Verbon", "1989", "175cm");
    echo $new_person->get_info();
    ?>
</body>

</html>