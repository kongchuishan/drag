/**
 * Created by Administrator on 2015/7/8.
 */
function drag(obj){
    var left,top;
    obj.onmousedown=function(ev){
        var oEvent=ev||event;
        var oDisX=oEvent.clientX-getPos(obj).left;
        var oDisY=oEvent.clientY-getPos(obj).top;
        document.onmousemove=function(ev){
            var oEvent=ev||event;
            left=oEvent.clientX-oDisX;
            top=oEvent.clientY-oDisY;
            obj.style.left=left+'px';
            obj.style.top=top+'px';
        };
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
            obj.releaseCapture&&obj.releaseCapture();
        };
        obj.setCapture&&obj.setCapture();
        return false;
    };
}
function getPos(obj){
    var left=0;
    var top=0;
    while(obj){
        left+=obj.offsetLeft;
        top+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {"left":left,"top":top};
}
window.onload=function(){
    var oDiv=document.getElementById('div1');
    drag(oDiv);
};
