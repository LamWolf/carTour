{@if app != 'hbcc'}
  <div id="J-Order"  class="order-help-box line-top">
    <div class="order-box">
      {@if !(app == 'hbcg' || source == 'hbcg')}
        <a id="wechat">
          <b class="icon-ioc36"></b>
          <span>微信咨询</span>
          <del class="line-right">
        </a>

        </del>
        <a href="tel://4006100009" class="order-phone">
          <b class="icon-ioc37"></b>
          <span>电话咨询</span>
        </a>
      {@/if}
      <a id="orders">
        <button id="jOrder">立即预订</button>
      </a>
    </div>
    <div class="help-weixin">
      <div class="weixin-box">
        <div class="weixin-title"></div>
        {@if iswx}
          <p>添加客服微信</p>
          <img src="${Mm}" width="240" />
          <p>长按识别二维码，咨询客服人员</p>
        {@else}
          <p>预订/咨询</p>
          <p class="qcode" style="margin:20px 0;font-size:20px;">HBCVIPQY</p>
          <p>请复制微信号，添加客服人员微信</p>
        {@/if}
        <div class="weixin-close">
          <var></var>
        </div>
      </div>
    </div>
  </div>
{@/if}
