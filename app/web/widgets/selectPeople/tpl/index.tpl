<div id="passenger-wapper" class="passenger-wapper">
  <section class="passenger">
    <header>
        <a class="cancel" id="cancel">取消</a>
        <h2>请选择出发人数</h2>
        <a class="confirm" id="ok">确定</a>
    </header>
    <div class="passenger-content">
        <ul>
            <li>
                <span>
                    <b class="icon-ioc29"></b>
                    <strong>成人</strong>
                </span>
                <span>
                    <var class="reduce">-</var>
                    <em class="J_adult num">${data.adultNo}</em>
                    <var class="plus">+</var>
                </span>
            </li>
            <li>
                <span>
                    <b class="icon-ioc30"></b>
                    <strong>儿童</strong>
                    <small>12岁及以下</small>
                </span>
                <span>
                    <var class="reduce">-</var>
                    <em class="J_child num">${data.childNo}</em>
                    <var class="plus">+</var>
                </span>
            </li>
            {@if checkIsValid(addition)}
            <li>
                <span>
                    <b class="icon-ioc31"></b>
                    <strong>儿童座椅 </strong>
                    {@if addition.childSeatPrice1 == 0}
                    <small>免费提供1个</small>
                   {@/if}
                </span>
                <span>
                    <var class="reduce">-</var>
                    <em class="J_seat num">${data.childSeat}</em>
                    <var class="plus">+</var>
                </span>
            </li>
            {@/if}
        </ul>
    </div>
  </section>
  <div class="mask"></div>
</div>
