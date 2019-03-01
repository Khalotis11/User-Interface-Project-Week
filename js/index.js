// JS goes here
class NavButton {
    constructor(element){
        this.element = element;
        this.navItems = document.querySelector(".nav-tags");
        console.log(this.navItems)
    }
}


const menuButton = document.querySelectorAll(".navigation-button").forEach(button => new NavButton(button));