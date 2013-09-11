{extends file="base{$pjax}.tpl"}

{block name=title prepend} Page {$id} {/block}

{block name='pjax-container'}

	<article>	
    <h1>This is page {$id}</h1>

    <p>This is <a href="/page/{$randomPageNum}/">a link to random page {$randomPageNum}</a>.</p>

    <p>This is <a href="http://google.com/">a link to some external page</a>.</p>

    <p>Venus de Mars has been a longtime fixture in<strong>*</strong> the Twin Cities music scene, prod<strong>*</strong>ucing seven original albums over the past two decades. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>

	<aside>
		<h2>Related</h2>
		<ul>
			<li><a href='#'>Fake related thing 1</a></li>
			<li><a href='#'>Fake related thing 2</a></li>
			<li><a href='#'>Fake related thing 3</a></li>
			<li><a href='#'>Fake related thing 4</a></li>
		</ul>

        <nav id='paginators'>
            <a id='prev' href="/page/{$prevPageNum}/"><span> Page {$prevPageNum}: This is a longer title that might wrap</span></a>
            <a id='next' href="/page/{$nextPageNum}/"><span> Page {$nextPageNum}: This is also a longer title that might wrap</span></a>
        </nav>


		<h2>About the Author</h2>

		<div class="reporterBio" itemprop="author" itemscope="" itemtype="http://schema.org/Person"><a href="/about/people/mpr_people_display.php?aut_id=30960"><img src="http://images.publicradio.org/content/2011/11/23/20111123_catherinerichert_1.jpg" alt="Catharine Richert" itemprop="image"></a><div class="reporterInfo"><h3><a href="/about/people/mpr_people_display.php?aut_id=30960" title="More information about Catharine Richert" itemprop="url"><span itemprop="name">Catharine Richert</span></a></h3>&nbsp; • &nbsp;<span itemprop="jobTitle">Reporter</span></div><div class="reporterInfo"><a href="mailto:crichert@mpr.org" title="Email Catharine Richert" itemprop="email">crichert@mpr.org</a>&nbsp; • &nbsp;<a href="http://www.twitter.com/catrichert" title="Follow Catharine Richert on Twitter">@catrichert</a></div><p itemprop="description"> Catharine Richert covers politics for MPR News, and writes PoliGraph, a fact-checking feature that gets behind the spin in Minnesota politics.</p><div style="clear: left;"></div></div>

	</aside>

{/block}
