from flask import Flask, request # Flask 모듈 임포트
app = Flask(__name__) # app 변수에 플라스크 서버 넣기

@app.route('/') # app.route 이벤트 설정
def main():
    return 'Hello Flask!' # Hello Flask! 라고 출력

#json 형식
@app.route('/json')
def json_main():
    param = request.args.get('example') # 값을 가져올 것 예시: https://example.com/json/?example=
    if param == "hello": # 값이 hello 라면
        return {"hello":"world"} # {"hello":"world"} 데이터 표시
    return {"result": "Nothing.."} # 아니면 그냥 없다고 넣기

app.run(port=3000) #플라스크 서버 켜기