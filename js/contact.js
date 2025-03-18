const moviesData = {
    "E hënë": [
        { title: "Despicable Me", showtimes: ["11:00 AM"], image: "image/des1.jpg" },
        { title: "Arcadian", showtimes: ["2:00 PM"], image: "image/arc.jpg" },
        { title: "Bad Boys", showtimes: ["5:00 PM"], image: "image/download-1.avif" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ],
    "E martë": [
        { title: "Inside out 2", showtimes: ["11:00 AM"], image: "image/inside.webp" },
        { title: "Alien", showtimes: ["2:00 PM"], image: "image/alien.webp" },
        { title: "Arcadian", showtimes: ["5:00 PM"], image: "image/arc.jpg" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ],
    "E mërkurë": [
        { title: "Despicable Me", showtimes: ["11:00 AM"], image: "image/des1.jpg" },
        { title: "Bad Boys", showtimes: ["2:00 PM"], image: "image/download-1.avif" },
        { title: "Alien", showtimes: ["5:00 PM"], image: "image/alien.webp" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ],
    "E enjte": [
        { title: "Inside out 2", showtimes: ["11:00 AM"], image: "image/inside.webp" },
        { title: "Arcadian", showtimes: ["2:00 PM"], image: "image/arc.jpg" },
        { title: "Bad Boys", showtimes: ["5:00 PM"], image: "image/download-1.avif" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ],
    "E premte": [
        { title: "Despicable Me", showtimes: ["11:00 AM"], image: "image/des1.jpg" },
        { title: "Alien", showtimes: ["2:00 PM"], image: "image/alien.webp" },
        { title: "Arcadian", showtimes: ["5:00 PM"], image: "image/arc.jpg" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ],
    "E shtunë": [
        { title: "Inside out 2", showtimes: ["11:00 AM"], image: "image/inside.webp" },
        { title: "Bad Boys", showtimes: ["2:00 PM"], image: "image/download-1.avif" },
        { title: "Alien", showtimes: ["5:00 PM"], image: "image/alien.webp" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ],
    "E diel": [
        { title: "Despicable Me", showtimes: ["11:00 AM"], image: "image/des1.jpg" },
        { title: "Inside out 2", showtimes: ["2:00 PM"], image: "image/inside.webp" },
        { title: "Bad Boys", showtimes: ["5:00 PM"], image: "image/download-1.avif" },
        { title: "Deadpool", showtimes: ["8:00 PM"], image: "image/deadpool.jpg" }
    ]
};

let currentDayIndex = 0;
const weekDays = Object.keys(moviesData);

function renderDay() {
    const dayName = weekDays[currentDayIndex];
    const dayMovies = moviesData[dayName];
    const dayCalendar = document.getElementById("day-calendar");

    let dayContent = `<div class="day"><div class="date">${dayName}</div>`;
    dayMovies.forEach(movie => {
        dayContent += `
            <div class="movie">
                <img src="${movie.image}" alt="${movie.title}" class="movie-image">
                <div>
                    <h3 style="margin: 0;">${movie.title}</h3>
                    <p style="margin-top: 5px;">${movie.showtimes.join(", ")}</p>
                </div>
            </div>
        `;
    });
    dayContent += `</div>`;
    dayCalendar.innerHTML = dayContent;
}

document.getElementById("prev-day").addEventListener("click", () => {
    currentDayIndex = (currentDayIndex - 1 + weekDays.length) % weekDays.length;
    renderDay();
});

document.getElementById("next-day").addEventListener("click", () => {
    currentDayIndex = (currentDayIndex + 1) % weekDays.length;
    renderDay();
});

// Initial render
renderDay();

document.getElementById("subject").addEventListener("change", function() {
    const selectedSubject = this.options[this.selectedIndex].text;
    const emailLink = document.getElementById("contact-form").action;
    document.getElementById("contact-form").action = emailLink.replace("subject=", `subject=${selectedSubject}`);
});

document.getElementById("submit-button").addEventListener("click", function(event) {
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value;
    const emailProvider = document.getElementById("email-provider").value;

    // Check if all required fields are filled out
    if (name === "" || subject === "" || emailProvider === "") {
        alert("Please fill out all fields before submitting the form.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Check if the user has selected a valid subject
    if (subject === "" || subject === "Select a subject") {
        alert("Please select a subject.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Proceed with form submission if all fields are filled
    let bodyText = '';

    if (subject === 'Tickets') {
        bodyText = `Hello,\n\nI would like to book (number of tickets) for (movie name) on (date) at (hour).\n\nBest regards,\n${name}`;
    } else if (subject === 'VIP Membership') {
        bodyText = `Dear Onstage Cinema,\n\nI would like to inquire about joining the VIP membership.\n\nThank you.\n\nBest regards,\n${name}`;
    }

    let mailtoLink = '';
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyText);
    const email = "info@OnstageCinema.al";

    if (emailProvider === 'gmail') {
        mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}&tf=1`;
    } else if (emailProvider === 'yahoo') {
        mailtoLink = `https://compose.mail.yahoo.com/?to=${email}&subj=${encodedSubject}&body=${encodedBody}`;
    } else if (emailProvider === 'outlook') {
        mailtoLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${encodedSubject}&body=${encodedBody}`;
    } else if (emailProvider === 'apple') {
        mailtoLink = `https://www.icloud.com/mail/compose?to=${email}&subject=${encodedSubject}&body=${encodedBody}`;
    } else {
        mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    }

    // Open the selected email provider in a new tab or use the default email client
    window.open(mailtoLink, '_blank');
});
