$(function(){
    var index=0;
    var  s;
    var current;
    //1.同时切换小图和大图图片,并且切换文字
    //2. 自动轮播
    //3.左右按钮切换
    //4.鼠标滑动到小图暂停 并切换到当前小图索引的大图
    //5.鼠标划出继续轮播
    function active(){
        index=index%$("ul:first li").length;
        // 实现大图轮播 用淡入淡出
        $("ul:first li").eq(index).stop(true,true).fadeIn(300).siblings().fadeOut(300);
        //小图轮播效果
        $("ul:last li").eq(index).addClass("one").siblings().removeClass("one");
        //使用attr获得img里面的atl属性存的data
        $("h3").html($("ul:first img").eq(index).attr("alt"));
        $("p").html($("ul:last img").eq(index).attr("alt"));
        // console.log(index);
    } 
   //点击做箭头
   $(".prev").on('click',function(){
       --index;
       active();
       current=index;
   })
   //点击右箭头
   $(".next").on('click',function(){
       ++index;
       active();
       current=index;
   })
    setInterval(function(){
         active();
        index++;
        if(current!=undefined){
            index=current;
            current=undefined;
        }
    },1000)
})