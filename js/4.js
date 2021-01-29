$(function(){
    // 1.大图自动轮播
    // 2.小图跟着轮播
    // 3.对应的文字跟着切换
    // 4.点击箭头切换图片
    // 5.鼠标滑到小图 暂停轮播 大图小图都切换到当前的图片 
    var index=0;
    var current;//控制setinteval 调用的时候的导致index的差
    var s;//控制setinterval 的Id
    function active(){
        index=index%$("ul:last li").length;
        //index 初始值是0  setinteval调用 index++;index 的范围一直是0-7
        // 大图轮播
       $("ul:first li").eq(index).stop(true,true).fadeIn(300).siblings().fadeOut(300);
    //    小图换边框
       $("ul:last li").eq(index).addClass("one").siblings().removeClass("one");
// h3 文字使用attr方法获得img里的alt属性值
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
    // 点击箭头 切换图片
    $("span:first").on("click",function(){
        --index;
        active();
        current=index;
    })
    $("span:last").on("click",function(){
        ++index;
        active();
        current=index;
    })
    // 鼠标滑到小图 事件
    $("ul:last li").hover(function(){
        index=$(this).index();
        active();
       clearInterval(s);
    },function(){
        index=$(this).index();
        active();
        animation();
    })
})