This is at test project to introduce myself to require.js, grunt, bower, composer, and other deploy / architecture tricks. We are planning to use these tools to facilitate the MPRNews redesign. 


Setup
=====

Pre-requisites
--------------
* Local apache server with php 5.3 or higher, php 5.4.x preferred
* [node / npm](http://nodejs.org/download/)
* [composer](http://getcomposer.org/download/)
  
        curl -sS https://getcomposer.org/installer | php

* [grunt](http://gruntjs.com/getting-started) (may require sudo)

        npm install -g grunt-cli
        
* [bower](http://bower.io/) (may require sudo)

        npm install -g bower


Installation
------------
First, clone the project to someplace on your computer that you can serve to a browser using Apache/MAMP.
        
        cd ~/Sites/
        git clone git@github.com:APMG/requiredemo.git

Install required grunt, bower, and composer packages:
      
       npm install
       bower install
       composer install
       
Run grunt at least once to compile less and js files:
     
      grunt
      
Depending on your local environment, you'll need to change apache to point at the public_html/ folder in this package. Apache should read index.php as the directory index file. 

### Project Dependencies

As dependencies change throughout the project, you'll need to stay up to date. To simultaneously update dependencies for Composer, Node, and Bower, run:

      grunt update

This is equivalient to:

      composer update
      bower update
      npm update

Development
-----------
You can and should use grunt to watch files during development. Grunt will recompile js and scss/css changes as you make them. This also uses livereload to reload the page in the browser as changes are made.  To put grunt into watch mode, run: 
      
       grunt watch
       
**NOTE: Presently, grunt does not reload on changes to php/tpl files**       


Production mode
---------------
If you want to simulate 'production' mode on your local environment, where scripts and css are minified and concatenated, first you'll need to compile all the scripts and css files:
     
      grunt deploy

Then change the `SLIM_MODE` in public/.htaccess:

    SetEnv SLIM_MODE production 

Be careful not to commit this change to version control unless intended.

Testing
-------

Run `grunt test` to run tests with [PHPUnit](http://phpunit.de/manual/). Currently all tests live in the `/tests/` folder.
