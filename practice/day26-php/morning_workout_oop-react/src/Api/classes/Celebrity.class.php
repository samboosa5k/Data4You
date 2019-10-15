<?php

class Celebrity
{
    //  Private properties, if set to public then the class will instantiate with these values
    private $name = null;
    private $photo = null;
    private $earnings = null;
    private $age = null;
    private $citizenship = null;
    private $events = [];

    public function fromArray($array)
    {
        $this->name = $array['name'];
        $this->photo = $array['photo'];
        $this->earnings = $array['earnings'];
        $this->age = $array['age'];
        $this->citizenship = $array['citizenship'];
        $this->events = $array['events'];
    }

    public function getName()
    {
        return $this->name;
    }

    public function getPhoto()
    {
        return $this->photo;
    }

    public function getEarnings()
    {
        return $this->earnings;
    }

    public function getAge()
    {
        return $this->age;
    }

    public function getCitizenship()
    {
        return $this->citizenship;
    }

    public function getEvents()
    {
        return $this->events;
    }
}
