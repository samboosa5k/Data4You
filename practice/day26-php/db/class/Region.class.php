<?php

class Region
{
    public   $id = null;
    public   $name = null;
    public   $slug = null;

    public function __construct($name, $slug)
    {
        $this->name = $name;
        $this->slug = $slug;
    }

    //  Setters
    public function setName($param)
    {
        $this->name = $param;
    }

    public function setSlug($param)
    {
        $this->slug = $param;
    }
    //  END


    public function insert()
    {
        $query = "INSERT INTO `region` (`name`, `slug`) VALUES (?,?)";

        insert($query, [$this->name, $this->slug]);

        $this->id = last_insert_id();
    }

    public function update()
    {
        if (!$this->id) {
            return false;
        }

        $query = "UPDATE `region` SET `name`=?, `slug`=? WHERE `id`=?";

        update($query, [$this->name, $this->slug, $this->id]);
    }

    public function __destruct()
    {
        echo "A (new) region(Id: {$this->id}) has been inserted/modified!";
    }
}
