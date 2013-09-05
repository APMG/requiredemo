<?php

class IntegrationTest extends PHPUnit_Framework_TestCase
{
    public function testSlimLoaded()
    {
        $this->assertTrue(class_exists('\Slim\Slim'), "Slim Framework should exist.");
    }

}
