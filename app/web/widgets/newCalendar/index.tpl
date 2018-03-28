<div class="WG-Canlendar-wrap">
    <div class="W-Can-title">
        <h3>出行日期(当地时间)</h3>
        <div class="W-Can-op">
            <div class="W-Can-op-left-btn"><small class="icon-ioc91 op-left-btn"></small></div>
            <span class="W-Can-op-title">${getFuckFormat(month6[0])}</span>
            <div class="W-Can-op-right-btn"><small class="icon-ioc93 op-right-btn"></small></div>
        </div>
    </div>
    <div class="W-Can-main">
        <div class="W-Can-main-week">
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
        <div class="W-Can-main-date">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                {@each month6 as item}
                    <div class="swiper-slide W-Can-main-dates" data-date=${item}> <div class="swiper-lazy-preloader"></div></div>
                {@/each}
              </div>
            </div>
        </div>
    </div>
</div>
