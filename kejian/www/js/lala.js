console.log('js文件');

//发送get 请求
// $.get('/login?username=lucy&password=123456',function(res){

// console.log(res);

// })
//发送post请求 
$.post('/login?','username=lucy&password=123456',function(res){
    console.log(res); 

  
}) 
$.get('/users',function(res){


    $('.container').html(res);
})