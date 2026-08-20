// =========================================================
// AZ STYLE PREMIUM BARBERSHOP
// MAIN JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // =========================================================
  // PAGE LOADED ANIMATION
  // =========================================================
  document.body.classList.add("page-loaded");

  // =========================================================
  // HERO PARALLAX EFFECT
  // =========================================================
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    window.addEventListener("scroll", function () {
      const scrollY = window.pageYOffset;
      if (scrollY < window.innerHeight * 1.5) {
        heroBg.style.transform = `scale(1.12) translateY(${scrollY * 0.35}px)`;
      }
    });
  }

  // =========================================================
  // SCROLL REVEAL ANIMATION
  // =========================================================
  const revealElements = [
    ...document.querySelectorAll(".service-card"),
    ...document.querySelectorAll(".gallery-item"),
    document.querySelector(".about-content"),
    document.querySelector(".opening-hours"),
    document.querySelector(".booking-container")
  ];

  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    if (el) revealObserver.observe(el);
  });

  // =========================================================
  // ACTIVE NAV LINK ON SCROLL
  // =========================================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 180;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // =========================================================
  // FORM FOCUS EFFECT
  // =========================================================
  const formInputs = document.querySelectorAll(
    "#bookingForm input, #bookingForm select, #bookingForm textarea"
  );

  formInputs.forEach(input => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });

  // =========================================================
  // BOOKING FORM SUBMIT → SEND TO WHATSAPP
  // =========================================================
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !service || !date || !time) {
        alert("⚠️ Sila lengkapkan semua maklumat yang wajib!");
        return;
      }

      // Build WhatsApp message
      let whatsappMsg = `Hi AZ STYLE PREMIUM BARBERSHOP, saya ingin membuat tempahan:\n\n`;
      whatsappMsg += `👤 Nama: ${name}\n`;
      whatsappMsg += `📱 No. Telefon: ${phone}\n`;
      whatsappMsg += `✂️ Perkhidmatan: ${service}\n`;
      whatsappMsg += `📅 Tarikh: ${date}\n`;
      whatsappMsg += `⏰ Masa: ${time}\n`;
      if (message) whatsappMsg += `📝 Catatan: ${message}\n`;

      // Encode & open WhatsApp
      const phoneNumber = "60146328737";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`;
      window.open(url, "_blank");

      // Reset form
      bookingForm.reset();
    });
  }

  // =========================================================
  // SET MIN DATE TO TODAY IN DATE INPUT
  // =========================================================
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

});
