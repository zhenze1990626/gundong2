$(function(){
      $.ajax({
             type: "POST",
             url: "localhost/webapp/MobilePhoneAction.do?method=getGoodsInfo4App",
             dataType: "json",
             success: function(data){
                        console.log(data);
                      }
         });
     //跳转
        $('.car').on('click',function(){
            window.location.href='http://www.baidu.com';
        })

    //透明度
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop(); 
            var opacity;
            /* 透明度初始为1，随着滚动逐渐为0 */
            opcaity = (1 - (scrollTop /80)<0) ? 0 : 1 - (scrollTop / 80);
            if(scrollTop>=40){
                $('.white').attr('src','img/white2.png');
                $('.message').attr('src','img/message2.png')

            }else{
                $('.white').attr('src','img/white.png');
                $('.message').attr('src','img/message.png')
            }
            /* 透明度初始为0，随着滚动逐渐为1 */
            opcaity = (scrollTop / 80 > 1) ? 1 : scrollTop / 80;
            $('.search').css('background','rgba(236,236,236,'+opcaity+')');
        
        });


})
 