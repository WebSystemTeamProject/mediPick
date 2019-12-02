var request = require('request');

var url = 'http://apis.data.go.kr/B551182/dgamtCrtrInfoService/getCmdcDgamtList';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=JyDDOwuO1C7EJrEpMq7YLKHO%2B4wvoZwOUyZKl6DGji8ABGFMQYC2f8QmcSyrw3eG1n5Mou2NkFBe4gsbjB0MuA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* 파라미터설명 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});