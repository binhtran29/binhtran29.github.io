
var x = document.querySelector(".filter-title");
x.addEventListener('click', function () {
    document.querySelector('.filter-list').classList.toggle('disable');
});

// filter-list menu2
var filterList = document.querySelector(".filter-list");
var itemList = document.getElementsByClassName("filer-h4");
var itemHint = document.getElementsByClassName("item-hint");
var arr = Array.prototype.slice.call(itemList);
for (var i = 0; i < arr.length; i++) {
    itemList[i].addEventListener('click', function() {
        console.log(arr.indexOf(this));
        itemHint[arr.indexOf(this)].classList.toggle('disable');
  });
}


var y = document.querySelector(".y1");
y.addEventListener('click', function () {
    console.log("ádfasdfafaf");
    document.querySelector('.y2').classList.toggle('actived');
});
var z = document.querySelector(".z1");
z.addEventListener('click', function () {
    console.log("ádfasdfafaf");
    document.querySelector('.z2').classList.toggle('actived');
});

// text-color 
var textColor = document.querySelector(".menu-color");
var itemColor = textColor.getElementsByClassName("text-color");
for (var i = 0; i < itemColor.length; i++) {
    itemColor[i].addEventListener("click", function() {
        this.classList.toggle("color-checked");
  });
}

function RtoL(){
    document.getElementById("collection_sidebar_trigger").classList.toggle("show-rtl2");
    document.getElementsByClassName("col-filter")[0].classList.toggle("show-rtl1");
}