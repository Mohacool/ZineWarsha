
// const cursor = curDot()

const small_cursor_diameter = 15;
const grow_scale = 4;
const big_cursor_diameter = small_cursor_diameter*grow_scale;

const light_red = "#ac1212";
const warsha_red = "#be1f1f";

var bypass_animation = false;

if (sessionStorage.getItem('animation_complete')){
	bypass_animation = true;
}

var ornament_clicked = false;

// IF not a mobile screen, show cursor
if (!($('#cursor').css('display')=='none')){

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
		borderColor: '#be1f1f',
		easing: 40,
		  scale: grow_scale,
		})
}



  
  // ====================== ON ORNAMENT CLICK =======================
  $('.ornament').on('click',function(event){

	if (ornament_clicked==false){
		// toggle clicked
		ornament_clicked = true;
		playAudio();

		// alert(event.clientX+", "+event.clientY);
		let mouseX = event.clientX - big_cursor_diameter/2;
		let mouseY = event.clientY - big_cursor_diameter/2;
		
		$('.pattern').css('z-index',2);
		var t7 = gsap.timeline();
		t7.to('#logo',{opacity:'0',duration:0.2},0)
		.to('.ay.description',{opacity:'0',duration:0.2},0)
		// .to('.coming_soon',{opacity:'0',duration:0.2},0)
		.to('.navbar-links',{opacity:'0',duration:0.2},0)
		.to('.pattern_rotate',{transform:'scale(1.3)',duration:15},0)
		.to('.pattern_rotate',{rotation:20,duration:23},0)
		
		;

		// Create circle on click
		$('.circle').css('display','block');
		$('.circle').css('transform',`translate(${mouseX}px,${mouseY}px) scale(1)`);

		// Grow circle 
		var t5 = gsap.timeline();
		t5.to('.circle',{transform:`translate(${mouseX}px,${mouseY}px) scale(50)`,duration:5});


		// ================================ ON CIRCLE SHRINK =====================================
		var t6 = gsap.timeline();
		t6.to('.circle',{transform:`translate(${mouseX}px,${mouseY}px) scale(1)`,duration:3},15) //change this for extra delay

		// after circle shrink
		.then(function(){

			// Remove circle and hide the pattern 
			$('.circle').css('display','none');
			$('.pattern').css('z-index',0);

		});
		

		setTimeout(function(){
			// Reset everythings opacity and position
			$('.ay.description').css('opacity',1);
			$('.desc1').css('padding-top','50vh');
			$('.desc2').css('padding-top','50vh');
			$('.navbar-links').css('opacity',1);
			// $('.coming_soon').css('opacity',1);
			$('.navbar-links').css('margin','-70px 0px')
			// $('.coming_soon').css('margin','-70px 0px');


			// Re-appear logo and descriptions
			var t8 = gsap.timeline();

			t8.to('.loading_logo',{opacity:1,duration:3},0)
			.to('.loading_logo',{filter:'blur(0px)',duration:4},0)
			.to('.loading_logo',{opacity:0,duration:1.5},3)
			.to('.loading_logo',{filter:'blur(3px)',duration:1.5},3)
			.to('.loader_container',{display:'none'})
			
			.then(function(){
				$('.all_container').css('display','block');
				$('.pattern_rotate').css('display','none');
				var t3 = gsap.timeline();
			
				t3.to('.logo',{'opacity':'1',duration:1})
				
				.to('.desc1',{padding:'0vh 0vh',duration:1, ease: "expo.out"},1)
				.to('.desc2',{padding:'0vh 0vh',duration:1.3, ease: "expo.out"},1)
				.to('.navbar-links',{margin:'0px 0px',duration:2,ease: "expo.out"},1);
				// .to('.coming_soon',{margin:'0px 0px',duration:2,ease: "expo.out"},1);
			})
			}, 13000); //change this for extra delay
		
			$('.circle').animate({
			'transform':`translate(${mouseX}px,${mouseY}px) scale(4)`
		},1000);
	}

	

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

// navbarToggle.addEventListener("click", () => {
//   if (navbar.classList.contains("opened")) {
//     closeMobileNavbar();
//   } else {
//     openMobileNavbar();
//   }
// });

// const navbarMenu = navbar.querySelector(".navbar-menu");
// const navbarLinksContainer = navbar.querySelector(".navbar-links");

// navbarLinksContainer.addEventListener("click", (clickEvent) => {
//   clickEvent.stopPropagation();
// });

// navbarMenu.addEventListener("click", closeMobileNavbar);


var backStart = false;
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

// On logo hover
// $('.logo').hover(function(){
    
//     var t1 = gsap.timeline({
//         onStart:function(){
//             backStart = true;
//         }
//     });

//     if (!backStart){
//         x.play();
//         t1.to("#pattern", {transform: 'scale(3)', duration: 10},0)
//         .to("#pattern", {opacity: 1, duration: 10},0)
//         .to('#pattern',{rotation:45,duration:20},0);
        
//     }

//     // ;

// })

$('.navbar-links').hover(function(){
  $('.navbar-links').fadeOut(300);
  $('.coming_soon').delay(500).fadeIn(800);
})

$('.ornament').on('click',function(){
  if (ornament_clicked==false){
	playAudio();
  }
  
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
	.then(function(){
		sessionStorage.setItem('animation_complete',true);
		$('.enter_button').fadeIn("3000");
	})

	// Bypass loading FOR TESTING
	if (bypass_animation){
		$('.all_container').css('display','block');	
		$('.loader_container').css('display','none');
		$('.logo').css('opacity','1');
		$('.desc1').css('padding','0vh 0vh');
		$('.desc2').css('padding','0vh 0vh');
		$('.navbar-links').css('margin','0px 0px');
		$('.enter_button').show();
	}
	

});

// Enter button STOP FLASHING ON HOVER
$('.enter_button').mouseenter(function (){
	$(this).removeClass('blink_me');
})

