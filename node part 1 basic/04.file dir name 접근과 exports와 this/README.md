# __filename , __dirname

## __filename : 현재파일경로
## __dirname : 디렉토리네임

```
repl에서는 직접접근 되지 않음 아래의 명령어 실행하여 결과값 확인 

 node fileNameOrDirName.js
```


# module.export 생략가능 

```
const odd = '홀수';
const even = '짝수';


// module.exports = {odd, even};
// 위의 소스를 아래와 같이 변경가능 

exports.odd = odd;
exports.even = even;


// module.exports === exports === {}
// 둘중하나 선택하여 사용해야함
```

