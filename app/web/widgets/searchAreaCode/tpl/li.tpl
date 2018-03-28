{@each area as item,index}
<li data-index=${index}><a onclick="javascript:void(0)">${item.countryName}(${item.areaCode})</a></li>
{@/each}
