# 모듈

## ES6 는 CLI 에서 지원되지 않음

```
const checkStringOddOrEven = require('./func.js');

위와같이 불러오고 

 const checkStringOddOrEven =  function (str) {
    if(str.length % 2) {
        return value.odd;
    } else {
        return value.even;
    }
}



module.exports = {
    checkStringOddOrEven
}


위와같이 내보낸다.

```