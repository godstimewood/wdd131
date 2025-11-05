// Hamburger menu functionality for mobile nav
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav ul');
	const navBar = document.querySelector('nav');
	// Create hamburger button
	const hamburger = document.createElement('button');
	hamburger.classList.add('hamburger');
	hamburger.setAttribute('aria-label', 'Open navigation menu');
	hamburger.innerHTML = '&#9776;'; // Hamburger icon
	navBar.insertBefore(hamburger, navBar.firstChild);

	function toggleMenu() {
		nav.classList.toggle('open');
		if (nav.classList.contains('open')) {
			hamburger.innerHTML = '&times;'; // X icon
			hamburger.setAttribute('aria-label', 'Close navigation menu');
		} else {
			hamburger.innerHTML = '&#9776;';
			hamburger.setAttribute('aria-label', 'Open navigation menu');
		}
	}

	hamburger.addEventListener('click', toggleMenu);

	// Hide hamburger on desktop, show on mobile
	function handleResize() {
		if (window.innerWidth >= 600) {
			hamburger.style.display = 'none';
			nav.classList.remove('open');
		} else {
			hamburger.style.display = 'block';
		}
	}
	window.addEventListener('resize', handleResize);
	handleResize();
});
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
