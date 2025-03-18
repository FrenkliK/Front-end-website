
function showMovieDetails(index) {
    const movieDetails = document.getElementById("movie-details");
    const title = document.getElementById("movie-title");
    const description = document.getElementById("movie-description");

    const movies = [
        { title: "Gladiator II", description: "Vite pasi dëshmoi vdekjen e Maximus nga duart e xhaxhait të tij, Lucius duhet të hyjë në Koloseum pasi perandorët e fuqishëm të Romës pushtojnë shtëpinë e tij. Me zemërimin në zemër dhe të ardhmen e perandorisë në rrezik, ai shikon nga e kaluara për të gjetur forcën dhe nderin e nevojshëm për t'ia kthyer lavdinë Romës popullit të saj."},
        { title: "The Lord of the Rings: The War of the Rohirrim", description: "Një sulm i papritur nga Wulf, një zot i zgjuar dhe i pamëshirshëm Dunlending që kërkon hakmarrje për vdekjen e babait të tij, detyron Helm Hammerhand, Mbretin e Rohanit dhe njerëzit e tij të bëjnë një qëndrim të guximshëm të fundit në fortesën e lashtë të Hornburgut." },
        { title: "Zootopia 2", description: "Policja e guximshme e lepurit Judy Hopps dhe miku i saj, dhelpra Nick Wilde, bashkohen sërish për të goditur një çështje të re, më të rrezikshmen dhe më të ndërlikuarin e karrierës së tyre." },
        { title: "Venom:The Last Dance", description: "Eddie dhe Venom janë në arrati. Të gjuajtur nga të dy botët e tyre dhe me mbylljen e rrjetës, dyshja detyrohen të marrin një vendim shkatërrues që do të rrëzojë perdet në kërcimin e fundit të Venom dhe Eddie." }
    ];

    // Update the content
    title.textContent = movies[index - 1].title;
    description.textContent = movies[index - 1].description;

    // Display the movie details
    movieDetails.style.display = "block";

    // Add event listener to hide details on mouseout
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseout', () => {
            movieDetails.style.display = "none";
        });
    });
}




document.getElementById('vip-card').addEventListener('mouseover', function() {
    document.querySelector('.hover-text-left').style.display = 'block';
    document.querySelector('.hover-text-right').style.display = 'block';
});

document.getElementById('vip-card').addEventListener('mouseout', function() {
    document.querySelector('.hover-text-left').style.display = 'none';
    document.querySelector('.hover-text-right').style.display = 'none';
});

// For gallery description
function showDescription(id) {
    const descriptions = document.querySelectorAll('.gallery-item .description');
    descriptions.forEach((desc, index) => {
        if (index + 1 === id) {
            desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
        }
    });
}

// Hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}