<div class="bar-box">
	<span class="abcd-title">定位<br />历史<br />热门</span>	
	<dl>
		{@each _ as item, key}
			<dt>${key.toUpperCase()}</dt>
		{@/each}

	</dl>
	<del class="bar-sign">A</del>
</div>