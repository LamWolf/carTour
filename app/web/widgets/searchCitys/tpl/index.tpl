<div class="G-newCity-wrap" id="${uuid}">
  <div class='search-input-wrap'>
    <div class="search-area">
      <span class='sp-search-icon'></span><input placeholder='请输入城市' id='J-Sp-input'><span class='sp-clear-icon'></span>
    </div>
  </div>
	<div class="city-main">
		<div class="city-nav" id="cityNav">
			<span class="{@if type == 1}select{@/if}" data-name="inside" data-type="1">国内</span>
			<span class="{@if type == 2}select{@/if}" data-name="outside" data-type="2">国际港澳台</span>
		</div>
		<div class="list city-location">
			<h4><del></del>当前定位</h4>
			<ul>
				<li>
					<a href="javascript:;" title="" id='location' class="fail">定位中...</a>
				</li>
			</ul>
		</div>
		<div class="list city-history">
			{@include tpl.history, history}
		</div>
		<div class="list city-hot">
			{@include tpl.hot, main.hotCodeCities}
		</div>
		<div class="city-con">
			{@include tpl.main, main.codeCities}
		</div>
	</div>
	<div class="plane-bar bar">
		{@include tpl.bar, main.codeCities}
	</div>
	<div class="city-search search-box" id="citySearch">
	</div>
</div>
