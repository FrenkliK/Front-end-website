document.addEventListener('DOMContentLoaded', function() {
    const movieInfos = document.querySelectorAll('.movie-info');

    movieInfos.forEach(info => {
        const shortInfo = info.querySelector('.short-info');
        const fullInfo = info.querySelector('.full-info');
        const trailerVideo = info.querySelector('.trailer-video');

        if (shortInfo && fullInfo && trailerVideo) {
            shortInfo.addEventListener('click', function() {
                fullInfo.classList.toggle('show');
                trailerVideo.classList.toggle('show');
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Show the button when user scrolls down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll to the top of the page when the button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
