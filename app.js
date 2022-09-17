// @ts-check

/* 1. 외부 모듈, 내부 모듈 사용 선언 */
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/* 2. express 연결 */
const app = express(); //express를 사용해서 app실행

/* 3. 모듈 사용*/
// 3-1) ejs
app.set('view engine', 'ejs');

// 3-2) body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 3-3) cookie-parser
app.use(cookieParser());

// 3-4) session

// 3-5) passport

// 3-6) passport Strategy

/* 4. 폴더 구조 말해주기? */
app.set('views', 'views'); //views폴더로는 views라는 폴더를 쓸거야(ejs파일이 존재할 폴더)
app.use(express.static('public')); // static 폴더로는 public이라는 이름의 폴더를 쓸거야ㅑ(브라우저가 접근 가능한 폴더);

/* 5. 라우팅 모듈 사용 */
const router = require('./routes');
const loginRouter = require('./routes/login');

const boardRouter = require('./routes/board');
const registerRouter = require('./routes/register');
/* 5-2 라우팅*/
app.use('/', router);
app.use('/board', boardRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

/* 1 + 포트열기 */
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
