{@if _.length > 0}
	<div class="history-box">
		<h4><del></del>历史记录</h4>
		<ul>
			{@each _ as item, index}
				<li>
					<a href="javascript:;" data-info="${setInfo(item)}" class="delete {@if item.cityName.length>6}small{@/if}">
						${item.cityName}<del></del>
					</a>
				</li>
			{@/each}
		</ul>
	</div>
{@/if}