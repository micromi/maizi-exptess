#课程大纲
1: 什么是ExpressJS
2: 第一个ExpressJS程序
3: 理解EpressJS 路由
4: Server Request
5: Server Response
6: 模板 handlebar
7: SASS Preprocessor
8: Form, Cookies, and Sessions
9: 用ExpessJS 实现To do list


API:
1. app.use([path], function)
path 路径(默认参数 "/")
function  中间件
    1. == function(request, responst, next)
    2. 无数多个

2. app.VERB(path, [callback...], callback)
  VERB: *get, *post, put , delete
  path: String or Regexp
  callback: *next() * next('router')
3. app.param([name], callback)

  Request:
  1. req.params
  2. req.query
  3. req.body
  4. req.files
  5. req.param()
     param - body - query
  6. req.cookie
  7. req.header === req.get

  Response:
  1. res.render
  2. res.locals
  3. res.set
  4. res.status([body])
  5. res.send([body])
  6. res.json([status|body], [body])
  7. res.redirect 

  模板
  默认支持ejs jade
  1. app.set('view engine', xxx);
  2. app.engine('', xxx);
  3. app.set('views', path);
  4. response.render();

  css
  1. stylus  http://stylus-lang.com/
  2. SASS    http://sass-lang.com/
  3. Less    http://lesscss.org/features/
