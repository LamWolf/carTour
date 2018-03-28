<div id='J-SearchAreaCode' class='sp-wrap hackmax'>
  <div class='J-sp-fix'>
    <div class='sp-input-wrap'>
          <span class='sp-search-icon'></span><input placeholder='请选择区号' id='J-Sp-input'><span class='sp-clear-icon'></span>
     </div>
  </div>


  <div class='sp-res-wrap'>

    <ul  id='J-sp-ul'>
      {@each area as item,index}
      <li data-index=${index}><a onclick="javascript:void(0)">${item.countryName}(${item.areaCode})</a></li>
      {@/each}
    </ul>

  </div>

  <div class='sp-loading'> </div>
</div>
