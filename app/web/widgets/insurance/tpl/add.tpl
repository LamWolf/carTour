<ul id="insurance">
  <li><span>平安境外用车险<small>免费提供</small></span><span><em class="turnBtn {@if isOpen}open{@/if}"><i></i></em></span></li>
  <li class="J-sa insuranceInfo {@if isOpen}show{@/if}">
    <span>投保人</span>
    <span class="infoArea">
    {@if defaultVal}
      ${defaultVal}
    {@else}
    <em>请输入投保人信息</em>
    {@/if}
    </span>
  </li>
</ul>
