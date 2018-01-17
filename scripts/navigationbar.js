var menuBtn = document.getElementById("menu-button");
        menuBtn.addEventListener("click", toggleMenu);
        
var menuContainer = document.getElementsByTagName("nav")[0];
        
function toggleMenu(){
    menuContainer.classList.toggle("showed");
    menuBtn.classList.toggle("visible");
    }
        