<ul class="W-Can-main-date-wrap">
    {@each i in range(0,42)}
        {@if i >= firstIndex && i < endIndex}
            <li 
            class="${getClassOf(data[i-firstIndex])} {@if today == data[i-firstIndex].serviceDate}ui-today{@/if} {@if select == data[i-firstIndex].serviceDate}ui-select{@/if}" 
            data-date="${data[i-firstIndex].serviceDate}"
            >
                <em>{@if today == data[i-firstIndex].serviceDate}今天{@else}${getDayOfString(data[i-firstIndex].serviceDate)}{@/if}</em>
                <i></i>
            </li>
        {@else if endIndex < 35 && i < 35}
            <li class="can-item can-invalid"></li>
        {@else if i < firstIndex}
            <li class="can-item can-invalid"></li>
        {@/if}
    {@/each}
</ul>
