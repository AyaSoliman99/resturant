
$(function () {
    let menuIcon = $(".menu-icon");
    menuIcon.on("click", function () {
        // console.log(menuIcon);
        $(".nav-menu").slideToggle(300).animate();
    })
});

//===============changing active class on navbar links when scroll 
let lis=document.querySelectorAll(".nav-menu li a");
let sections = Array.from(document.querySelectorAll(".section"));


window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach((section)=>{
        let sectionTop=section.offsetTop;
        if(scrollY >= sectionTop -200){
            current=section.getAttribute("id");
        }
    })
    lis.forEach((li)=>{
        li.classList.remove("active");
        if(li.getAttribute("href")==`#${current}`){
            li.classList.add("active");
        }
    });
});


let inputs = Array.from(document.querySelectorAll(".f-c"));

let form = document.querySelector(".form");

let errorMessage = document.querySelector(".error-message");


form.addEventListener("submit", function (e) {

    if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {

        e.preventDefault();

        // inputs[2].value += "you should type something to send it !";
        // inputs[2].addEventListener("focus",function () {
        //     this.value = "";
        // })
        errorMessage.style.display = "block";

    } 
   
});

