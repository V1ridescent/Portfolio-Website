// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const aboutPage = document.querySelector('#aboutPage') as HTMLElement | null;
    const aboutMeText = document.querySelector('#aboutMeText') as HTMLElement | null;
    const projectsPage = document.querySelector('#projectsPage') as HTMLElement | null;
    const projectsText = document.querySelector('#projectsText') as HTMLElement | null;
    const contactPage = document.querySelector('#contactPage') as HTMLElement | null;
    const contactText = document.querySelector('#contactText') as HTMLElement | null;

    // Ensure that the elements exist before proceeding
    if (aboutPage && aboutMeText) {
        // Create an intersection observer for About Me section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                } else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 1// Trigger when 50% of the section is visible
        });

        // Observe the About Me section and text
        observer.observe(aboutPage);
        observer.observe(aboutMeText);
    }

    if (projectsPage && projectsText) {
        // Create an intersection observer for Projects section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                } else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 1 // Trigger when 50% of the section is visible
        });

        // Observe the Projects section and text
        observer.observe(projectsPage);
        observer.observe(projectsText);
    }

    if (contactPage && contactText) {
        // Create an intersection observer for Projects section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to fade in
                } else {
                    entry.target.classList.remove('visible'); // Remove visible class to fade out
                }
            });
        }, {
            threshold: 1 // Trigger when 50% of the section is visible
        });

        // Observe the Projects section and text
        observer.observe(contactPage);
        observer.observe(contactText);
    }


        const contactForm = document.querySelector('#contactForm') as HTMLElement | null;
    
        if (contactForm) {
            // Create an intersection observer for Contact section
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Add visible class to fade in
                    } else {
                        entry.target.classList.remove('visible'); // Remove visible class to fade out
                    }
                });
            }, {
                threshold: 1 // Trigger when 50% of the section is visible
            });
    
            // Observe the Contact section
            observer.observe(contactForm);
        }
    });
