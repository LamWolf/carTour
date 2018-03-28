<div class="G-newPlace-wrap" id=${uuid}>
  <div class='search-input-wrap'>
    <div class="search-area">
      <span class='sp-search-icon'></span><input placeholder='${opt.placeholder}' id='J-Sp-input'><span class='sp-clear-icon'></span>
    </div>
  </div>
	<div class="place-main"></div>
	<div class="place-content" id="placeContent">
		{@if history && history.length > 0}
			<div class="history-box history">
				<h3 class="line-top">历史记录</h3>
				<ul class="line-top">
					{@each history as item, index}
						<li class="line-bottom">
							<a href="javascript:;" class="delete" data-info="${item}">
								${item}
							</a>
						</li>
					{@/each}
				</ul>
			</div>
		{@else}
			<p class="place-no">
				<span></span>
				请输入你要查找的目的地
			</p>
		{@/if}
	</div>
</div>
