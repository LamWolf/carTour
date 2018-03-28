<div class="hot-box">
	<h4><del></del>热门城市</h4>
	<ul>
		{@each _ as item, index}
			<li>
				<a href="javascript:;" data-info="${setInfo(item)}" class="{@if item.cityName.length>6}small{@/if}">
					${item.cityName}
				</a>
			</li>
		{@/each}
	</ul>
</div>