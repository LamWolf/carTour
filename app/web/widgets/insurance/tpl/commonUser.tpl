{@each list as item,index}
<dl data-id='${index}' data-insuranceUserId='${item.insuranceUserId}' data-name='${item.name}' data-passportNo='${item.passportNo}' data-sex='${item.sex}' data-birthday='${item.birthday}'>
    <dt>投保人</dt>
    <dd class="name">
    {@if item.name == ''}
    <em>请输入信息</em>
    {@else}
    ${item.name}
    {@/if}
    </dd>
    <dd class="edit"><img src="${PIC.edit}" alt="编辑"></dd>
</dl>
{@/each}
