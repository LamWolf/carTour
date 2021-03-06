<div class='da-wrap'>
  <div class='da-title'>
    <span id='J-DaCanl'>取消</span>
    <p>选择用车时间(当地时间)</p>
    <span id='J-DaConfirm'>确定</span>
  </div>

  <div class='da-main'>
    <div class='da-items da-items-flex2' id='J-MD'>
      <ul>
        <li class='da-disable'>  </li>
        <li class='da-disable'>  </li>
      {@each data as item,index}
         <li class='data-time {@if item.time == data._dTime.time}selected{@/if}' data-time='${item.time}'>${item.display}</li>
      {@/each}
        <li class='da-disable'>  </li>
        <li class='da-disable'>  </li>
      </ul>
      <div class='da-items-mask'></div>
      <div class='da-items-lines'></div>
    </div>
    <div class='da-items' id='J-HH'>
      <ul>
        <li class='da-disable'>  </li>
        <li class='da-disable'>  </li>
      {@each i in range(0,24)}
          <li class='data-hour {@if i == data._dTime.HH}selected{@/if}'>${i}</li>
      {@/each}
      <li class='da-disable'>  </li>
      <li class='da-disable'>  </li>
      </ul>
      <div class='da-items-mask'></div>
      <div class='da-items-lines'></div>
    </div>
    <div class='da-items' id='J-MM'>
      <ul>
        <li class='da-disable'>  </li>
        <li class='da-disable'>  </li>
      {@each i in range(0,6)}
        <li class='data-min {@if i+'0' == data._dTime.mm}selected{@/if}'>${i+'0'}</li>
      {@/each}
      <li class='da-disable'>  </li>
      <li class='da-disable'>  </li>
      </ul>
      <div class='da-items-mask'></div>
      <div class='da-items-lines'></div>
    </div>
  </div>
</div>

<div class='da-mask J-da-mask'></div>
