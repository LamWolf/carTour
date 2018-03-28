<div class="bar-box">
  {@if location == true || history == true || hot == true}
	<span class="abcd-title">{@if location==true}定位<br />{@/if}{@if history==true}历史<br />{@/if}{@if hot==true}热门{@/if}</span>
	{@/if}
	<dl>
		{@each groupCities as item,key}
			<dt>${key}</dt>
		{@/each}

	</dl>
	<del class="bar-sign">A</del>
</div>
