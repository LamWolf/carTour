
  <div class='J-to-scroll' style="z-index:13;">
  <div class="coupon-item">
      <strong>{@if item.couponType == 1 }<small>￥</small>${replaceYuan(item.priceInfo)}{@else}${replaceZhe(item.priceInfo)} <small>折</small>{@/if}</strong>
      <p><a> {@if item.applyCarClass =="全车系通用" }[全品类]{@else}[限品类]{@/if} 可用
        <br/> ${item.couponBatchName}
        <br/> 有效期：<time>${item.startTime}-${item.endTime}</time>
      </a></p>
      <b></b>
  </div>
  <div class="coupon-detail">
    <p class="coupon-detail-rule">${replace(item.orderRuleRemark)}</p>



    {@each item.dataList as data }
    <div class="coupon-detail-box">
      <h3>${data.title}</h3>
      <p>${data.content}</p>
    </div>
    {@/each}


  </div>
  </div>

