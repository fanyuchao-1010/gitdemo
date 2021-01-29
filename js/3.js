$(function(){
    var index=0;
    var current;
    var s;//获得setInterval ID
    function active(){
        // index的值一直在0-7
        index=index%$("ul:last li").length;
        //实现大图的焦点轮播
        $("ul:first li").eq(index).stop(true,true).fadeIn(300).siblings().fadeOut(300);
        //小图轮播 对应索引的图片边框
        $("ul:last li").eq(index).addClass("one").siblings().removeClass("one");
        //对应的属性里的值显示在 h3 和p里
        $("h3").html($("ul:first img").eq(index).attr("alt"));
        $("p").html($("ul:last img").eq(index).attr("alt"));
    }
    active();
    function animation(){
        s=setInterval(function(){
            active();
            index++;
            if(current!=undefined){
                index=current;
                current=undefined;
            }
        },1000);
    }
    animation();
    // 点击左箭头 index--
    $("span:first").on("click",function(){
        --index;
        active();
        current=index;
    });
     // 点击右箭头 index++
     $("span:last").on("click",function(){
        ++index;
        active();
        current=index;
    });

    // 鼠标滑到对应小图 暂停轮播 大图切换到相应索引的图片
  $("ul:last li").hover(function(){
      index=$(this).index();
      active();
    //   去掉小图其他的红边框
      $(this).siblings().removeClass("one");
    clearInterval(s);
  },function(){
      index=$(this).index();
      active();
      animation();
  })
})