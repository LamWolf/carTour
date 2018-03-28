<div class='search-input-wrap'>
  <div class="search-area">
    <span class='sp-search-icon'></span><input placeholder='请输入城市' id='J-Sp-input'><span class='sp-clear-icon'></span>
  </div>
</div>
<div class="cityCircle" id="cityCircle">
	{# <div class="city-nav" id="cityNav">
		<span class="}{# @if type == 1select}{# @/if}{#" data-name="inside" data-type="1">国内</span>
		<span class="}{# @if type == 2select}{# @/if}{#" data-name="outside" data-type="2">国际港澳台</span>
	</div>}
  {@if groupCity.location==true}
	<div class="list city-location">
		<h4><del></del>当前定位</h4>
		<ul>
			<li>
				<a href="javascript:;" title="" id='location' class="fail">定位中...</a>
			</li>
		</ul>
	</div>
  {@/if}
  {@if groupCity.location==true}
	<div class="list city-history">
		{@include tpl.history, history}
	</div>
  {@/if}
  {@if groupCity.hot==true}
	<div class="list city-hot">
		{@include tpl.hot, hotCities}
	</div>
  {@/if}
	<div class="city-con">
		{@include tpl.main, groupCity}
	</div>
</div>
<div class="plane-bar bar">
    {@include tpl.bar, groupCity}
</div>
<div class="city-search search-box" id="citySearch">

</div>
