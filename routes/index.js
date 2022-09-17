const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { popup: req.cookies.popup });
  // post 방식으로 생성된 쿠키(이름이 popup인)객체를 담아서 index.ejs로 전달
});

// post 방식으로 쿠키를 만듦
/*  cookie's name is 'popup', 
cookie have a data , data's name is 'hide'
{
  expire: 만료일
  httpOnly : 브라우저에서 접근할 때 http 통신을 할 때만(request, response) 
  쿠키를 읽도록 하는 옵션-보안적인 의미
}
*/

router.post('/cookie', (req, res) => {
  res.cookie('popup', 'hide', {
    expires: new Date(Date.now() + 1000 * 60),
    httpOnly: true,
  });
  res.send('make a cookie');
});

module.exports = router;
