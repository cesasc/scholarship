// Load navbar
document.addEventListener("DOMContentLoaded", async function () {
  // Load navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    try {
      const response = await fetch("navbar.html");
      const navbarHTML = await response.text();
      navbarPlaceholder.innerHTML = navbarHTML;

      // Set active page after navbar is loaded
      setActivePage();

      // Initialize mobile menu after navbar is loaded
      initializeMobileMenu();

      // Initialize navbar scroll effects
      initializeNavbarScroll();
    } catch (error) {
      console.error("Error loading navbar:", error);
    }
  }

  // Initialize other features
  initializeSmoothScroll();
  initializeCardAnimations();
  initializeParallax();
});

// Set active navigation based on current page
function setActivePage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("data-page") || link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// Mobile Navigation Toggle
function initializeMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offset = 80; // Height of navbar
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Navbar background change on scroll
function initializeNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
      }

      lastScroll = currentScroll;
    });
  }
}

// Card animation on scroll
function initializeCardAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply animation to cards
  document.querySelectorAll(".program-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
}

// Set active navigation based on current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

// Add parallax effect to hero orbs
function initializeParallax() {
  window.addEventListener("mousemove", (e) => {
    const orbs = document.querySelectorAll(".gradient-orb");
    if (orbs.length > 0) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xPos = (x - 0.5) * speed;
        const yPos = (y - 0.5) * speed;
        orb.style.transform = `translate(${xPos}px, ${yPos}px)`;
      });
    }
  });
}
