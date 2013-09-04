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
            'environment' => $app->getMode(),
            'site_version' => get_current_site_version(),
        )
    );
}



/**
 * Determines latest rev of project based on svn version currently at root of project
 * looks at app/config/version which should be set with svn deploy script (see Makefile at root of project)
 * if unable to determine latest rev or mixed, returns 0
 *
 * @return numeric string (int or zero)
 */
function get_current_site_version() {

    $filename = APP_ROOT.'/app/config/version';

    if (file_exists($filename)) {
        $revision = intval(trim(file_get_contents($filename)));
        return $revision;
    } else {
        return 0;
    }
}