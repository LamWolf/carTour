class fixCallUI {
    constructor(opt) {
        this.opt = opt;
        this.cacheData(opt.data);
        this.bindEvent();
    }

    cacheData(data) {
        this.data = data || {};
        this.count = 0; // 执行的次数
    }

    beforeTrans() {
        this.count += 1;
        if (this.count > 1) return;
        console.log('beforeTrans');
        this.currentScroll = this.opt.dom.parents().map((i, v) => {
            return {
                key: v,
                top: $(v).scrollTop()
            };
        });
        this.opt.dom.css({
            display: 'none'
        });
    }

    afterTrans() {
        this.count -= 1;
        if (this.count < 0) return;
        console.log('afterTrans');
        this.opt.dom.css({
            display: 'block'
        });
        this.currentScroll.map((i, v) => {
            $(v.key).scrollTop(v.top);
        });
    }

    bindEvent() {
        const that = this;
        $(document).off(`hide${this.opt.callbackName}:fixCall`).on(`hide${this.opt.callbackName}:fixCall`, e => {
            that.beforeTrans();
        });
        $(document).off(`show${this.opt.callbackName}:fixCall`).on(`show${this.opt.callbackName}:fixCall`, e => {
            that.afterTrans();
        });
    }

    triggerShowEvent() {
        $(document).trigger(`show${this.opt.callbackName}:fixCall`);
    }

    triggerHideEvent() {
        $(document).trigger(`hide${this.opt.callbackName}:fixCall`);
    }

}

module.exports = fixCallUI;
