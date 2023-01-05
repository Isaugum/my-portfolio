console.log("connected");

const projectButtons = document.querySelectorAll('.project-button');

projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("clickclick");
        btn.style.color = "red";
    });
})