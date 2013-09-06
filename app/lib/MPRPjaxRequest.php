<?php

/* Adds isPjax() method to Request 
 * use it like this:
 * $app->request->isPjax()
 */

namespace MPRPjaxRequest;

class Request extends \Slim\HTTP\Request {

    /**
     * Is this a PJAX request?
     * Based on isAjax in \Slim\Http\Request
     * @return bool
     */
    
    public function isPjax()
    {

        $app = \Slim\Slim::getInstance();  

        if ($this->params('ispjax')) {
            return true;
        } elseif ($app->request->get('_pjax')) {
            return true;
        } elseif (isset($this->headers['X_REQUESTED_WITH']) && isset($this->headers['X-PJAX'])) {
            return true;
        } else {
            return false;
        }
    }

}