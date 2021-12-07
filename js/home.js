function onMouseOverAct(sub) {
    document.getElementById(sub).style.visibility = 'visible';

    if (sub ==="sand_Container"){
        document.getElementById("topBread").style.transform = "rotate(-8deg)";
        document.getElementById("topBread").style.top = "-40px";
    } else if (sub === "map_Container") {
        document.getElementById("orange").style.left = "-80px"
    } else if (sub === "coll_Container") {
        document.getElementById("red").src = "img/sandwich_img/red2.svg";
        document.getElementById("red").style.width = "590px";
    } else if (sub === "shape_Container") {
        document.getElementById("yellowishGreen").src = "img/sandwich_img/yellowishGreen2.svg";
        document.getElementById("yellowishGreen").style.width = "640px";
        document.getElementById("yellowishGreen").style.left = "-4px";
    } else if (sub === "vege_Container") {
        document.getElementById("yellow").style.left = "-180px"
    } else if (sub === "self_Container") {
        document.getElementById("green").src = "img/sandwich_img/green2.svg";
        document.getElementById("green").style.width = "740px";
        document.getElementById("green").style.padding = "7px"
    } else if (sub === "group_Container") {
        document.getElementById("pink").style.left = "-280px"
    } else if (sub === "exhi_Container") {
        document.getElementById("bottomBread").src = "img/sandwich_img/bottomBread2.svg";
    }

}

function onMouseOutAct(sub) {
    document.getElementById(sub).style.visibility = 'hidden';

    if (sub ==="sand_Container"){
        document.getElementById("topBread").style.transform = "rotate(0deg)";
        document.getElementById("topBread").style.top = "0px";

    } else if (sub === "map_Container") {
        document.getElementById("orange").style.left = "0"
        
    } else if (sub === "coll_Container") {
        document.getElementById("red").src = "img/sandwich_img/red.svg";
        document.getElementById("red").style.width = "427px";
    } else if (sub === "shape_Container") {
        document.getElementById("yellowishGreen").src = "img/sandwich_img/yellowishGreen.svg";
        document.getElementById("yellowishGreen").style.width = "526px";
        document.getElementById("yellowishGreen").style.left = "4px";
    } else if (sub === "vege_Container") {
        document.getElementById("yellow").style.left = "0px"
    } else if (sub === "self_Container") {
        document.getElementById("green").src = "img/sandwich_img/green.svg";
        document.getElementById("green").style.width = "484px";
        document.getElementById("green").style.padding = "0px"
    } else if (sub === "group_Container") {
        document.getElementById("pink").style.left = "0px"
    } else if (sub === "exhi_Container") {
        document.getElementById("bottomBread").src = "img/sandwich_img/bottomBread.svg";
    }
}


