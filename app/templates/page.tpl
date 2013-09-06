{extends file="base{$pjax}.tpl"}

{block name=title prepend} Page {$id} {/block}

{block name='pjax-container'}
	
    <h1>This is page {$id}</h1>

    <p>This is <a href="/page/{$nextPageNum}/">a link to random page {$nextPageNum}</a>.</p>

    <p>This is <a href="http://google.com/">a link to some external page</a>.</p>

{/block}
