require('./index.scss');
class Loading {
    constructor(opt) {
        this.opt = opt;
    }
    init() {
        this.cacheDom();
        this.renderUI();
    }
    cacheDom() {
        this.dom = document.querySelector('body');
    }
    renderUI() {
        this.loading = this.dom.querySelector('#loading');
        if (this.loading) {
            this.loading.style.display = '';
            return;
        }
        const html = '<div id="loading" class="loading"><div class="loading-content">loading... </div></div>';
        this.dom
            .insertAdjacentHTML('beforeend', html);
        this.loading = this.dom.querySelector('#loading');

    }
    hide() {
        this.dom.removeChild(this.loading);
    }
    _hide() {
        this.loading.style.display = 'none';
    }
    remove() {
        this.dom.removeChild(this.loading);
    }
}
module.exports = Loading;
