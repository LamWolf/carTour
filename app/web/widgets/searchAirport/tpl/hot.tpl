<div class="hot-box">
	<h3 class="line-top">热门机场</h3>
	<ul class="line-top">
		{@each _ as item, index}
			<li class="line-bottom">
				<a href="javascript:;" data-info="${setInfo(item)}">
					${setResult(item)}
				</a>
			</li>
		{@/each}
	</ul>
</div>
