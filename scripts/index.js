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

const mediaFavs = document.querySelector('.music-media');
const mediaDisplay = document.querySelector('.music-media > .display-container');
const arrowsMedia = document.querySelectorAll('.arrow');


const projectSection = document.querySelector('.projects-section');
const projectButtons = document.querySelectorAll('.project-button');
const projectContainer = document.querySelector('.project-container');
const projectImage = document.querySelector('.project-container > img');
const projectText = document.querySelector('.project-info');

const projectTitle = projectText.children[0];
const projectDescription = projectText.children[1];

const getSpecificPosition = (positionX, positionY) => {
    window.scrollTo(positionX, positionY);
}

//Data for favourites section

//Data for projects section
const myProjects = {
    LL: {
        title: "Craiglist Simulator",
        narocnik: "Lene Lekše",
        description: "A simulator of new york lol.",
        imgSrc: "images/craiglist.png"
    },
    PKMN: {
        title: "Pokemon Teambuilder",
        narocnik: " / ",
        description: "A teambuilder for purpose of competitive battles.",
        imgSrc: "images/pkmn-app.jpg"
    },
    IMA: {
        title: "Inventory Managment App",
        narocnik: " / ",
        description: "An app to help a small bar manage its inventory and more.",
        imgSrc: "images/pkmn-app.jpg"
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

//ON LOAD - Project buttons functionality, animations, etc
window.addEventListener("load", () => {

    arrowsMedia.forEach(arrow => {

        arrow.addEventListener("click", () => {
            if(arrow.className.split(" ").includes("left-arrow")) {
                console.log("left");
                mediaDisplay.classList.add("project-animation-left");
                console.log(mediaDisplay.classList);
    
                /*const changeContent = setTimeout(() => {
                    projectTitle.innerText = myProjects[btn.dataset.content].title;
                    projectDescription.innerText = myProjects[btn.dataset.content].description;
                    projectImage.src = myProjects[btn.dataset.content].imgSrc;
                }, 400);*/
    
                const animationRemover = setTimeout(() => {
                    mediaDisplay.classList.remove("project-animation-left");
                }, 800)
            }

            if(arrow.className.split(" ").includes("right-arrow")) {
                console.log("right");
                mediaDisplay.classList.add("project-animation-right");
                console.log(mediaDisplay.classList);
    
                /*const changeContent = setTimeout(() => {
                    projectTitle.innerText = myProjects[btn.dataset.content].title;
                    projectDescription.innerText = myProjects[btn.dataset.content].description;
                    projectImage.src = myProjects[btn.dataset.content].imgSrc;
                }, 400);*/
    
                const animationRemover = setTimeout(() => {
                    mediaDisplay.classList.remove("project-animation-right");
                }, 800)
            }
        })
    })

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

        //DO THE SLIDING ANIMATION

        // DO IT WITH STYLE MANIPULATION (BAD);
        /*btn.addEventListener("click", () => {
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
                projectDescription.innerText = myProjects[btn.dataset.content].description;
                projectImage.src = myProjects[btn.dataset.content].imgSrc;
            }, 600);
        });*/

        // DO IT WITH CLASS MANIPULATION AND CSS;
        btn.addEventListener("click", () => {
            projectContainer.classList.add("project-animation");
            console.log(projectContainer.classList);

            const changeContent = setTimeout(() => {
                projectTitle.innerText = myProjects[btn.dataset.content].title;
                projectDescription.innerText = myProjects[btn.dataset.content].description;
                projectImage.src = myProjects[btn.dataset.content].imgSrc;
            }, 400);

            const animationRemover = setTimeout(() => {
                projectContainer.classList.remove("project-animation");
            }, 800)
        });
    })

    //set initial active button
    projectButtons[0].style.color = "#86A4B8";
    projectTitle.innerText = myProjects.LL.title;
    projectDescription.innerText = myProjects.LL.description;
    projectImage.src = "images/craiglist.png";
});

//OPENINA AND CLOSING MENU FOR PHONE / SMALL TABLETS
let isMenuOpen = false;

window.addEventListener("scroll", () => {

    if(isMenuOpen === true) {
        openMenu()
    }
})

function openMenu () {
    if(isMenuOpen === false) {
        navbar.style.right = "0";
        isMenuOpen = true;
    } else {
        navbar.style.right = "-700px";
        isMenuOpen = false;
    }
}

menuButtonOpen.addEventListener("click", openMenu);
menuButtonClose.addEventListener("click", openMenu);


//FUNCTIONALLITY FOR MEDIA SECTION
