/**
 * Created by Gorden on 16/6/8.
 */

// let MD5 = require('./blueimp-md5.js');

class getAK {
    constuctor() {

    }
    getAk(success) {
        return success && success(window.__ACC_KEY);
    }
}

module.exports = new getAK();
