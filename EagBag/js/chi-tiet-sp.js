window.onscroll = function () { myFunction(); scrollFunction() };

var header = document.getElementById("sticky_top");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

mybutton = document.getElementById("back-to-top");
function scrollFunction() {
    if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
// row1


function ins(id){
    var boxQty = document.getElementById(id);
    boxQty.value++;
    if(boxQty.value!==1){
    boxQty.style.color="black";
    }
}
function deins(id){
    var boxQty = document.getElementById(id);
    if(boxQty.value==1){
        return false;
    }
    boxQty.value--;
    if(boxQty.value==1){
        boxQty.style.color="rgba(51, 51, 51, 0.733)";
    }
}

// row2 
var ulli = document.getElementsByClassName("ulli");
var divHint = document.getElementsByClassName("divHint");
var arrDiv = Array.prototype.slice.call(ulli);
for (var i = 0; i < divHint.length; i++) {
    divHint[i].classList.add("disNone");
}
ulli[0].classList.add("isActived");
divHint[0].classList.add("isActived");
for (var i = 0; i < arrDiv.length; i++) {
    ulli[i].addEventListener('click', function () {
        console.log(arrDiv.indexOf(this));
        for (var j = 0; j < divHint.length; j++) {
            divHint[j].classList.remove("isActived");
            ulli[j].classList.remove("isActived");
        }
        divHint[arrDiv.indexOf(this)].classList.add("isActived");
        ulli[arrDiv.indexOf(this)].classList.add("isActived");
    })
}

var imgMain = document.getElementById("img-main");
var imgItem = document.getElementsByClassName("img-owl");

imgItem[0].style.border = "2px solid #ccc";
for(var i = 0; i< imgItem.length; i++){
    imgItem[i].addEventListener('click',function(){
        imgMain.src = this.getAttribute('src');
        this.style.border = "2px solid #ccc";
        for(var x of imgItem){
            if(x!==this){
                x.style.border = "1px #ccc solid";
            }
        }
    })
}
                                    