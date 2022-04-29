const express = require('express')// Express.js 모듈 불러오기
const app = express() // Express.js 서버 만들기
const port = 8080 // port 안에 포트 설정 예) http://localhost:8080

app.get('/', (req, res) => { // 접속 했을때 실행하기
    res.send({ result: "Hello world" }) // json 형식으로 출력
})

app.get('/say', (req, res) => { // /say 접속 했을때 실행하기
    const said = req.query.text // said 상수 안에 값을 저장 예) http://localhost:8080/say?text=dd
    res.send({ result: said }) // json 형식으로 출력
})

app.listen(port, () => {
    console.log('http://localhost:' + port)
})// Express.js 서버 켜기