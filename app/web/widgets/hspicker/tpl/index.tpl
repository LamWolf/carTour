<div class='da-wrap'>
  <div class='da-title'>
    <span id='J-DaCanl'>取消</span>
    <p>选择上车时间</p>
    <span id='J-DaConfirm'>确定</span>
  </div>

  <div class='da-main'>
    <div class='da-items' id='J-MD'>
      <ul>
        <li class='da-disable'>  </li>
        <li class='da-disable'>  </li>
        <li class='data-time selected'>上午</li>
        <li class='data-time'>下午</li>
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
      {@each i in range(0,13)}
          <li class='data-hour {@if i == 9}selected{@/if} {@if i == 12} da-last-hh {@/if}'>${i}</li>
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
        <li class='data-min {@if i == 0}selected{@/if}'>${i+'0'}</li>
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
