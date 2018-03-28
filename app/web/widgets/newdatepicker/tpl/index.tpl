<div class="can">
  <div class="can-main" id="${opt.id}">
    <h2>${opt.title}</h2>
    <div class="can-week J-sp-fix">
      <ul>
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
    </div>
    <div class="scroll scroll-${opt.index}">
      <div class="can-days">
        {@each data as item,key}
        <h2>${key}</h2>
        <ul class='can-day'>
          {@each i in range(0,42)}
          {@if i >= getFistIndex(item[0]) && i< getLength(item)+getFistIndex(item[0]) }
          <li class="can-item ${getCellClass(item[i-getFistIndex(item[0])],opt.defaultDate,opt.tomorrow,opt.isRange)}" data-date=${getFullDate(item[i-getFistIndex(item[0])])}>
            <em>${getDate(item[i-getFistIndex(item[0])])}</em>
            <i></i>
          </li>
          {# 删除多余的空行}
          {@else if getFistIndex(item[0]) < 7 && i<7}
          <li class="can-item can-invalid"></li>
          {#@else if getLength(item)+getFistIndex(item[0]) < 35 && i<35}
          {#<li class="can-item can-invalid"></li>}
          {@/if}
          {@/each}
        </ul>
        {@/each}
      </div>
    </div>
    <div class="can-tips">${opt.tips}</div>
  </div>
  <div class="mask"></div>
</div>
