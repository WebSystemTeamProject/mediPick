/*var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

var history = require('connect-history-api-fallback');
var express = require('express');
var path = require('path');
var bodyParser =  require('body-parser');
var app = express();
var cors = require('cors');
var router = require('./routes/index');
var strategy = require('passport-local');
var passport = require('passport')
var session = require('express-session');
var flash = require('connect-flash'); // error관리를 쉽게함

//------------------------------------------//

app.listen(3000,function(){
  console.log("start!")
});
app.use(history());

app.use(cors())
app.all('/*',function (req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

//json 형식으로 오는 data들을 처리.
app.use(bodyParser.json())

// encoded된 data들을 처리.
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
  secret : 'keyboard cat',
  resave : false,
  saveUninitialized : true,
  cookie:{ secure : false, maxAge: new Date(Date.now() + 3600000) }
}))

app.use(passport.initialize()); // passport 초기화
app.use(passport.session());
app.use(flash()); // 메시지전달
app.set('view engine','ejs');

app.use(router); // path에 필요한것들을 /routes/index에서 알아서 가져옴










// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

*/

//----------------------------------------
