
// const cursor = curDot()

const small_cursor_diameter = 15;
const grow_scale = 4;
const big_cursor_diameter = small_cursor_diameter*grow_scale;

// or, set as you want
const cursor = curDot({
  zIndex: 2,
  diameter: small_cursor_diameter,
  borderWidth: 1,
  borderColor: '#be1f1f',
  easing: 4,
  background: '#be1f1f'
})

cursor.over('.ornament', {
	background: '#be1f1f',
  broderWidth: 2,
  easing: 40,
	scale: grow_scale,
  })

  $('.ornament').on('click',function(event){
    // alert(event.clientX+", "+event.clientY);
    let mouseX = event.clientX - big_cursor_diameter/2;
    let mouseY = event.clientY - big_cursor_diameter/2;
    $('.circle').css('display','block');
    $('.circle').css('transform',`translate(${mouseX}px,${mouseY}px) scale(1)`);
    var t5 = gsap.timeline();
    t5.to('.circle',{transform:`translate(${mouseX}px,${mouseY}px) scale(50)`,duration:5})
    .to('.circle',{transform:`translate(${mouseX}px,${mouseY}px) scale(1)`,duration:5},18)
      .then(function(){
        $('.circle').css('display','none');
      });
    
    $('.circle').animate({
      'transform':`translate(${mouseX}px,${mouseY}px) scale(4)`
    },1000);

  })

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
 



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

$('.ornament').on('click',function(){
  
  playAudio();
})


$( document ).ready(function() {
	var t2 = gsap.timeline();

	// Loading Logo
	// t2.to('.loading_logo',{opacity:1,duration:3})
	// .to('.loading_logo',{filter:'blur(0px)',duration:4},0)
	// .to('.loading_logo',{opacity:0,duration:1.5},3)
	// .to('.loading_logo',{filter:'blur(3px)',duration:1.5},3)
	// .to('.loader_container',{display:'none'})
	// .then(function(){
	// 	$('.all_container').css('display','block');
	// 	var t3 = gsap.timeline();

	// 	t3.to('.logo',{'opacity':'1',duration:1})
		
	// 	.to('.desc1',{padding:'0vh 0vh',duration:1, ease: "expo.out"},1)
	// 	.to('.desc2',{padding:'0vh 0vh',duration:1.3, ease: "expo.out"},1)
	// 	.to('.navbar-links',{margin:'0px 0px',duration:2,ease: "expo.out"},1);
	// })

	// Bypass loading FOR TESTING
	$('.all_container').css('display','block');	
	$('.loader_container').css('display','none');
	$('.logo').css('opacity','1');
	$('.desc1').css('padding','0vh 0vh');
	$('.desc2').css('padding','0vh 0vh');
	$('.navbar-links').css('margin','0px 0px');
  

  


	


});




