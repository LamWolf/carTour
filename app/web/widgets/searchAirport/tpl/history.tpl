{@if _.length > 0}
	<div class="history-box">
		<h3 class="line-top">历史记录</h3>
		<ul class="line-top">
			{@each _ as item, index}
				<li class="line-bottom">
					<a href="javascript:;" class="delete" data-info="${setInfo(item)}">
						${setResult(item)}
						<del></del>
					</a>
				</li>
			{@/each}
		</ul>
	</div>
{@/if}
