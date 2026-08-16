/* =========================================================
   AZ STYLE PREMIUM BARBERSHOP
   PREMIUM INTERACTION SYSTEM
========================================================= */

console.log("AZ STYLE PREMIUM BARBERSHOP — WEBSITE READY");


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       GLOBAL SETTINGS
    ===================================================== */

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const bookingForm =
        document.getElementById("bookingForm");

    const hero =
        document.querySelector(".hero");

    const heroBg =
        document.querySelector(".hero-bg");

    const heroBookingButton =
        document.querySelector(".hero-main-btn");

    const galleryButton =
        document.querySelector(".hero-gallery-btn");

    const dateInput =
        document.getElementById("date");

    const bookingButton =
        document.querySelector(".booking-btn");


    /* =====================================================
       BOOKING → WHATSAPP
    ===================================================== */

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* -----------------------------------------
                   GET FORM DATA
                ----------------------------------------- */

                const name =
                    document.getElementById("name")?.value.trim();

                const phone =
                    document.getElementById("phone")?.value.trim();

                const service =
                    document.getElementById("service")?.value;

                const date =
                    document.getElementById("date")?.value;

                const time =
                    document.getElementById("time")?.value;

                const message =
                    document.getElementById("message")?.value.trim();


                /* -----------------------------------------
                   VALIDATION
                ----------------------------------------- */

                if (
                    !name ||
                    !phone ||
                    !service ||
                    !date ||
                    !time
                ) {

                    alert(
                        "Please complete all required fields."
                    );

                    return;

                }


                /* -----------------------------------------
                   PHONE VALIDATION
                ----------------------------------------- */

                const phonePattern =
                    /^[0-9+\-\s]{8,15}$/;


                if (!phonePattern.test(phone)) {

                    alert(
                        "Please enter a valid phone number."
                    );

                    return;

                }


                /* -----------------------------------------
                   WHATSAPP NUMBER
                ----------------------------------------- */

                const whatsappNumber =
                    "60146328737";


                /* -----------------------------------------
                   FORMAT DATE
                ----------------------------------------- */

                let formattedDate = date;

                if (date) {

                    const dateObject =
                        new Date(date + "T00:00:00");

                    formattedDate =
                        dateObject.toLocaleDateString(
                            "en-MY",
                            {
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            }
                        );

                }


                /* -----------------------------------------
                   WHATSAPP MESSAGE
                ----------------------------------------- */

                const whatsappMessage =

                    "Hello AZ STYLE PREMIUM BARBERSHOP! 👋\n\n" +

                    "I would like to book an appointment.\n\n" +

                    "━━━━━━━━━━━━━━━━━━\n" +

                    "✦ CUSTOMER DETAILS\n" +

                    "━━━━━━━━━━━━━━━━━━\n\n" +

                    "👤 Name: " +
                    name +
                    "\n\n" +

                    "📱 Phone: " +
                    phone +
                    "\n\n" +

                    "✂️ Service: " +
                    service +
                    "\n\n" +

                    "📅 Date: " +
                    formattedDate +
                    "\n\n" +

                    "⏰ Time: " +
                    time +
                    "\n\n" +

                    "📝 Message: " +
                    (
                        message ||
                        "No additional message"
                    ) +

                    "\n\n" +

                    "━━━━━━━━━━━━━━━━━━\n\n" +

                    "Thank you!";


                /* -----------------------------------------
                   WHATSAPP URL
                ----------------------------------------- */

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* -----------------------------------------
                   BUTTON LOADING STATE
                ----------------------------------------- */

                if (bookingButton) {

                    bookingButton.disabled = true;

                    bookingButton.innerHTML =
                        "OPENING WHATSAPP...";

                    bookingButton.style.opacity =
                        "0.7";

                    bookingButton.style.cursor =
                        "wait";

                }


                /* -----------------------------------------
                   OPEN WHATSAPP
                ----------------------------------------- */

                window.open(
                    whatsappURL,
                    "_blank"
                );


                /* -----------------------------------------
                   RESTORE BUTTON
                ----------------------------------------- */

                setTimeout(
                    function () {

                        if (bookingButton) {

                            bookingButton.disabled =
                                false;

                            bookingButton.innerHTML =
                                "BOOK APPOINTMENT";

                            bookingButton.style.opacity =
                                "1";

                            bookingButton.style.cursor =
                                "pointer";

                        }

                    },
                    2500
                );

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, " +
            ".gallery-item, " +
            ".about-content, " +
            ".opening-hours, " +
            ".booking-container"
        );


    if (
        "IntersectionObserver" in window &&
        !reduceMotion
    ) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }

            );


        animatedElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    } else {

        animatedElements.forEach(
            function (element) {

                element.classList.add("show");

            }
        );

    }


    /* =====================================================
       HERO MOUSE PARALLAX
    ===================================================== */

    if (
        hero &&
        heroBg &&
        !reduceMotion
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        hero.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 12;


                mouseY =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 12;

            }
        );


        function animateParallax() {

            currentX +=
                (mouseX - currentX) * 0.05;

            currentY +=
                (mouseY - currentY) * 0.05;


            heroBg.style.transform =
                `scale(1.12) translate(${currentX}px, ${currentY}px)`;


            requestAnimationFrame(
                animateParallax
            );

        }


        animateParallax();


        hero.addEventListener(
            "mouseleave",
            function () {

                mouseX = 0;
                mouseY = 0;

            }
        );

    }


    /* =====================================================
       HERO BOOKING BUTTON
    ===================================================== */

    if (heroBookingButton) {

        heroBookingButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const booking =
                    document.getElementById("booking");


                if (booking) {

                    booking.scrollIntoView({
                        behavior:
                            reduceMotion
                                ? "auto"
                                : "smooth",

                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================================
       HERO GALLERY BUTTON
    ===================================================== */

    if (galleryButton) {

        galleryButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const gallery =
                    document.getElementById("gallery");


                if (gallery) {

                    gallery.scrollIntoView({
                        behavior:
                            reduceMotion
                                ? "auto"
                                : "smooth",

                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================================
       NAVBAR ACTIVE SECTION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;

                const sectionBottom =
                    sectionTop +
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionBottom
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );


    updateActiveNavigation();


    /* =====================================================
       NAVBAR SMOOTH SCROLL
    ===================================================== */

    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        href &&
                        href.startsWith("#")
                    ) {

                        const target =
                            document.querySelector(
                                href
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({
                                behavior:
                                    reduceMotion
                                        ? "auto"
                                        : "smooth",

                                block: "start"
                            });

                        }

                    }

                }
            );

        }
    );


    /* =====================================================
       PREVENT PAST BOOKING DATES
    ===================================================== */

    if (dateInput) {

        const today =
            new Date();


        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        const formattedToday =
            `${year}-${month}-${day}`;


        dateInput.min =
            formattedToday;

    }


    /* =====================================================
       PHONE NUMBER CLEANUP
    ===================================================== */

    const phoneInput =
        document.getElementById("phone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9+\-\s]/g,
                        ""
                    );

            }
        );

    }


    /* =====================================================
       BOOKING FORM INPUT EFFECT
    ===================================================== */

    const formInputs =
        document.querySelectorAll(
            "#bookingForm input, " +
            "#bookingForm select, " +
            "#bookingForm textarea"
        );


    formInputs.forEach(
        function (input) {

            input.addEventListener(
                "focus",
                function () {

                    const group =
                        this.closest(
                            ".form-group"
                        );


                    if (group) {

                        group.classList.add(
                            "focused"
                        );

                    }

                }
            );


            input.addEventListener(
                "blur",
                function () {

                    const group =
                        this.closest(
                            ".form-group"
                        );


                    if (group) {

                        group.classList.remove(
                            "focused"
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       ESCAPE KEY
       Close / reset active form states
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                document.activeElement?.blur();

            }

        }
    );


    /* =====================================================
       PAGE LOAD EFFECT
    ===================================================== */

    window.addEventListener(
        "load",
        function () {

            document.body.classList.add(
                "page-loaded"
            );

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "✂️ AZ STYLE PREMIUM BARBERSHOP"
    );

    console.log(
        "✓ Booking system ready"
    );

    console.log(
        "✓ WhatsApp integration ready"
    );

    console.log(
        "✓ Scroll animations ready"
    );

    console.log(
        "✓ Premium interactions ready"
    );

});
