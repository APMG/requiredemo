<?
/**
 * Populate Application Wide Variables
 * These variables can be accessed in Smarty templates without repeatedly assigning them in PHP
 */
function set_application_variables() {

	$app = \Slim\Slim::getInstance();    
    
    $app->view()->appendData(
        array(
        	// Appropriate page templates should have a foo.tpl and foo_pjax.tpl files
            'pjax' => ($app->request->isPjax()) ? "_pjax" : "" ,
            'site_title' => $app->config('site.title'),
        )
    );
}
