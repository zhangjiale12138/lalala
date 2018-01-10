//express是基于Node的一个web应用开发框架
// npm install express --save 安装模块
//导入express模块
const express = require('express');
const bodyParser=require('body-parser');
const expressArt=require('express-art-template');
//创建一个应用程序对象 application
const app = express();
//express.static('文件夹')：设置该文件夹下的资源为讲台资源
//静态资源：始终不会改动；当浏览器请求该文件夹下的资源时，
//服务器可以直接反馈，不需要添加额外的代码


//设置模板引擎
app.engine('art',expressArt);

//app.use() ://使用中间件（middleware） 
//中间件：插入整个 请求 响应 过程中某个位置的一段代码 
//  /:默认返回index.html(默认文件) 
app.use(express.static('www'));
//使用body-parser解析请求中url编码的数据
//extended：false,采用querystring模块解析
//          true,采用qs模块解析
app.use(bodyParser.urlencoded({extended:true}));

//接到请求 进行响应
app.get('/login', (req, res) => {
    console.log('接到/login的请求了');

    //怎么从get请求中获取数据
    console.log(req.query);
    const username = req.query.username;
    const password = req.query.password;
    console.log(username, password);
    //  res.json(req.query);
    //反馈json数据
    //  res.json({name:'lucy'});
})


app.post('/login',(req,res)=>{
    console.log('接到/login的post请求了');
    //怎么从post请求中获取数据
    //body-paser：负责请求体中数据的解析，解析之后数据会存放在req.body中
    // console.log(req.bodyParser());
      console.log(req.body);
      const username=req.body.username;
      const password=req.body.password;
      res.json({message:'哈哈哈',username,password})
})

//服务端视图渲染

app.get('/users',(req,res)=>{
  const data={
          users:[
          {name:'lucy',age:21},
          {name:'lily',age:20},
          {name:'哈哈',age:18}
          ]

  }
  //views 文件夹中存放模板
 res.render('users.art',data);//render 渲染
 
})

//监听端口
app.listen(3000, function () {

    console.log('监听3000端口');

});
