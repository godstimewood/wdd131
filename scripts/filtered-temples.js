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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
  name: "Accra Ghana Temple",
  location: "Accra, Ghana",
  dedicated: "2004, January, 11",
  area: 17500,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
},
{
  name: "Rome Italy Temple",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 40000,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
},
{
  name: "Tokyo Japan Temple",
  location: "Tokyo, Japan",
  dedicated: "1980, October, 29",
  area: 53997,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg"
}
];

// Select the container where temple cards will be added
const container = document.getElementById('temple-cards');

// Loop through the array and create cards
if (container) {
  temples.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <div class="temple-info">
        <h2>${temple.templeName || temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img src="${temple.imageUrl}" alt="${temple.templeName || temple.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

function renderTemples(filteredTemples) {
  container.innerHTML = '';
  filteredTemples.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <div class="temple-info">
        <h2>${temple.templeName || temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img src="${temple.imageUrl}" alt="${temple.templeName || temple.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

function getYear(dedicated) {
  if (!dedicated) return 0;
  const match = dedicated.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : 0;
}

function filterTemples(type) {
  switch(type) {
    case 'old':
      return temples.filter(t => getYear(t.dedicated) < 1900);
    case 'new':
      return temples.filter(t => getYear(t.dedicated) > 2000);
    case 'large':
      return temples.filter(t => t.area > 90000);
    case 'small':
      return temples.filter(t => t.area < 10000);
    default:
      return temples;
  }
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const text = link.textContent.trim().toLowerCase();
    let type = 'home';
    if (text === 'old') type = 'old';
    else if (text === 'new') type = 'new';
    else if (text === 'large') type = 'large';
    else if (text === 'small') type = 'small';
    else type = 'home';
    renderTemples(filterTemples(type));
    const heading = document.querySelector('.main-heading');
    if (heading) heading.textContent = link.textContent;
  });
});

renderTemples(temples);