<div id="J_insurance" class="hackmax">
    <div class="detail {@if insurInfo.source=='5'}ota{@/if}">
        <img src="${PIC.banner}" alt="" class="banner">
        {@if param && param.orderNo}
        <p>订单号：${param.orderNo}</p>
        <p>${param.cityName}&nbsp;${param.orderType}服务</p>
        {@/if}
        <p>出行人数&nbsp;X&nbsp;${peopleNum}，可为&nbsp;${peopleNum}&nbsp;人投保</p>
        <p><strong>请务必认真填写以保障您的安全出行</strong></p>
    </div>
    <div class="con">
        <ul>
            <li><span>返程航班</span><span><input type="text" placeholder="请输入您的返程航班号" value="${insurInfo.flightNo}" class="flightNo" name="flightNo" data-require></span></li>
            <li class="bor_n"><span>返程日期</span><span placeholder="请输入您的返程日期" data-date="${insurInfo.date}" class="date" data-require>{@if insurInfo.date}${insurInfo.date}{@else}<em>请输入您的返程日期</em>{@/if}</span></li>
        </ul>
        <div class="insuranceInfo"></div>
    </div>
  <a href="javascript:;" class="J-sa ok hackmax">确认投保</a>
</div>
