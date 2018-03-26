const mm = require('mm');
const http = require('http');

const mockURL = '/foo';
const mockResData = 'mock data';
const mockResHeaders = {
    server: 'mock server'
};
mm.http.request(mockURL, mockResData, mockResHeaders);
mm.https.request(mockURL, mockResData, mockResHeaders);

// http
// http.get({
//     path: '/foo'
// }, function(res) {
//     console.log(res.headers); // should be mock headers
//     console.log('this is mm mock==========================');
//     let body = '';
//     res.on('data', function(chunk) {
//         body += chunk.toString();
//     });
//     res.on('end', function() {
//         console.log(body); // should equal 'mock data'
//     });
// });

// // https
// https.get({
//     path: '/foo'
// }, function(res) {
//     console.log(res.headers); // should be mock headers
//     let body = '';
//     res.on('data', function(chunk) {
//         body += chunk.toString();
//     });
//     res.on('end', function() {
//         console.log(body); // should equal 'mock data'
//     });
// });
