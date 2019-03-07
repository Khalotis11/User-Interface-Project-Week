// JS goes here
class NavButton {
    constructor(element){
        this.element = element;
        this.navItems = document.querySelector(".nav-tags");
        // console.log(this.navItems)
        this.element.addEventListener('click', () => this.handleClick());
    }
    handleClick() {
        document.querySelectorAll('.navigation-button').forEach(element => element.classList.toggle('active'));
        this.navItems.classList.toggle('hidden')
    }
}

const menuButton = document.querySelectorAll(".navigation-button").forEach(button => new NavButton(button));

window.onload = function() {
    var logo = document.getElementsByClassName("title");
    TweenLite.from(logo, 2, {opacity:0, left:"300px"});
  }


TweenLite.from(".middle-button", 2, {opacity:0, left:"300px"});


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector(".gsap-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

Resources


