{extends file="base{$pjax}.tpl"}

{block name=title}{$site_title}{/block}

{block name='pjax-container'}
    <h1>This is the home page</h1>     
    <a href="/page/1/" data-pjax>Page 1</a> 
    <a href="/page/2/" data-pjax>Page 2</a>  
    <a href="/page/33/" data-pjax>Page 33</a>

{/block}  
