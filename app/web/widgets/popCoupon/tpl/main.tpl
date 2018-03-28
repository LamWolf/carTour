<div class="city-box">
	{@each _ as item, key}
		<h3 data-abcd data-name="${key.toUpperCase()}">${key.toUpperCase()}</h3>
		<ul>
			{@each item as list, index}
				<li class="line-bottom">
					<a href="javascript:;" data-info="${setInfo(list)}">
						$${setResult(list)}
					</a>
				</li>
			{@/each}
		</ul>
	{@/each}
</div>
