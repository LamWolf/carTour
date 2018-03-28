  {@each goodses as good}
    {@if good.headLable == '超省心'}
    <div class="item item-economize" data-goodsNo=${good.goodsNo}>
      <div class="item-pic">
        <em>超省心</em>
        <span class="item-guide">${good.guideAmount} 位当地中文司导 <b></b></span>
        {@if good.goodsPicture}
        <div class="item-img lazy" data-src="${handleImg(good.goodsPicture)}"></div>
        {@else}
        <div class="item-img lazy" data-src="${img.errorGood}"></div>
        {@/if}
      </div>
      <p class="item-title">${good.goodsName}</p>
      <div class="item-price">
        <strong><small>¥ </small>${good.perPrice}</strong>
        <span>起/人·${good.daysCount}日{@if good.hotelStatus}·含酒店{@/if}</span>
      </div>
    </div>
    {@else}
    <div class="item item-free" data-goodsNo=${good.goodsNo}>
      <h2>${good.depCityName}${good.daysCount}日玩法推荐</h2>
      <span class="item-guide">${good.guideAmount} 位当地中文司导 <b></b></span>
      <div class="item-pic">
        <em>超自由</em>
        {@if good.goodsPics[0]}
        <div class="item-img lazy" data-src="${handleImg(good.goodsPics[0],330,235)}"></div>
        {@else}
        <div class="item-img lazy" data-src="${img.errorGood}"></div>
        {@/if}
        {@if good.goodsPics[1]}
        <div class="item-img lazy" data-src="${handleImg(good.goodsPics[1],330,235)}"></div>
        {@else}
        <div class="item-img lazy" data-src="${img.errorGood}"></div>
        {@/if}
      </div>
      <p class="item-title">${good.goodsName}</p>
    </div>
    {@/if}
  {@/each}
