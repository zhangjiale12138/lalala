$('form').submit(function(event){
  
    event.preventDefault();
    var value=$(this).serialize();
    console.log(value);
    $.get('/denglu?'+value+'',function(res){

         
    console.log(res);
        console.log(res);
         if(res.success==1){
           console.log('登录成功');
           alert(res.message);
           location.href='shouye.html';
          
        }
        if(res.success==0){
         
         alert(res.message);
    
        }
    })
      
})