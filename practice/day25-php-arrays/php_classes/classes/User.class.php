<?php

class User
{
    private $id;
    private $name;
    private $password;
    private $createdat;
    private $privileges;

    function __construct($id, $name, $password, $privileges)
    {
        $this->id = $id;
        $this->name = $name;
        $this->password = $password;
        $this->createdat = date('Y-m-d H:i:s');
        $this->privileges = $privileges;
    }

    public function setPriv($priv)
    {
        $this->privileges = $priv;
    }

    public function getValues()
    {
        echo $this->privileges;
    }

    public function __destruct()
    {
        var_dump('This is automatically called once the last variable pointing to function is unset');
    }
}

$x = new User(1, 'Jsdp', 'passwprd', 'Admin');

var_dump($x);
$x->getValues();
$x->setPriv('Best');
$x->getValues();
unset($x);
