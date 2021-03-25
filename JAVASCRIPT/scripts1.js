//boton de menu
let btn_menu = document.querySelector(".btn-menu");
let list_ul = document.querySelector(".list-ul");
let menu = document.querySelector(`.menu`);
let activer = true;

btn_menu.addEventListener(`click`, () => {
    document.querySelector(`.fa-bars`).classList.toggle(`fa-times`);

    if (activer == true){
        list_ul.style.right = "0";
        list_ul.style.transition = "0.5s"
        activer = false;
    }
    else{
        activer = false;
        list_ul.style.right = "-50vw";
        list_ul.style.transition = "0.5s"
        activer = true;

    }
});


//Cambiamos clase active

let links = document.querySelectorAll(`.list-ul .list-li a`);

links.forEach( (element) => {
    
    element.addEventListener( `click`, (event) => {
        links.forEach( (item) => {
            item.classList.remove(`active`);
        });
    event.target.classList.add(`active`);
    });  

});

//Ir a seccion

let previousSection = window.pageYOffset;

window.onscroll = () => {

let actualSection = window.pageYOffset;

    if (previousSection > actualSection){
        menu.style.top = "0";
        menu.style.transition = "0.5s";
    }
    else{
        menu.style.top = "-60px";
        menu.style.transition = "0.5s";
    }
    previousSection = actualSection;

//
const gotop = document.querySelector(".gotop");
let up = window.pageYOffset;

    if (up <= 400){
        menu.style.borderBottom = "none"; /* #08d9d6 #ff2e63 */
        gotop.style.bottom = "-10vh";
    }
    else{
        menu.style.borderBottom = "4px solid #08d9d6" /* #08d9d6 #ff2e63 */
        gotop.style.bottom = "20vh";
        gotop.style.transition = "0.8s";
    }
};
const gotop = document.querySelector(".gotop");
    gotop.addEventListener(`click`, to0);
        function to0(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
const viewmore = document.querySelector(".img_header-godown"); 
    viewmore.addEventListener(`click`, godown);   
        function godown(){
            document.body.scrollTop = 600;
            document.documentElement.scrollTop = 600;
        };
