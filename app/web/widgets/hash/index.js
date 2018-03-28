const Util = require('widgets/util/index');

const Global = window || this;

class Hash {
    constructor() {
        this.catchHash = '';
    }

    init(fn) {
  	const that = this;
  	Global.setTimeout(function() {
            Global.onhashchange = function(evn) {
        	if (evn.newURL === evn.oldURL && evn.newURL === '') return;
        	fn && fn.call(that, evn);
      	};
  	}, 1);
    }

    _check() {
  	return Global.location.hash.charAt(0) == '#';
    }

    _Uuid() {
  	return (new Date()).getTime();
    }

    del() {
  	const that = this;
  	Global.history.replaceState(null, '', Global.location.href.replace(that.catchHash, ''));
  	Global.onhashchange = null;
    }

    _get() {
  	return Global.location.hash || location.hash;
    }

    get() {
  	const that = this;
        if (that._check()) return Global.location.hash.replace(/^[^#]*#/, '').replace(/^#+|#+$/, '');
        return that._get();
    }

    set(hash) {
  	const that = this;
  	const old = that.get();
  	if (hash == 'auto' || !hash) hash = `#${that._Uuid()}`;
  	if (hash.charAt(0) != '#') hash = `#${hash}`;
  	if (old.indexOf(hash) > -1) return;
  	that.catchHash = hash;
  	Global.location.hash = old + hash;
  	return that;
    }

}

module.exports = new Hash();
