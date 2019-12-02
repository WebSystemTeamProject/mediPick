var request = require('request');

var url = 'http://apis.data.go.kr/1471000/MdcBioEqInfoService/getMdcBioEqList';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=JyDDOwuO1C7EJrEpMq7YLKHO%2B4wvoZwOUyZKl6DGji8ABGFMQYC2f8QmcSyrw3eG1n5Mou2NkFBe4gsbjB0MuA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('item_name') + '=' + encodeURIComponent(''); /* 제품명 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지번호 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('') + '=' + encodeURIComponent(''); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});