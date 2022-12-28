
"use strict";
// let dropDown = document.getElementsByClassName("dropdown-btn");
// let i;
// for (i = 0; i < dropDown.length; i++) {
//     dropDown[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         let dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === "block") {
//             dropdownContent.style.display = "none";
//         } else {
//             dropdownContent.style.display = "block";
//         }
//     });
// }

// // let dropDown = document.getElementsByClassName("sub-item-wraper");
// // dropDown.style.display = "block";

// function dropDown() {
//     // document.getElementsByClassName("dropdown-btn").classList.toggle("show");
//     let btn = document.getElementsByClassName('sub-item-wraper');
//     btn.style['display'] = 'block';

//  }


// function for open slide down in sidebar
function dropDown() {
    let btn = document.querySelector('.sub-item-wraper');
    btn.style.display = 'block';
 }
function showDetail(){
    console.log("i am connected")
    let bt = document.getElementById("more-ticket-info");
    bt.style.display = 'block';
}
function showDetail_1(){
    console.log("i am connected")
    let bt = document.getElementById("more-ticket-info1");
    bt.style.display = 'block';
}
function showDetail_2(){
    console.log("i am connected")
    let bt = document.getElementById("more-ticket-info2");
    bt.style.display = 'block';
}
// const info = document.querySelectorAll('.mti');
// info.forEach(ele =>{
//     ele.addEventListener('click', function handleClick(event){
//         console.log('show more information' ,event);
//         ele.setAttribute('style', 'display:block;')
//     })
// })

const exit = document.getElementById('exit');
exit.addEventListener('click',function (){
    window.alert("آیا می خواهید از حساب خارج شوید ؟")
})
 // redirect to change password file
 function redirect_to_cp(){
    console.error("this is not linking")
    window.location.href = "../source/changePass.html";
 }

 // for checking password validation
 function checkpassword(){
    let pass1 = document.password.password.value;
   // let pass2 = document.
 }
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("این فیلد نمی تواند خالی باشد");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

