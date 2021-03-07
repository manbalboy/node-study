const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000)
app.get('/', (req,res) => {
    // res.send({test : 'z'});
    res.sendFile( path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), ()=>{
    console.log('익스프레스 서버 실행 ');
});
