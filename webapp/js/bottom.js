    //底部跳转
    $(function(){
      $('#index2').click(function(){
          window.location.href='index.html'; 
      })
       $('#search2').click(function(){
          window.location.href='search.html'
      })
       $('#find2').click(function(){
          window.location.href='find.html'
      })
       $('#car2').click(function(){
          window.location.href='car.html'
      })
       $('#person2').click(function(){
          window.location.href='person.html'
      })
      //换字体颜色
      $('.footer div').click(function(){
          $(this).css('color','#fc611e').siblings().css('color','black');
      })



    })