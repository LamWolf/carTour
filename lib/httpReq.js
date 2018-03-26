const mm = require('mm');
const http = require('http');
const mockCon = {
    city: {
        mockURL: '/cityDetail',
        mockResData: require('../mock/mockData/cityDetail'),
        mockResHeaders: {
            server: 'mock server'
        }
    }
};
class Http {

    constructor(obj) {
        this.init(obj);
    }

    init(obj) {
        let mockObj = {};
        if (obj == 'city') {
            mockObj = mockCon.city;
        }
        const { mockURL, mockResData, mockResHeaders } = mockObj;
        return mm.http.request(mockURL, JSON.stringify(mockResData), mockResHeaders);

    }

    curlRequest(url) {
        debugger
        return new Promise(resolve => {
            let body = '';
            http.get({
                path: url
            }, function(res) {
                res.on('data', function(chunk) {
                    body += chunk.toString();
                });
                res.on('end', function() {
                    resolve(JSON.parse(body));
                });
            });
        });

    }
}

module.exports = Http;
