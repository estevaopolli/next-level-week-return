function onScroll(){
    if(scrollY > 0){
        navigation.classList.add("scroll");
    }else{
        navigation.classList.remove("scroll");
    }
}

function openMenu(){
    document.body.classList.add("menuExpanded")
}

function closeMenu(){
    document.body.classList.remove("menuExpanded")
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1000,
}).reveal('#home, #home img');

ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 850,
}).reveal('#home .containerNumberFather, #services, #services header, #services .card, #about, #about header, #about .content, #about img');