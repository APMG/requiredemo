<?php

/**
 * Functional tests use SimpleHTMLDOM
 * @link( SimpleHTMLDOM Manual, http://simplehtmldom.sourceforge.net/manual.htm)
 */

use Sunra\PhpSimple\HtmlDomParser;

class IntegrationTest extends PHPUnit_Framework_TestCase

{

    public function testSlimExists()
    {
        $this->assertTrue(class_exists('\Slim\Slim'), "Slim Framework should exist.");
    }

    public function testIndex()
    {

        $html = HtmlDomParser::file_get_html( 'http://require.dev/' );
        $e = $html->find("body", 0);
        $this->assertContains("This is the home page", $e->plaintext);

        $title = $html->find('title');
        $this->assertContains("Require js demo project", $title[0]->plaintext);

    }

}
