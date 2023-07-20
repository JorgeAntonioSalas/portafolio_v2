let menuVisible = false;
// Funcion para ocultar o mostrar menu
function showOrHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function selection(){
    //ocultar el menu, una vez seleccionada la opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//Funcion que aplica las animaciones a las habilidades
function skillsEffect(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills>=300){
        let abilitys = document.getElementsByClassName("progress");
        abilitys[0].classList.add("javascript");
        abilitys[1].classList.add("htmlcss");
        abilitys[2].classList.add("react");
        abilitys[3].classList.add("nodejs");
        abilitys[4].classList.add("sql");
        abilitys[5].classList.add("comunication");
        abilitys[6].classList.add("teamwork");
        abilitys[7].classList.add("creative");
        abilitys[8].classList.add("dedicated");
        abilitys[9].classList.add("projectmanage");
    }
}

// detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
    skillsEffect();
}