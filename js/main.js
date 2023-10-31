const cursor2 = document.querySelector(".cursor-outer");
document.addEventListener("mousemove", (e) => {
	cursor2.style.top = e.clientY + "px";
	cursor2.style.left = e.clientX + "px";
});

const h1img = document.querySelectorAll("h1, img:not(.side, .logo img)");

h1img.forEach((e) => {
	e.addEventListener("mouseover", () => {
		cursor2.classList.add("cursor-outer-overhimg");
	});
	e.addEventListener("mouseout", () => {
		cursor2.classList.remove("cursor-outer-overhimg");
	});
});

const ahref = document.querySelectorAll("a");

ahref.forEach((e) => {
	e.addEventListener("mouseover", () => {
		cursor2.classList.add("cursor-outerlinks");
	});
	e.addEventListener("mouseout", () => {
		cursor2.classList.remove("cursor-outerlinks");
	});
});

const imgs = document.querySelectorAll(".opisgal img");
const fullPage = document.querySelector("#fullpage");
const obraz1 = document.querySelector("#obraz1");
console.log(imgs);
imgs.forEach((img) => {
	img.addEventListener("click", function () {
		fullPage.style.backgroundImage = "url(" + img.src + ")";
		fullPage.style.display = "block";
		if (img.className == "1") {
			obraz1.style.display = "block";
		} else {
			obraz1.style.display = "none";
		}

		if (img.className == "2") {
			obraz2.style.display = "block";
		} else {
			obraz2.style.display = "none";
		}

		if (img.className == "3") {
			obraz3.style.display = "block";
		} else {
			obraz3.style.display = "none";
		}

		if (img.className == "4") {
			obraz4.style.display = "block";
			fullPage.style.backgroundSize = "50vw";
			fullPage.style.backgroundPosition = "33vw center";
		} else {
			obraz4.style.display = "none";
			fullPage.style.backgroundSize = "30vw";
			fullPage.style.backgroundPosition = "center center";
		}

		if (img.className == "5") {
			obraz5.style.display = "block";
		} else {
			obraz5.style.display = "none";
		}

		if (img.className == "6") {
			obraz6.style.display = "block";
		} else {
			obraz6.style.display = "none";
		}

		if (img.className == "7") {
			obraz7.style.display = "block";
		} else {
			obraz7.style.display = "none";
		}

		if (img.className == "8") {
			obraz8.style.display = "block";
		} else {
			obraz8.style.display = "none";
		}
	});
});
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const menuclick = document.querySelectorAll(".menuclick");

function bodyoverflow() {
	if (document.body.style.overflow === "hidden") {
		document.body.style.overflow = "auto";
	} else {
		document.body.style.overflow = "hidden";
	}
}
menuclick.forEach((e) => {
	e.addEventListener("click", () => {
		setTimeout(
			bodyoverflow(),
			menuToggle.classList.toggle("active"),
			showcase.classList.toggle("active"),
			500
		);
	});
});

menuToggle.addEventListener("click", () => {
	menuToggle.classList.toggle("active");
	showcase.classList.toggle("active");
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
