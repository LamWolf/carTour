<!--TPL可引用如J-Coupon**为万事达所用-->
{@if type>0 }
<div class="coupon" data-coupId="${fit.couponId}" data-coupPriceInfo="${fit.priceInfo}" data-actualPrice="${fit.actualPrice}">
{@else}
<div class="coupon">
{@/if}
  <a class="J-CouponTitle">优惠券</a>
{@if count>0 }
  <em class="J-CouponDes">${count}张可用<b></b></em>
{@else}
  <em class="J-CouponDes empty">暂无可用<b></b></em>
{@/if}
{@if cancel == 0 && fit.couponType}
<!--免费券有问题,需要修改TODO-->
<!--
  <strong>{@if fit.couponType == 1 }-￥${replaceYuan(fit.priceInfo)}{@else}${replaceZhe(fit.priceInfo)}折{@/if}</strong>
-->
  <strong>${fit.priceInfo}券</strong>
{@else if cancel == 1}
  <span>不使用优惠券</span>
{@/if} 
  <pre class="J-CouponRight"></pre>
</div>
