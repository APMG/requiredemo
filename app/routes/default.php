<?php


$app->get('/', function () {
    echo 'this is the home page';
});


$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});
