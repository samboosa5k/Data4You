<?php

class Page
{
    function __construct($pageType)
    {
        $this->pageType = $pageType;
    }

    public function createHeader()
    {
        $header = "<div>This is the header!</div>";
        echo $header;
    }

    public function createBody()
    {
        $body = "<h2>This is the " . $this->pageType . " body...</h2>";
        echo $body;
    }

    public function createFooter()
    {
        $footer = "<div>This is the footer</div>";
        echo $footer;
    }

    public function create()
    {
        $this->createHeader();
        $this->createBody();
        $this->createFooter();
    }
}
