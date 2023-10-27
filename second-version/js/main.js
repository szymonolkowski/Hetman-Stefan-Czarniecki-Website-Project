// automatic galery for school section

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}  
    x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// menu mobile version

const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuclick = document.querySelectorAll('.menu-click');

function bodyoverflow() {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'visible';
    } else {
        document.body.style.overflow = 'hidden'
    }
}
menuclick.forEach(e => {
    e.addEventListener('click', () => {
        setTimeout(bodyoverflow(),
            menuToggle.classList.toggle('active'),
            menu.classList.toggle('active'), 500);
    });
});

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    setTimeout(bodyoverflow(), 500);
});



// Pobierz wszystkie linki nawigacji
const navLinks = document.querySelectorAll('.menu a');

// Dodaj obsługę kliknięcia na każdy link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu linku

        const targetId = link.getAttribute('href') // Pobierz identyfikator docelowej sekcji

        const targetSection = document.getElementById(targetId); // Znajdź sekcję na podstawie identyfikatora

        if (targetSection) {
            // Ustaw przewijanie do sekcji z efektem płynnego przewijania (smooth scrolling)
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});