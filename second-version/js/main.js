let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

// prevent zooming on mobile

document.addEventListener(
	"touchmove",
	function (event) {
		event.preventDefault();
	},
	{ passive: false }
);

// automatic galery for school section

let myIndex = 0;
if (width <= 574) {
	carousel();
}

function carousel() {
	let i;
	let x = document.getElementsByClassName("slide");
	for (i = 0; i < x.length; i++) {
		x[i].style.opacity = "0";
		x[i].style.display = "block";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.opacity = "1";
	setTimeout(carousel, 4000); // Change image every 2 seconds
}

// menu mobile version

const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const menuclick = document.querySelectorAll(".menu-click");

function bodyoverflow() {
	if (document.body.style.overflow === "hidden") {
		document.body.style.overflow = "visible";
	} else {
		document.body.style.overflow = "hidden";
	}
}
menuclick.forEach((e) => {
	e.addEventListener("click", () => {
		setTimeout(
			bodyoverflow(),
			menuToggle.classList.toggle("active"),
			menu.classList.toggle("active"),
			500
		);
	});
});

menuToggle.addEventListener("click", () => {
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
	setTimeout(bodyoverflow(), 500);
});

// Pobierz wszystkie linki nawigacji
const navLinks = document.querySelectorAll(".menu a");

// Dodaj obsługę kliknięcia na każdy link
navLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu linku

		const targetId = link.getAttribute("href"); // Pobierz identyfikator docelowej sekcji

		const targetSection = document.getElementById(targetId); // Znajdź sekcję na podstawie identyfikatora

		if (targetSection) {
			// Ustaw przewijanie do sekcji z efektem płynnego przewijania (smooth scrolling)
			targetSection.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});

// content change of anthem section

console.log(width);

if (width >= 574 && width <= 768) {
	document.querySelector(".anthem-paragraph-last-child").innerHTML =
		'Ten fragment hymnu jest <span style="font-weight: 900;">hołdem</span> dla hetmana Czarnieckiego i jego roli w obronie Polski, aby dowiedzieć się więcej o hymnie polski oraz o wspomnianej w hymnie sytuacji kliknij w przycisk obok!';
}
