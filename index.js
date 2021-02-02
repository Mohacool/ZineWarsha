







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


$( document ).ready(function() {
	var t2 = gsap.timeline();

	// Loading Logo
	t2.to('.loading_logo',{opacity:1,duration:3})
	.to('.loading_logo',{filter:'blur(0px)',duration:4},0)
	.to('.loading_logo',{opacity:0,duration:1.5},3)
	.to('.loading_logo',{filter:'blur(3px)',duration:1.5},3)
	.to('.loader_container',{display:'none'})
	.then(function(){
		$('.all_container').css('display','block');
		var t3 = gsap.timeline();

		t3.to('.logo',{'opacity':'1',duration:1})
		
		.to('.desc1',{padding:'0vh 0vh',duration:1, ease: "expo.out"},1)
		.to('.desc2',{padding:'0vh 0vh',duration:1.3, ease: "expo.out"},1)
		.to('.navbar-links',{margin:'0px 0px',duration:2,ease: "expo.out"},1);
	})

	


});




