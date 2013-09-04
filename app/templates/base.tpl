<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>{block name=title} | {$site_title}{/block}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">


    {if $environment == 'production'}
        <link rel="stylesheet" href="/css/normalize.{$site_version}.css">
        <link rel="stylesheet" href="/css/main.{$site_version}.css">   

        <script src="/js/modernizr.min.{$site_version}.js"></script>
        <script src="/js/all.libs.min.{$site_version}.js"></script> 

    {else}

        <link rel="stylesheet" href="/vendor/normalize-css/normalize.css">
        <link rel="stylesheet" href="/css/main.css">   

        <script src="/vendor/modernizr/modernizr.js"></script>
        <script data-main='js/init' src="/vendor/requirejs/require.js"></script> 
    {/if}

    </head>
    <body>
            <a href="/">Home</a>  
            <a href="/page/1/">Page 1</a> 
            <a href="/page/2/">Page 2</a>  
            <a href="/page/33/">Page 33</a>  
            <a href="javascript:void(0)" id="mediaPlayer">Fake media player</a>

        <div id='pjax-container'>
    	{block name='pjax-container'}{/block}
    	</div>


    </body>
</html>