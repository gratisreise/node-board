// src/server.js (수정 제안)
require('dotenv').config(); // 환경 변수 로드
const connectDB = require('./config/database'); // DB 연결 함수 가져오기
const app = require('./app');
const PORT = process.env.PORT || 5000;

connectDB(); // DB 연결

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});