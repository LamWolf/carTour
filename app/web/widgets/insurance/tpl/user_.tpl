{@each insurInfo.userList as item,index}
<dl class="user" data-id='${index}' data-name='${item.name}' data-passportNo='${item.passportNo}' data-sex='${item.sex}' data-birthday='${item.birthday}' {@if index==0}placeholder="至少填写一个投保人" data-require{@/if}>
    <dt>投保人${index-0+1}</dt>
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
