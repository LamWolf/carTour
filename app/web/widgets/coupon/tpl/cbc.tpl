<!--TPL可引用如J-Coupon**为万事达所用-->
<div class="coupon J-order-coupon">
  <a class="J-CouponTitle">建行专属优惠券</a>
  {@if couponId}
   {#说明有东西}
   <em class="J-CouponDes" style="left : 3rem">1张可用<b></b></em>
   {@else}
   <em class="J-CouponDes empty" style="left : 3rem">暂无可用<b></b></em>
  {@/if}

  <strong>
    {@if couponType == 1 }-￥${replaceYuan(priceInfo)}{@else}${replaceZhe(priceInfo)}折{@/if}
  </strong>
  <pre class="J-CouponRight"></pre>
</div>
