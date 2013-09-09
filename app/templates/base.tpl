<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>{block name=title} | {$site_title}{/block}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width" />


    {if $environment == 'production'}
        <link rel="stylesheet" href="/css/main.min.{$site_version}.css" />   
        <!--[if lt IE 9]>  <link rel="stylesheet" href="/css/ie8_compat.min{$site_version}.css" />   <![endif]-->

        <script src="/js/modernizr.min.{$site_version}.js"></script>
        <script src="/js/all.min.{$site_version}.js"></script> 

    {else}
       
        <link rel="stylesheet" href="/css/main.css" />   
        <!--[if lt IE 9]>  <link rel="stylesheet" href="/css/ie8_compat.css" />   <![endif]-->

        <script src="/vendor/modernizr/modernizr.js"></script>
        <script data-main='/js/init' src="/vendor/requirejs/require.js"></script> 

        <!-- only used with local development -->
        <script src="http://localhost:35729/livereload.js"></script>
    
    {/if}

    </head>
    <body>

        <nav id="mprnews-nav">
            <a href="/" data-pjax>Home</a>  
            <a href="/page/1/" data-pjax>Page 1</a> 
            <a href="/page/2/" data-pjax>Page 2</a>  
            <a href="/page/33/" data-pjax>Page 33</a>  
           
        </nav>


        <div id="wrapper">
            <section id='mprnews-content'>

                <article id='pjax-container'>
            	{block name='pjax-container'}{/block}
            	</article>

            </section>
            <aside id="sidebar">
                <nav id="mprnews-audio">
                    <a href="#" target='_blank'>Member Supported · Join Now &rsaquo;</a>
                    <br />

                    <a href="http://minnesota.publicradio.org/radio/services/nis/listen/live/" 
                        id="mediaPlayer">Fake media player</a>
                </nav>
                <ul class="side-nav">

                    <li class="advertisement adaptTarget adaptWide" 
                        data-adapt="mpr-ad-1" id="mpr-ad-wrapper-1">
                        <div class="adaptSource">
                            <h5>Sponsor</h5>
                            <div class="ad multi" id="mpr-ad-1">
                                <img src='http://placekitten.com/300/250' />
                            </div>
                    </div>
                    </li>

                </ul>
            </aside>
            <nav id='paginators'>
                <a id='prev'></a>
                <a id='next'></a>
            </nav>
        </div>


        <aside id='mprnews-footer'>
        </aside>

        <footer id="mpr-footer">
        </footer>

    </body>
</html>