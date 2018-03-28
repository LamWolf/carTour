{@if _.length > 0}
<div class="hot-box">
	<h4><del></del>热门</h4>
	<ul>
		{@each _ as item, index}
			<li>
				<a href="javascript:;" data-info="${setInfo(item)}" class="{@if item.cityName.length>6}small{@/if}">
          {@if item.cityName.length>7}
					 <em>${item.cityName}</em>
           {@else}
           ${item.cityName}
          {@/if}
				</a>
			</li>
		{@/each}
	</ul>
</div>
{@/if}
