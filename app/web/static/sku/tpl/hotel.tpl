
<span class="room-date">共${dateCount}晚&nbsp;|&nbsp;</span>
<span class="room-nums-title">房间数</span>
<span class="room-prices">（￥${hotelCostPrice * roomNo}）</span>
<div class="room-nums">
	<span class="room-less sku-num-modi {@if roomNo == 1}sku-num-false{@/if}">-</span>
	<span class="room-num">${roomNo}</span>
	<span class="room-more sku-num-modi {@if roomNo == 100}sku-num-flase{@/if}">+</span>
</div>
