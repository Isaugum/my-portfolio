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
const mediaDisplay = document.querySelectorAll('.music-media > .display-container');
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
const myFavourites = {
    time_war: {
        title: "This Is How You Lose the Time War",
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

            mediaFavs.style.opacity = '1';
            }
        });
}, { threshold: 0.3 })

observer.observe(aboutMeSection);

//ON LOAD - Project buttons functionality, animations, etc
window.addEventListener("load", () => {

    mediaDisplay.forEach(element => {
        let stateOfMediaDisplay = "normal";
        
        element.addEventListener('click', (event) => {
            if(stateOfMediaDisplay === "normal") {
                element.style.transform = "scaleX(-1)";
                element.style.boxShadow = "none";
                element.children[0].style.transform = "scaleX(-1)";
                element.children[0].style.opacity = "0.3";
                element.children[1].style.opacity = "0";
                element.children[2].style.transform = "scaleX(-1)";
                element.children[2].style.display = "block";
                
                stateOfMediaDisplay = "reverse";

            } else if (stateOfMediaDisplay === "reverse") {
                element.style.transform = "scaleX(1)";
                element.children[0].style.transform = "scaleX(1)";
                element.children[1].style.transform = "scaleX(1)";
                element.children[0].style.opacity = "1";
                element.children[1].style.opacity = "1";
                element.children[2].style.display = "none";
                element.style.boxShadow = "15px 15px 0 rgba(10, 10, 10, 0.3)";

                stateOfMediaDisplay = "normal";
            } 
        });
    })

    let touchstartX = 0
    let touchendX = 0
        
    function checkDirection() {
        if (touchendX < touchstartX) return 'left';
        if (touchendX > touchstartX) return 'right';
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
    });

    arrowsMedia.forEach(arrow => {

        arrow.addEventListener('click', () => {
            if(arrow.children[0].className.animVal === "arrow-right mirror") {

                console.log("arrow left")
                mediaDisplay[0].style.transition = "400ms";
                mediaDisplay[0].style.transform = "translate(-500px, 0)";
                mediaDisplay[0].style.opacity = "0";

                const chaneAnimationLoc = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(500px, 0)";
                }, 400);

                const animationTimeout = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(0, 0)";
                    mediaDisplay[0].style.opacity = "1"

                }, 600);

            } else if(arrow.children[0].className.animVal === "arrow-right") {
                console.log("arrow right");
                mediaDisplay[0].style.transition = "400ms";
                mediaDisplay[0].style.transform = "translate(500px, 0)";
                mediaDisplay[0].style.opacity = "0";

                const chaneAnimationLoc = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(-500px, 0)";
                }, 400);

                const animationTimeout = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(0, 0)";
                    mediaDisplay[0].style.opacity = "1"

                }, 600);
            }
        })

        arrow.addEventListener("touchend", () => {
            if(checkDirection() === "left") {

                console.log("arrow left")
                mediaDisplay[0].style.transition = "400ms";
                mediaDisplay[0].style.transform = "translate(-500px, 0)";
                mediaDisplay[0].style.opacity = "0";

                const chaneAnimationLoc = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(500px, 0)";
                }, 400);

                const animationTimeout = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(0, 0)";
                    mediaDisplay[0].style.opacity = "1"

                }, 600);

            } else if(checkDirection() === "right") {
                console.log("arrow right");
                mediaDisplay[0].style.transition = "400ms";
                mediaDisplay[0].style.transform = "translate(500px, 0)";
                mediaDisplay[0].style.opacity = "0";

                const chaneAnimationLoc = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(-500px, 0)";
                }, 400);

                const animationTimeout = setTimeout(() => {
                    mediaDisplay[0].style.transform = "translate(0, 0)";
                    mediaDisplay[0].style.opacity = "1"

                }, 600);
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
                projectDescription.innerText = myProjects[btn.dataset.content].description;
                projectImage.src = myProjects[btn.dataset.content].imgSrc;
            }, 600);
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

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        navbar.style.right = "-500px"
        isMenuOpen = false;
    });
})

const openMenu = e => {
    if(isMenuOpen === false) {
        navbar.style.right = "0";
        isMenuOpen = true;
    } else {
        navbar.style.right = "-700px"
        isMenuOpen = false;
    }
}

menuButtonOpen.addEventListener("click", openMenu);
menuButtonClose.addEventListener("click", openMenu);


//FUNCTIONALLITY FOR MEDIA SECTION
