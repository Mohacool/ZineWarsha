const navbar = document.getElementById("navbar");
const logo_and_desc = document.getElementById("logo_and_desc");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");

  // Remove the . from the title names
  // document.getElementById("home").innerHTML = "home";
  // document.getElementById("essays").innerHTML = "essays";
  // document.getElementById("books").innerHTML = "books";
}

function closeMobileNavbar() {
  
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");

  // document.getElementById("home").innerHTML = "home ,";
  // document.getElementById("essays").innerHTML = "essays ,";
  // document.getElementById("books").innerHTML = "books ,";
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);


var backStart = false;
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

// On logo hover
$('.logo').hover(function(){
    
    var t1 = gsap.timeline({
        onStart:function(){
            backStart = true;
        }
    });

    if (!backStart){
        x.play();
        t1.to("#pattern", {transform: 'scale(3)', duration: 10},0)
        .to("#pattern", {opacity: 1, duration: 10},0)
        .to('#pattern',{rotation:45,duration:20},0);
        
    }

    // ;

})

$('.navbar-links').hover(function(){
  $('.navbar-links').fadeOut(300);
  $('.coming_soon').delay(500).fadeIn(800);


})





