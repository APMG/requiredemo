<?php
// Set Application Root to this directory's parent
define('APP_ROOT', realpath( dirname(dirname( __FILE__ ) ).'/'));

require APP_ROOT . '/vendor/autoload.php';

// Set application mode based on environment setting in .htaccess
// http://docs.slimframework.com/pages/configure-modes/
if (getenv('SLIM_MODE') !== 'production') {
    require APP_ROOT . '/app/config/config.'.getenv('SLIM_MODE').'.php';
    error_reporting(E_ALL & ~E_NOTICE);
} else {
    require APP_ROOT . '/app/config/config.production.php';
    error_reporting(0);
}

$app = new \Slim\Slim(array(
	'view' => new \MPRPjaxSmarty\Smarty(),
));

// Use MPR custom request object to add Pjax detection
$app->container->singleton('request', function () {
	$env = \Slim\Environment::getInstance();
    return new \MPRPjaxRequest\Request($env);
});

require APP_ROOT . '/app/lib/helpers.php';

// Load Application Configuration
$app->config($config);

// Populate addtional variables for use in our smarty templates. See lib/helpers.php.
$app->hook('slim.before', 'set_application_variables');


// Set up smarty paths (this does not use MPR Smarty, yet)
$view = $app->view();
$view->parserDirectory = dirname(__FILE__) . 'smarty';
$view->parserCompileDirectory = '/tmp/requiredemo/smarty-compile';
$view->parserCacheDirectory = '/tmp/requiredemo/smarty-cache';
$app->smartyTemplatesDirectory = dirname(__FILE__) . '/app/templates';

// Load routes here
// this should get replaced with some autoloader class thing at some point
require APP_ROOT . '/app/routes/default.php';

$app->run();

?>

