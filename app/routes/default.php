<?php


$app->get('/page/:id/', function ($id) use ($app) {
	$randomPageNum = rand(3,100);
	$data = array( 
		'isPjax'=> $app->request->isPjax(), // this should be moved into a custom view subclass at some point
		'test' => 'test',
		'id' => $id,
		'randomPageNum' => $randomPageNum,
		'nextPageNum' => $randomPageNum + 1,
		'prevPageNum' => $randomPageNum - 1
	);	

    $app->render('page.tpl', $data);
});





$app->get('/', function () use ($app) {
	$data = array( 
		'isPjax'=> $app->request->isPjax(), // this should be moved into a custom view subclass at some point
	);	

    $app->render('index.tpl', $data);
});



