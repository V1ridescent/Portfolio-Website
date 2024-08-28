// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    var aboutPage = document.querySelector('#aboutPage');
    var aboutMeText = document.querySelector('#aboutMeText');
    var projectsPage = document.querySelector('#projectsPage');
    var projectsText = document.querySelector('#projectsText');
    var contactPage = document.querySelector('#contactPage');
    var contactText = document.querySelector('#contactText');
    // Ensure that the elements exist before proceeding
    if (aboutPage && aboutMeText) {
        // Create an intersection observer for About Me section
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                }
                else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the section is visible
        });
        // Observe the About Me section and text
        observer.observe(aboutPage);
        observer.observe(aboutMeText);
    }
    if (projectsPage && projectsText) {
        // Create an intersection observer for Projects section
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                }
                else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the section is visible
        });
        // Observe the Projects section and text
        observer.observe(projectsPage);
        observer.observe(projectsText);
    }
    if (contactPage && contactText) {
        // Create an intersection observer for Projects section
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                }
                else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the section is visible
        });
        // Observe the Projects section and text
        observer.observe(contactPage);
        observer.observe(contactText);
    }
    var contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        // Create an intersection observer for Contact section
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                }
                else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the section is visible
        });
        // Observe the Contact section
        observer.observe(contactForm);
    }
});
