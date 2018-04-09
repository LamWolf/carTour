<div class="sku-child-num">
	<span>儿童</span>
	<span class="children-limit">（12岁以下）</span>
	<div class="sku-people-nums people-children-nums">
		<span class="sku-num-modi {@if childNo == 0}sku-num-false{@/if}" data-type="child-less">-</span>
		<span class="sku-num">${childNo}</span>
		<span class="sku-num-modi" data-type="child-more">+</span>
	</div>
</div>
{@if childNo > 0}
<div class="sku-child-seat">
	<span>儿童座椅</span>
	<div class="sku-people-nums people-child-seats">
		<span class="sku-num-modi {@if childSeat == 0}sku-num-false{@/if}" data-type="childSeat-less">-</span>
		<span class="sku-num">${childSeat}</span>
		<span class="sku-num-modi" data-type="childSeat-more">+</span>
	</div>
</div>
{@/if}