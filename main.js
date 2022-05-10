window.addEventListener("scroll", onScroll)

onScroll();
function onScroll(){
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    ActivateMenuAtCurrentSection(home);
    ActivateMenuAtCurrentSection(services);
    ActivateMenuAtCurrentSection(about);
}

function ActivateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
    console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline);

    const sectionEndsAt = sectionTop + sectionHeight;

    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;
    console.log('A base da seção passou da linha?', sectionEndPassedTargetline);

    //limites da seção
    const sectionBoudaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;
    console.log(sectionBoudaries);

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoudaries){
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add("scroll");
    }else{
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add("show");
    }else{
        backToTopButton.classList.remove("show");
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
}).reveal('#home .containerNumberFather, #services, #services header, #services .card, #about, #about header, #about .content, #about img, #contact, #contact .button, #contact img, footer');