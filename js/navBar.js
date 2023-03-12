window.addEventListener("load", init);

function init() {
    let navBar = document.getElementById("nav-bar");
    let navBarBackground = document.getElementById("nav-background");
    let navBarLinks = document.querySelectorAll("a");
    let hamburgerMenu = document.getElementById("hamburger");
    hamburgerMenu.addEventListener("click", () => {
        navBar.setAttribute("class", "nav-width-expand");
        navBarBackground.setAttribute("class", "nav-background-appear");
        navBarLinks.forEach((link) => {
            link.setAttribute("class", "nav-links-visible");
        });
    });

    navBarBackground.addEventListener("click", () => {
        navBar.removeAttribute("class");
        navBarBackground.removeAttribute("class");
        navBarLinks.forEach((link) => {
            link.removeAttribute("class");
        })
    });

}