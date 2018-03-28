<div id="J_editInfo">
    <div class="con hackmax">
        <h2>请务必认真填写以保障您的安全出行</h2>
        <ul>
            <li>
              <span>中文姓名</span>
              <span><input type="text" placeholder="请输入您的真实姓名" class="name" value="${name}" data-require></span>
            </li>
            <li>
              <span>护照号</span>
              <span><input type="text" placeholder="请输入您的护照号" class="passportNo" value="${passportNo}" data-require></span>
            </li>
            <li>
              <span>性别</span>
              <span class="sex" data-sex="${sex}">
                {@if sex=='0'}
                  <em class="selected"><i class="icon"></i>男</em>
                  <em><i class="icon"></i>女</em>
                {@else}
                  <em><i class="icon"></i>男</em>
                  <em class="selected"><i class="icon"></i>女</em>
                {@/if}
              </span>
            </li>
            <li class="bor_n">
              <span>出生日期</span>
              <span><input min="1900-01-01" max="2099-12-31" type="date" placeholder="请选择您的出生日期" class="birthday {@if __hackFuck == true}hackFuck{@/if}" value="{@if birthday}${birthday}{@else}1990-01-01{@/if}" data-require></span>
            </li>
        </ul>
        <a href="javascript:;" id="okBtn">确认信息</a>
    </div>
</div>
