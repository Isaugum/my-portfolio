console.log("connected");

const navbar = document.querySelector('.navbar');
const navBtns = document.querySelectorAll('.navbar > ul > li');
const navTitle = document.querySelector('.navbar > h1');
const landingText = document.querySelector('.landing-page-text');

const menuButtonOpen = document.querySelector('.open-menu');
const menuButtonClose = document.querySelector('.close-menu'); 


const aboutMeSection = document.querySelector('.cv-section');
const aboutText = document.querySelector('.cv-section > .cv-text');
const aboutSkills = document.querySelector('.cv-section > .cv-skills');

const projectSection = document.querySelector('.projects-section');
const projectButtons = document.querySelectorAll('.project-button');
const projectContainer = document.querySelector('.project-container');
const projectImage = document.querySelector('.project-img-container > img');
const projectText = document.querySelector('.project-info');

const projectTitle = projectText.children[0];
const projectSubtitle = projectText.children[1];
const projectDescription = projectText.children[2];

const getSpecificPosition = (positionX, positionY) => {
    window.scrollTo(positionX, positionY);
}

const myProjects = {
    LL: {
        title: "Craiglist Simulator",
        narocnik: "Lene Lekše",
        description: "A simulator of new york lol."
    },
    PKMN: {
        title: "Pokemon Teambuilder",
        narocnik: " / ",
        description: "A teambuilder for purpose of competitive battles."
    },
    IMA: {
        title: "Inventory Managment App",
        narocnik: " / ",
        description: "An app to help a small bar manage its inventory and more."
    }
}

//INTERSECTION OBSERVER FOR ABOUT ME
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let children = entry.target.children;
            children[0].style.transform = 'translate(0, 0)';
            children[0].style.opacity = '1';
            children[1].style.transform = 'translate(0, 0)';
            children[1].style.opacity = '1';
            }
        });
}, { threshold: 0.3 })

observer.observe(aboutMeSection);

window.addEventListener("load", () => {
    projectButtons.forEach(btn => {

        //controlled hoover effect
        btn.addEventListener('mouseover', () => {
            if(btn.dataset.active !== "true") {
                btn.style.color = "#707070";
            }
        });

        btn.addEventListener('mouseout', () => {
            if(btn.dataset.active !== "true") {
                btn.style.color = "#3F3F3F";
            }
        });

        //manage color and state change
        btn.addEventListener('click', () => {
    
            projectButtons.forEach(btn => {
                 if(btn.dataset.active === "true") {
                     btn.dataset.active = "false";
                     btn.style.color = "#3F3F3F";
                 }
             })
     
             btn.dataset.active = "true";
             btn.style.color = "#86A4B8";
         });

        //do the animation
        btn.addEventListener("click", () => {
            projectContainer.style.transition = "400ms";
            projectContainer.style.transform = "translate(500px, 0)";
            projectContainer.style.opacity = "0";

            const chaneAnimationLoc = setTimeout(() => {
                projectContainer.style.transform = "translate(-500px, 0)";
            }, 400);

            const animationTimeout = setTimeout(() => {
                projectContainer.style.transform = "translate(0, 0)";
                projectContainer.style.opacity = "1"

                projectTitle.innerText = myProjects[btn.dataset.content].title;
                projectSubtitle.innerText = myProjects[btn.dataset.content].narocnik;
                projectDescription.innerText = myProjects[btn.dataset.content].description;
            }, 600);
        });
    })

    //MANUAL CLICK LISTENER FOR "ABOUT ME" to account for padding-top
    navBtns[0].addEventListener("click", () => {
        getSpecificPosition(0, 800);
    });

    navBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            navbar.style.right = "-500px"
            isMenuOpen = false;
        });
    })

    //set initial active button
    projectButtons[0].style.color = "#86A4B8";
    projectTitle.innerText = myProjects.LL.title;
    projectSubtitle.innerText = myProjects.LL.narocnik;
    projectDescription.innerText = myProjects.LL.description;

    //navbar animation
    navbar.style.transform = "translate(0, 0)";
    navbar.style.opacity = "1";

    navTitle.style.opacity = "1";

    //Animation for navbar buttons
    navBtns.forEach(btn => {
        btn.style.transform = "translate(0, 0)";
        btn.style.opacity = "1";
    });

    //landing page text animation
    landingText.style.transform = "translate(0, 0)";
    landingText.style.opacity = "1";
});

let isMenuOpen = false;

const openMenu = e => {
    if(isMenuOpen === false) {
        navbar.style.right = "0";
        isMenuOpen = true;
    } else {
        navbar.style.right = "-500px"
        isMenuOpen = false;
    }
}

menuButtonOpen.addEventListener("click", openMenu);
menuButtonClose.addEventListener("click", openMenu);