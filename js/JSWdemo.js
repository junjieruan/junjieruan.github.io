/**
 * Created by a on 2016/6/26.
 */
window.onload=function(){
    imgLocation("container","box");
    var imgData={"data":[{"src":"2.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"7.jpg"},{"src":"9.jpg"}]};
    window.onscroll=function(){
        if(checkFlag()){
            var cparent=document.getElementById("container");
            for(var i=0;i<imgData.data.length;i++){
                var ccontent=document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boximg=document.createElement("div");
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img=document.createElement("img");
                img.src="jpg/"+imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container","box");
        }
    }
}

function checkFlag(){
    var cparent=document.getElementById("container");
    var ccontent=getChildElement(cparent,"box");
    var lastcontentHeight=ccontent[ccontent.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var pageheight=document.documentElement.clientHeight||document.body.clientHeight;
    if(lastcontentHeight<scrollTop+pageheight){
        return true;
    }
}

function imgLocation(parent,content){
    var cparent=document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);

    var imgWidth=ccontent[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText="width:"+imgWidth*cols+"px;margin:0 auto;";

    var BoxheightArr=[];
    for(var i=0;i<ccontent.length;i++){
        if(i<cols){
            BoxheightArr[i]=ccontent[i].offsetHeight;
        }else{
            var minheight=Math.min.apply(null,BoxheightArr);
            var minindex=minheightindex(BoxheightArr,minheight);
            ccontent[i].style.position="absolute";
            ccontent[i].style.top=minheight+"px";
            ccontent[i].style.left=ccontent[minindex].offsetLeft+"px";
            BoxheightArr[minindex]=BoxheightArr[minindex]+ccontent[i].offsetHeight;
        }
    }

}

function minheightindex(BoxheightArr,minheight){
    for(var i in BoxheightArr){
        if(BoxheightArr[i]==minheight){
            return i;
        }
    }
}

function getChildElement(parent,content){
    var contentArr=[];
    var allcontent=document.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
