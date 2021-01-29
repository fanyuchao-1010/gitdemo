$(()=>{
    var index=0;
    var current;
    var s;
    let active=()=>{
        index=index%($("ul:first li").length);
        $("ul:first li").eq(index).stop(true,true).fadeIn(300).siblings().fadeOut(300);
        
        $("ul:last li").eq(index).addClass("add").removeClass("one").siblings().removeClass("add");
        $("h3").html($("ul:first img").eq(index).attr("alt"))
        $("p").html($("ul:last img").eq(index).attr("alt"))
        console.log(index)
     }
    active();
     //让大图片开始动
    let animation=()=>{
        s=setInterval(()=>{
            active();
            ++index;
            // 为了保证同步 
            if(current!=undefined){
                index=current;
                current=undefined;
            }
        },1000)
    }
    animation()
  //左箭头开始动
       $("span:first").on('click',()=>{
           --index;//  1    0
           active();//0
           current=index; //0
       })
    //左箭头开始动
//     //右箭头

        $("span:last").on('click',()=>{
            ++index;
            active();
            current=index;
        })
    // 右箭头
    //划入小图片进行切换
        // $("ul:last li").hover(()=>{
        //     index=$(this).index();
        //     active()
        //     console.log(index)
        //     // current=index;
        //     $(this).addClass("add")
            
        // },()=>{ 
        //     index=$(this).index();
        //     active()
            
        // })
        //hover 合并写
        $("ul:last li").hover(function(){
            index=$(this).index()//获得当前索引 赋值给index
            active();
            // $(this).addClass("add");
            $(this).siblings().removeClass("one");
             clearInterval(s)
        },function(){
            index=$(this).index()
            active()
            // $(this).removeClass("add")
            animation()
        })
        
    //鼠标划入小图片进行切换
    
})