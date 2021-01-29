$(function(){
    var index=0;
    
    function active(){
        index=index%$("ul:first img").length;
        $("ul:first").find("li:eq("+index+")").stop(true,true).fadeIn(300).siblings().fadeOut(300)
        $("ul:last li").eq(index).addClass("add").siblings().removeClass("add");
        $("h3").html($("ul:first img").eq(index).attr("alt"))
        $("p").html($("ul:last img").eq(index).attr("alt"))
    }
    active()
    var s;
    function Sport(){
        console.log($("ul:first img").eq(0))
         s=setInterval(function(){
            index++; 
           active()
       },3000)    
    }
    Sport()
    $("ul:last li").hover(function(){
       
        index=$(this).index()
        active()
        $(this).addClass("add")
         clearInterval(s)
    },function(){
        index=$(this).index()
        active()
        $(this).removeClass("add")
        Sport()
    })
    $("span:first").click(function(){
        index--;
        active();
    }).next().click(function(){
        index++;
        active()
    })
    
})