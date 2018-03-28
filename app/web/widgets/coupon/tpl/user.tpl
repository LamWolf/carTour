  <!--status:优惠券状态   0:"初始化", 1:"已绑定", 2:"已使用", -1:"已废弃", 98:"已锁定"-->
  {@each listData as item }
    {@if item.status == 1 || item.status == 98}
    <div class="coupon-item" data-price="${item.actualPrice}" data-couponId="${item.couponId}" data-priceInfo="${item.priceInfo}">
      <strong>{@if item.couponType == 1 }<small>￥</small>${replaceYuan(item.priceInfo)}{@else}${replaceZhe(item.priceInfo)} <small>折</small>{@/if}</strong>
      <p><a> {@if item.applyCarClass =="全车系通用" }[全品类]{@else}[限品类]{@/if} 可用
        <br/> ${item.couponBatchName}
        <br/> 有效期：<time>${item.startTime}-${item.endTime}</time>
      </a></p>
      <b></b>
    </div>
    {@/if}
  {@/each}
