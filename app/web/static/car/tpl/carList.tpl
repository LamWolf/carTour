
<h2>选择车型<span class="baggages-info icon-ioc79">行李标准说明</span></h2>
{@each realCarList as item,index}
  <div class="list-item" data-index="${index - 0 + 1}">
    <div class="list-item-title">${item.carDesc}+${item.serviceTags[0]}</div>
    <div class="list-item-luggage">[<b class="icon-ioc2">${item.capOfPerson}人</b> <b class="icon-ioc23">${item.capOfLuggage}行李</b>]</div>
    <div class="list-item-model">${item.models}</div>
    <div class="list-item-price">￥${formatMoney(item.price)}</div>
    {@if index == currentIndex - 1}
    <div class="list-item-pic">
      <img class="list-item-pic-left" src="${item.carPictures[0]}" />
      <img class="list-item-pic-right" src="${item.carPictures[1]}" />
    </div>
    {@else}
      <div class="list-item-pic-empty"></div>
    {@/if}
    <div class="list-item-status{@if index == currentIndex - 1} list-item-checked{@/if}"><i></i></div>
  </div>
  {@/each}
