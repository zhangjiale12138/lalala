const express = require('express');
const bodyParser = require('body-parser');
const expressArt=require('express-art-template');
const fs = require('fs');
const app = express();
app.engine('art',expressArt);
app.use(express.static('www'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/name', (req, res) => {
    console.log('接到/name的请求了');


    console.log(req.query);
    const username = req.query.value;
    console.log(username);
    fs.readFile('user.json', (err, data) => {
        const arr = JSON.parse(data);
        var count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (username == arr[i].username) {
                count++;
            }
        }
        if (count != 0) {
            res.json({ success: 0 });
        } else {
            res.json({ success: 1 });
        }


    })

})
app.post('/submit', (req, res) => {
    console.log('接到/submit的post请求了');

    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    fs.readFile('user.json', (err, data) => {
        const arr2 = JSON.parse(data);

        (arr2).push(req.body);
        fs.writeFile('user.json', JSON.stringify(arr2), err => {

            if (err) {
                res.json({ success: 0, message: '系统错误，请再次尝试' });

            } else {
                res.json({ success: 1, message: '注册成功' });

            }

        })
    })
})
app.get('/denglu', (req, res) => {
    console.log(req.query);
    const name = req.query.username;
    const password = req.query.password;
    fs.readFile('user.json', (err, data) => {
        var arr3 = JSON.parse(data);
        var num=0;
        for (let k = 0; k < arr3.length; k++) {
               num++;
            if (name == arr3[k].username && (password == arr3[k].password)) {

                res.json({ success: 1, message: '登录成功' });
                 return;
            } 
        }
           if(num==arr3.length){
            
           res.json({ success: 0, message: '登录失败' });
           
           }
        if (err) {

            res.json({ success: 0, message: '登录失败,系统错误' });
        }


    })

})
app.get('/ask',(req,res)=>{

fs.readFile('user.json',(err,data)=>{

  var arr4=JSON.parse(data);
  const data2={users:arr4};
  res.render('users.art',data2);



})



})




app.listen(3000, function () {

    console.log('监听3000端口')


})