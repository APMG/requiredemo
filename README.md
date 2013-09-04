This is a very simple test to introduce myself to require.js (http://requirejs.org/) and figure out how to use it with scrolling events, pjax, and the APMPlayer.

Setup
=====

Pre-requisites
--------------
* [node / npm](http://nodejs.org/download/)
* [composer](http://getcomposer.org/download/)
  
        curl -sS https://getcomposer.org/installer | php

* [grunt](http://gruntjs.com/getting-started)

        npm install -g grunt-cli
        
* [bower](http://bower.io/)

        npm install -g bower

* [sass](http://sass-lang.com/download.html) (requires ruby)
 
        gem install sass 



Installation
------------
First, clone the project to someplace on your computer that you can serve to a browser using Apache/MAMP.
        
        cd ~/Sites/
        git clone https://github.com/APMG/requiredemo.git

Install required grunt, bower, and composer packages:
      
       npm install
       bower install
       composer install
       
Run grunt at least once to compile scss and js files:
     
      grunt
      
Depending on your local environment, you'll need to change apache to point at the public_html/ folder in this package. Apache should read index.php as the directory index file. 


Development
-----------
You can and should use grunt to watch files during development. Grunt will recompile js and scss/css changes as you make them. To put grunt into watch mode, run:
      
       grunt watch
       
