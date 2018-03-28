<div class="WG-Canlendar-wrap">
    <div class="W-Can-title">
        <span>可服务日期</span>
        <div class="W-Can-op">
            <i class="W-Can-op-left-btn"></i>
            <span class="W-Can-op-title">${getFuckFormat(next6Month[0])}</span>
            <i class="W-Can-op-right-btn"></i>
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
                {@each next6Month as item}
                    <div class="swiper-slide W-Can-main-dates" data-date=${item}> <div class="swiper-lazy-preloader"></div></div>
                {@/each}
              </div>
            </div>
            <div class="W-Can-main-des">
                <span>当天部分时间可订</span>
            </div>
        </div>
    </div>
</div>
