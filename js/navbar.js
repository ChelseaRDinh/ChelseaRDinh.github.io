function toggleMenu() {
	let navbarToggle = document.getElementById('js-navbar-toggle');
	let navbarList = document.getElementById('js-navbar__list');

	navbarList.classList.toggle('active');
	navbarToggle.classList.toggle('active');
}

function closeMenu() {
	let navbarToggle = document.getElementById('js-navbar-toggle');
	let navbarList = document.getElementById('js-navbar__list');
	let logoButton = document.getElementById('js-navbar-logo');

	logoButton.addEventListener('click', () => {
		if (navbarToggle.classList.contains('active') && navbarList.classList.contains('active')) {
			navbarToggle.classList.toggle('active');
			navbarList.classList.toggle('active');
		}
	});

	navbarToggle.classList.toggle('active');
	navbarList.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	toggleMenu();
	closeMenu();
});