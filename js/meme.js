/**
 * Created by a on 2016/7/11.
 */
$(document).ready(function(){
    var i=0;
    var wH=$(".fontpage .page1").height();
    $(".fonttab .tab1").click(function(){
        $(".container .fontpage").css({top:0},3000);
    })

    $(".fonttab .tab2").click(function(){
        i=1;
        $(".container .fontpage").css({top:-i*820},3000);
    })
    $(".fonttab .tab3").click(function(){
        i=2;
        $(".container .fontpage").css({top:-i*820},3000);
    })
    $(".fonttab .tab4").click(function(){
        i=3;
        $(".container .fontpage").css({top:-i*820},3000);
    })
    $(".fonttab .tab5").click(function(){
        i=4;
        $(".container .fontpage").css({top:-i*820},3000);
    })
})