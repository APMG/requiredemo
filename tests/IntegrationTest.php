<?php

use Goutte\Client;

class IntegrationTest extends PHPUnit_Framework_TestCase

{

    public function testSlimLoaded()
    {
        $this->assertTrue(class_exists('\Slim\Slim'), "Slim Framework should exist.");
    }

    public function testIndex()
    {
    	$client = new Client();
	    $crawler = $client->request('GET', 'http://require.dev/');
		$this->assertEquals('Require js demo project', $crawler->filter('title')->text());
    }

}
