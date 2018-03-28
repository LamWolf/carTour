<div class="J-big-album guide-big-album hide">
	<div class="iosBar"></div>
	{@if showTitle==true}
	<div class="album-head">
		{@if closeBtn==true}<span class="J-close icon-close album-close"></span>{@/if}
		<h2>${title}</h2>
	</div>
	{@/if}
	<div class="J-cont album-cont">
		{@if photesInfo}
		<div class="ablum-swiper-container">
			<div class="swiper-wrapper">
        {@each photesInfo as photo,i}
				<div class="swiper-slide" style="padding-top:${top}px;">
					{@if i==0}
					<div class="image-div" style="background-image: url(${photo});"></div>
					{@else}
					<div class="image-div swiper-lazy" data-background='${photo}'></div>
					{@/if}
        </div>
        {@/each}
			</div>
			<div class="swiper-pagination"></div>
		</div>
		{@/if}
	</div>
</div>
