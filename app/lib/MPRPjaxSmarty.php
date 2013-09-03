<?php

/* Extends the Slim Smarty view to make it aware of pjax requests
 * This is necessary to vary the template compliation
 * We change which template is extended based on incoming header requests, 
 * detected with $app->request->isPjax()
 */

namespace MPRPjaxSmarty;

class Smarty extends \Slim\Views\Smarty{

	public function render($template, $cache_id=null, $compile_id=null)
    {	

        $parser = $this->getInstance();
        $parser->assign($this->all());

        // Load the slim instance and determine if we're pjax or not
        // we vary the compile ID based on the slim index
   		$app = \Slim\Slim::getInstance();    
   		if ($app->request->isPjax() && $compile_id == null){
   			$compile_id = 'pjax';
   		} else {
   			$compile_id = 'nonpjax';
   		}

        return $parser->fetch($template, $cache_id, $compile_id );
    }


}
