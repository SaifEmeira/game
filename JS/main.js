window.addEventListener("scroll",function () {
    
    let navBar = document.querySelector(".navbar");
    navBar.classList.toggle("sticky",window.scrollY >0);
    
});


import { Games } from "./games.js";
new Games();


