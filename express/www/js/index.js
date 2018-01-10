$('#exampleInputName').on('input', function () {
    const regex = /^[\u4e00-\u9fa5\w!@#￥%&]{2,12}$/;
    if (regex.test($(this).val()) == false) {
        $('.lab').html('请输入正确的字符');
    } else {
        $('.lab').html('√');
        var value = $(this).val();
        // console.log(value);
        $.get('/name?value=' + value + '', function (res) {
            //  console.log(res);
            if (res.success == 0) {
                $('.lab2').html('该用户已存在');

            } else {
                $('.lab2').html('√');
            }


        })


    }




})
       var lucy;
$('#exampleInputPassword1').on('input', function () {
    const regex = /^[\w!@#￥%&]{6,12}$/;
    if (regex.test($(this).val()) == false) {
        $('.lab3').html('请匹配正确的字符');
    } else {
        $('.lab3').html('√');
         lucy=$(this).val();


    }


})
$('#exampleInputPassword2').on('input', function () {
  if($(this).val()!=lucy){
    $('.lab4').html('两次输入密码不一致，请重新输入');
    $('.btn-default').addClass('disabled');
   
  }
  else{
    $('.btn-default').removeClass('disabled');
    $('.lab4').html('√');

  }


})

$('form').submit(function(event){
  
event.preventDefault();
var value=$(this).serialize();
// console.log(value);
$.post('/submit',value,function(res){
    console.log(res);
     if(res.success==1){
       console.log('注册成功');
       alert(res.message);
       location.href='denglu.html';
      
    }
    if(res.success==0){
     
     alert('注册失败，请重试！');

    }
})
  


})

