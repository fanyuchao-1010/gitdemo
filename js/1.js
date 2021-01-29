$(function(){
    var index=0;
    var currnt;
    var s;
    var active=()=>{
        //控制index 从0-7
        index=index%($("ul:first li").length);
        // 让大图轮播
        $("ul:first li").eq(index).stop(true,true).fadeIn(300).siblings().fadeOut(300);
        $("ul:last li").eq(index).addClass("one").siblings().removeClass("one");
        $("h3").html($("ul:first img").eq(index).attr("alt"));//attr 一个参数获得alt里的值
        $("p").html($("ul:last img").eq(index).attr("alt"));
    }
    active();
   let animation=()=>{
       s= setInterval(function(){
        active();
        index++;
     if(currnt!=undefined){
         index=currnt;
         currnt=undefined;
     }
    },1000)
   }
   animation();
   //左箭头开始
   $("span:first").on('click',function(){
       --index;
       active();
       currnt=index;
   })
   //右箭头
   $("span:last").on('click',function(){
       ++index;
       active();
       currnt=index;
   });
   $("ul:last li").hover(function(){
    //获取当前的索引
    index=$(this).index()
    active()
    //当鼠标划入不管滑倒哪一个图片，我就移除one类
    $(this).siblings().removeClass("one")
     clearInterval(s)
},function(){
    index=$(this).index()
    active()
    animation()
})
})