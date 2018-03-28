<div id="J-cityTips" class="layerSelect">
    <div class="conArea">
        <h2>请选择包车游玩范围</h2>
        <div class="conList">
            <ul>
                <li>
                    <h3>{@if lasted==0}住{@/if}在${cityName}{@if lasted==1}结束行程{@/if}，市内游玩</h3>
                    {@if intownTip}<p>${intownTip}</p>{@/if}
                </li>
                <li>
                    <h3>{@if lasted==0}住{@/if}在${cityName}{@if lasted==1}结束行程{@/if}，周边游玩</h3>
                    {@if neighbourTip}<p>${neighbourTip}</p>{@/if}
                </li>
                {@if groupCitys.length >0}
                <li>
                    <h3>{@if lasted==0}住{@/if}在其他地方{@if lasted==1}结束行程{@/if}</h3>
                    {@if hotTip}<p>${hotTip}</p>{@/if}
                </li>
                {@/if}
            </ul>
        </div>
    </div>
    <div class="mask"></div>
</div>
