const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#nabar__logo')
//to display the menu
const mobileMenu=() =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);

//to show active menu while scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu=document.querySelector('#home-page');
    const qualificationMenu=document.querySelector('#Qualification-page');
    const skillMenu=document.querySelector('#skill-page');
    const projectsMenu=document.querySelector('#project-page');
    // const sign_upMenu=document.querySelector('#signup-page');
    const socialMenu=document.querySelector('#connect-page');
    let scrollPosition= window.scrollY;


    if(window.innerWidth>1100 && scrollPosition<570){
        homeMenu.classList.add('highlight');
        qualificationMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth>1100 && scrollPosition<1201){
        qualificationMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        skillMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth>1100 && scrollPosition<2000){
        skillMenu.classList.add('highlight');
        qualificationMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth>1100 && scrollPosition<2755){
        projectsMenu.classList.add('highlight')
        skillMenu.classList.remove('highlight')
        socialMenu.classList.remove('highlight')
    return
    }
    // else if(window.innerWidth>1100 && scrollPosition<2700){
    //     sign_upMenu.classList.add('highlight')
    //     projectsMenu.classList.remove('highlight')
    //     socialMenu.classList.remove('highlight')
    // return}
    else if(window.innerWidth>1100 && scrollPosition<3700){
        socialMenu.classList.add('highlight')
        projectsMenu.classList.remove('highlight')
    return;
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
    };
    window.addEventListener('scroll',highlightMenu);
    window.addEventListener('click',highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1100 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);