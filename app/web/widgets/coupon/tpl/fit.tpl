

{@if fit.couponId }
    <div class="coupon-item check" data-price="${fit.actualPrice}" data-couponId="${fit.couponId}" data-priceInfo="${fit.priceInfo}">
      <strong>{@if fit.couponType == 1 }<small>￥</small>${replaceYuan(fit.priceInfo)}{@else}${replaceZhe(fit.priceInfo)} <small>折</small>{@/if}</strong>
      <p><a> {@if fit.applyCarClass =="全车系通用" }[全品类]{@else}[限品类]{@/if} 可用
        <br/> ${fit.couponBatchName}
        <br/> 有效期：<time>${fit.startTime}-${fit.endTime}</time>
      </a></p>
      <b class="icon-ioc82"></b>
    </div>
{@/if}
