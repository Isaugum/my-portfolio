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

const mediaType = document.querySelector('.favourite-type');
const mediaTitle = document.querySelector('.favourite-title');
const mediaAuthor = document.querySelector('.favourite-author');
const mediaImg = document.querySelector('.music-media > .display-container > img');

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
    0: {
        type: "The last book I read was...",
        title: "This Is How You Lose the Time War",
        author: "Amal El-Mothar - Max Gladstone / 2019",
        imgSrc: "images/time-war.jpg"
    },

    1: {
        type: "The last album I liked was...",
        title: "Hellfire",
        author: "black midi / 2022",
        imgSrc: "images/hellfire.jpg"
    },

    2: {
        type: "Another album I liked recently...",
        title: "Multitude",
        author: "Stormae / 2022",
        imgSrc: "images/multitude.jpg"
    },

    3: {
        type: "A book I really like...",
        title: "Three Body Problem",
        author: "Cixin Liu",
        imgSrc: "images/TBP.jpg"
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
            }
        });
}, { threshold: 0.3 })

observer.observe(aboutMeSection);

let mediaFavouritesState = 0;

const swipeInfo = {
    touchStart: 0,
    touchEnd: 0
}

//ON LOAD - Project buttons functionality, animations, etc
window.addEventListener("load", () => {

    mediaFavs.addEventListener("touchstart", e => {
        swipeInfo.touchStart = e.touches[0].screenX;
    });

    mediaFavs.addEventListener("touchmove", e => {
        swipeInfo.touchEnd = e.touches[0].screenX;
    });

    mediaFavs.addEventListener("touchend", e => {

        if(swipeInfo.touchEnd < 50) {
            swipeInfo.touchStart = 0;
            swipeInfo.touchEnd = 0;
        }
        else if(swipeInfo.touchStart > swipeInfo.touchEnd && Math.abs(swipeInfo.touchStart - swipeInfo.touchEnd) > 100) {
            mediaDisplay.classList.add("project-animation-left");

            const changeMediaContent = setTimeout(() => {
                mediaFavouritesState += 1;

                console.log(mediaFavouritesState);

                if(mediaFavouritesState > Object.keys(myFavourites).length - 1) {
                    mediaFavouritesState = 0;
                }

                mediaType.innerText = myFavourites[mediaFavouritesState].type;
                mediaTitle.innerText = myFavourites[mediaFavouritesState].title;
                mediaAuthor.innerText = myFavourites[mediaFavouritesState].author;
                mediaImg.src = myFavourites[mediaFavouritesState].imgSrc;
            }, 400);

            const animationRemover = setTimeout(() => {
                mediaDisplay.classList.remove("project-animation-left");
            }, 800) 
        } else if (swipeInfo.touchStart < swipeInfo.touchEnd && Math.abs(swipeInfo.touchStart - swipeInfo.touchEnd) > 100) { 
            mediaDisplay.classList.add("project-animation-right");

            const changeMediaContent = setTimeout(() => {
                mediaFavouritesState -= 1;

                if(mediaFavouritesState < 0) {
                    console.log(mediaFavouritesState);
                    mediaFavouritesState = Object.keys(myFavourites).length - 1;
                }

                mediaType.innerText = myFavourites[mediaFavouritesState].type;
                mediaTitle.innerText = myFavourites[mediaFavouritesState].title;
                mediaAuthor.innerText = myFavourites[mediaFavouritesState].author;
                mediaImg.src = myFavourites[mediaFavouritesState].imgSrc;
            }, 400);

            const animationRemover = setTimeout(() => {
                mediaDisplay.classList.remove("project-animation-right");
            }, 800)        
        }

        swipeInfo.touchStart = 0;
        swipeInfo.touchEnd = 0;
    });

    arrowsMedia.forEach(arrow => {
        arrow.addEventListener("click", () => {	
            console.log(mediaFavouritesState);
            console.log(myFavourites[mediaFavouritesState]);

            if(arrow.className.split(" ").includes("left-arrow")) {
                mediaDisplay.classList.add("project-animation-right");
                console.log(mediaDisplay.classList);
    
                const changeMediaContent = setTimeout(() => {
                    mediaFavouritesState -= 1;
    
                    if(mediaFavouritesState < 0) {
                        console.log(mediaFavouritesState);
                        mediaFavouritesState = Object.keys(myFavourites).length - 1;
                    }
    
                    mediaType.innerText = myFavourites[mediaFavouritesState].type;
                    mediaTitle.innerText = myFavourites[mediaFavouritesState].title;
                    mediaAuthor.innerText = myFavourites[mediaFavouritesState].author;
                    mediaImg.src = myFavourites[mediaFavouritesState].imgSrc;
                }, 400);
    
                const animationRemover = setTimeout(() => {
                    mediaDisplay.classList.remove("project-animation-right");
                }, 800)
            }

            if(arrow.className.split(" ").includes("right-arrow")) {
                mediaDisplay.classList.add("project-animation-left");
                console.log(mediaDisplay.classList);

                const changeMediaContent = setTimeout(() => {
                    mediaFavouritesState += 1;
    
                    console.log(mediaFavouritesState);
    
                    if(mediaFavouritesState > Object.keys(myFavourites).length - 1) {
                        mediaFavouritesState = 0;
                    }
    
                    mediaType.innerText = myFavourites[mediaFavouritesState].type;
                    mediaTitle.innerText = myFavourites[mediaFavouritesState].title;
                    mediaAuthor.innerText = myFavourites[mediaFavouritesState].author;
                    mediaImg.src = myFavourites[mediaFavouritesState].imgSrc;
                }, 400);
    
                const animationRemover = setTimeout(() => {
                    mediaDisplay.classList.remove("project-animation-left");
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
