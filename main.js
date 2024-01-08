window.onresize = updateSize;
window.onload = updateSize;

function updateSize() {
    mywidth = window.innerWidth;
    
    document.getElementById("size").innerHTML
    = "width : " + mywidth + "px";
}