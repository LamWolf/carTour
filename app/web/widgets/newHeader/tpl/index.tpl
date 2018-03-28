<div id="${uuid}" class="G-header-warp">
	<div class="header-box {@if title}center{@/if}">
		<a href="javascript:;" title="" id="back"></a>
		{@if !title}
			{@if type=="tabs"}
			<p class="J-header-tabs tabs-wrap">
			{@each tabs as item, index}
				<span class="{@if item.active===true}active{@/if}">${item.title}</span>
			{@/each}
			</p>
			{@else}
				<input type="search" name="search" id="search">
				<del id="placeholder" class="placeholder">${post.holder}</del>
				<a href="javascript:;" title="" id="channel">取消</a>
			{@/if}
		{@else}
			<span id="title">${title}</span>
		{@/if}
		{@if other}
			<a href="javascript:;" class="${other.cla}" id="other">${other.text}</a>
		{@/if}
	</div>
</div>