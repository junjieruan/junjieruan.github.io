/**
 * Created by a on 2016/6/10.
 */

window.onload=function() {
    document.getElementById("register").addEventListener("click", function () {
        alert("登陆成功");
    })
};

function startTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("timetxt").innerHTML = h+":"+m+":"+s;
    t = setTimeout(function () {
        startTime();
    },500)
}

function checkTime(i){
    if(i<10){
        i = "0"+i;
    }
    return i;
}


function loginin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username =="admin" && password =="admin"){
        history.go(-1);
    }else{
        alert("输入错误");
        history.go(0);
    }

}


$(document).ready(function(){
    $(".MyTab #tabfirst li").each(function(index){
        var liNode=$(this);
            $(this).mouseover(function(){
                timeoutid=setTimeout(function(){
                $("div.content").removeClass("content");
                $("li.tabin").removeClass("tabin");
                liNode.addClass("tabin");
                $(".MyTab>div").eq(index).addClass("content")
        },300)
        }).mouseout(function(){
                clearTimeout(timeoutid);
        })
    })
})

$(document).ready(function(){
    var i=0;
    var clone=$(".banner .img li").first().clone();
    $(".banner .img").append(clone);
    var size=$(".banner .img li").length;
    $(".banner .num li").first().addClass("on");
    $(".btn_l").click(function(){
        i++;
        if(i==size){
            $(".banner .img").css({left:0});
            i=1;
        }
        $(".banner .img").first().animate({left:-i*300},500);
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    })
    $(".btn_r").click(function(){
        i--;
        if(i==-1){
            $(".banner .img").css({left:-(size-1)*300});
            i=size-2;
        }
        $(".banner .img").first().animate({left:-i*300},500);
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    })
})

$(document).ready(function(){
    var wH=$(window).height(),            //当前窗口高度
         box=$(".step-box"),
         photo=$(".photo"),
         logo=$(".l-logo"),
         image=$(".icon"),
         max_step=$(".js-step").length+ 1,
        curstep= 1,
        isscroll=false;

    var screenH=wH-$("header").height()-$("nav").height();     //计算屏幕高度
    $(".js-step,.step-box").height(screenH);

    $(".step-box").mousewheel(function(event,delta){
        if(delta==-1){
            scrollDown();
        }
        if(delta==1){
            scrollUp();
        }
    })

    var list=$(".txt-list");
    $(".clear-fix li").each(function(index){
        $(this).mouseover(function(){
            $("div.contentfirst").removeClass("contentfirst");
            $(".txt-list div").eq(index).addClass("contentfirst");
        })
    })

function scrollDown(){
       if(curstep<max_step){                                 //计算当前滑动步骤
           curstep++;
           var toTop=-(curstep-1)*screenH;                  //box底端距页面顶端高度
           if(curstep==2){                                 //第一页按scrollDown
               $(".photo").addClass("leanup");
               $(".l-logo").find("i").addClass("leanup").end().animate({top:"-100%",opacity:"0"},1000);    //end() 为添加leanup后返回find状态
           setTimeout(function(){
               $('.photo').removeClass('leanup').hide();               //用于scrollUp时显示
               $('.l-logo').removeClass('leanup').hide();
           }, 1000)
           var txt1=$(".txt-1");
           txt1.animate({right:500},1000);
           isscroll=true;
           return false;
       }
           if(curstep>2 && curstep<=max_step){                //第一个页面第二次按scrollDown
               toTop+=screenH;
               box.animate({top:toTop},750);                  //往上移一个screenH
           }
       }
}

    function scrollUp(){
        if(curstep>1){                             //第一页按scrollUp
            curstep--;
            var toTop=-(curstep-1)*screenH;
            if(curstep==1){
                $(".txt-1").animate({right:200},1000);
                photo.show("slow");
                logo.show().animate({top:"19%",opacity:"1"},700);
            }
        }
        if(curstep==3){                          //第二页按scrollUp
            toTop+=screenH;
            curstep=curstep-2;                   //跳到第一步
        }
        box.animate({top:toTop},750);


    }
})
