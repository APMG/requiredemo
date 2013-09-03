<?php


$app->get('/', function () use ($app) {


    $app->render('default.tpl', array('yeah'=>'yeah'));


});



$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});
