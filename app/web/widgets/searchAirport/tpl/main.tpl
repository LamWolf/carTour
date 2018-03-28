<div class="plane-list">
	<div class="plane-box">
		{@each _ as item, key}
			<h3 class="line-top" data-abcd data-name="${key}">${key}</h3>
			<ul class="line-top">
				{@each item as list, index}
					<li class="line-bottom">
						<a href="javascript:;" data-info="${setInfo(list)}">
							${setResult(list)}
						</a>
					</li>
				{@/each}
			</ul>
		{@/each}
	</div>
</div>
