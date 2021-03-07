const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000)
app.get('/', (req,res) => {
    // res.send({test : 'z'});
    res.sendFile( path.join(__dirname, 'index.html'));
});

app.get('/category/test', (req,res) => {
    res.send(`hello ${req.params.name}`);
});

app.get('/category/:name', (req,res) => {
    res.send(`hello ${req.params.name}`);
});

app.listen(app.get('port'), ()=>{
    console.log('익스프레스 서버 실행 ');
});
