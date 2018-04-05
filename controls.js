var colorwheel = document.getElementById("colwheel");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var prevEL = document.getElementById("preview");
var butnum = document.getElementById("butnumber");
var butrange = document.getElementById("butrange");
var range1 = document.getElementById("range1");
var range2 = document.getElementById("range2");
var range3 = document.getElementById("range3");
var range4 = document.getElementById("range4");


colorwheel.addEventListener("change", function(){
    curcolor = colorwheel.value;
    prevEL.style.backgroundColor = curcolor;

});

butnum.addEventListener("click", function(){
    range1.type="text";
    range2.type="text";
    range3.type="text";
    range4.type="text";
});

butrange.addEventListener("click", function(){
    range1.type="range";
    range2.type="range";
    range3.type="range";
    range4.type="range";
});

range1.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        newrange = range1.value;
        hair.style.width=newrange + "%";
    }
});
range2.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        newrange = range2.value;
        eyes.style.width=newrange + "%";
    }
});
range3.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        newrange = range3.value;
        nose.style.width=newrange + "%";
    }
});
range4.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        newrange = range4.value;
        mouth.style.width=newrange + "%";
    }
});
range1.addEventListener("change", function(){
        newrange = range1.value;
        hair.style.width=newrange + "%";
});
range2.addEventListener("change", function(){
        newrange = range2.value;
        eyes.style.width=newrange + "%";
});
range3.addEventListener("change", function(){
        newrange = range3.value;
        nose.style.width=newrange + "%";
});
range4.addEventListener("change", function(){
        newrange = range4.value;
        mouth.style.width=newrange + "%";
});
