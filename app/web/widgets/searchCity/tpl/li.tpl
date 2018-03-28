{@if data.listData.length > 0}
{@each data.listData as item,index}
  <li class='sp-li' data-index=${index}>
    <p>
      ${item.cityName}-${item.placeName}
    </p>
  </li>
{@/each}
{@else}
  <li class='sp-li disable'>
    <p>
      没有找到目标城市,请再次输入
    </p>
  </li>

{@/if}
