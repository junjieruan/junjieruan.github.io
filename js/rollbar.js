/**
 * Created by a on 2016/7/3.
 */
$(document).ready(function(){
    var timer=null;
    $("#rollbar").on("click", function () {
        timer=setInterval(function(){
            var backTop=$("body").scrollTop();
            var speedTop=backTop/5;
            document.body.scrollTop=backTop-speedTop;
            if(backTop==0){
                clearInterval(timer);
            }
        },30)
        //alert(backTop);
    })
})