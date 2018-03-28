<div class="G-plane-wrap" id="${uuid}">
  <div class='search-input-wrap'>
    <div class="search-area">
      <span class='sp-search-icon'></span><input placeholder='请输入机场名称' id='J-Sp-input'><span class='sp-clear-icon'></span>
    </div>
  </div>
	<div class="plane-main">
		{@if history}
			<div class="plane-list history">
				{@include tpl.history, history}
			</div>
		{@/if}
		<div class="plane-list hot">
			{@include tpl.hot, hot}
		</div>
		<div class="plane-con">
			{@include tpl.main, main}
		</div>
	</div>
	<div class="plane-bar bar">
		{@include tpl.bar, main}
	</div>
	<div class="plane-search search-box" id="planeSearch"></div>
</div>
