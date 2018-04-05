/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
var x = 1;
var ndiv = document.createElement("div");
var nhair = document.createElement("img");
var neyes = document.createElement("img");
var nnose = document.createElement("img");
var nmouth = document.createElement("img");
var butplus = document.getElementById("butplus");
var disp = document.getElementById("display");
var prev = document.getElementById("preview");
var butrandom = document.getElementById("butrandom");
var prevEL = document.getElementById("preview");
var butauto = document.getElementById("butauto");

hair.addEventListener("click", function(){
    x = x + 1
    hair.src = "img/hair"+x+".png";
    if (x >= 4){
        x = 1
        hair.src = "img/hair"+x+".png";
    }
});

eyes.addEventListener("click", function(){
    x = x + 1
    eyes.src = "img/eyes"+x+".png";
    if (x >= 4){
        x = 1
        eyes.src = "img/eyes"+x+".png";
    }
});
nose.addEventListener("click", function(){
    x = x + 1
    nose.src = "img/nose"+x+".png";
    if (x >= 4){
        x = 1
        nose.src = "img/nose"+x+".png";
    }
});
mouth.addEventListener("click", function(){
    x = x + 1
    mouth.src = "img/mouth"+x+".png";
    if (x >= 4){
        x = 1
        mouth.src = "img/mouth"+x+".png";
    }
});

function createFace(){
    clone = prev.cloneNode(true);
    ndiv.style.width = "100px";
    ndiv.style.height = "100px";
    ndiv.appendChild(clone)
    disp.appendChild(ndiv);
}

butplus.addEventListener("click", function(){
   createFace()
});

function randomFace(){
    mathran = Math.ceil(Math.random()*3)
    mouth.src = "img/mouth"+mathran+".png";
    mathran = Math.ceil(Math.random()*3)
    nose.src = "img/nose"+mathran+".png";
    mathran = Math.ceil(Math.random()*3)
    eyes.src = "img/eyes"+mathran+".png";
    mathran = Math.ceil(Math.random()*3)
    hair.src = "img/hair"+mathran+".png";
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    prev.style.backgroundColor = bgColor;    
}

butrandom.addEventListener("click", function(){
    randomFace()
});
var starting = null;
butauto.addEventListener("click", function(){
   starting = setInterval(function(){
       randomFace();
       createFace();
   },500);
});

document.getElementById("butstop").addEventListener("click", function(){
    clearInterval(starting);
});