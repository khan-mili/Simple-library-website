
  
const navSubs = document.querySelectorAll(".nav-sub");
const navID = document.getElementById("nav-toggle");
const navBar = document.querySelector('.navigation');
// Add event listener to toggle navigation menu when navID is clicked
navID.addEventListener("click", () => {
	navBar.classList.toggle("show-nav");
	if (navBar.classList.contains("show-nav")) {   // Collapse all submenus when the navigation menu is shown
		navSubs.forEach(navSub => {
			const long = navSub.querySelector(".long");
			const toggleIcon = navSub.querySelector(".short img");
			long.style.display = "none";
			toggleIcon.style.transform = "";
		});
	}
	});

// Add event listener to each submenu

navSubs.forEach((navSub) => {
	const short = navSub.querySelector(".short");
	const long = navSub.querySelector(".long");
	const toggleIcon = short.querySelector("img");

// Add click event listener to toggle submenu visibility
	short.addEventListener("click", () => {

		// Collapse other submenus when a submenu is clicked
		navSubs.forEach((otherNavSub) => {
			if (otherNavSub !== navSub) {
				otherNavSub.querySelector(".long").style.display = "none";
				otherNavSub.querySelector("img").style.transform = "";
			}
		});

		const isExpanded = long.style.display === "block";

		  // Toggle visibility of clicked submenu
		long.style.display = isExpanded ? "none" : "block";
		
        // Rotate toggle icon of clicked submenu
		toggleIcon.style.transform = isExpanded ? "" : "rotate(180deg)";
	});
});


/*------- search button ----------- */

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchform.classList.toggle('active');
}


/*---- login form -------*/

var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


/*-------- window scroll ----*/

window.onscroll = () =>{

  searchform.classList.remove('active');

  if (window.scrollY > 0){
    document.querySelector('.header .header_two').classList.add('active');

  }else{
    document.querySelector('.header .header_two').classList.remove('active');
  }
}

window.onload = () => {

  if (window.scrollY > 80){
    document.querySelector('.header .header_two').classList.add('active');

  }else{
    document.querySelector('.header .header_two').classList.remove('active');
  }
}

  
