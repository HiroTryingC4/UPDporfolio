// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navigation")
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")
  const navLinks = document.querySelectorAll(".nav-link")
  const themeToggle = document.getElementById("themeToggle")

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)

  // Update theme toggle icon based on current theme
  function updateThemeIcon() {
    const themeIcon = document.querySelector(".theme-icon")
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      themeIcon.textContent = "☀️"
    } else {
      themeIcon.textContent = "🌙"
    }
  }

  // Initialize theme icon
  updateThemeIcon()

  // Theme toggle event listener
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon()
  })

  let lastScrollY = window.scrollY
  let scrollDirection = "down"

  // Handle scroll effect on navigation and track direction
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY
    scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
    lastScrollY = currentScrollY

    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside navMenu/navToggle (for better UX)
  document.addEventListener("click", (e) => {
    const navToggle = document.getElementById("navToggle")
    const navMenu = document.getElementById("navMenu")
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const createBidirectionalObserver = (animateIn, animateOut) => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Element is entering viewport
          setTimeout(() => {
            animateIn(entry.target)
          }, index * 100)
        } else if (entry.boundingClientRect.top > 0) {
          // Element is leaving viewport from top (scrolling up)
          animateOut(entry.target)
        }
      })
    }, observerOptions)
  }

  // Animation functions for different effects
  const fadeUpAnimations = {
    in: (element) => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    },
    out: (element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
    },
  }

  const slideLeftAnimations = {
    in: (element) => {
      element.style.opacity = "1"
      element.style.transform = "translateX(0)"
    },
    out: (element) => {
      element.style.opacity = "0"
      element.style.transform = "translateX(-30px)"
    },
  }

  const slideRightAnimations = {
    in: (element) => {
      element.style.opacity = "1"
      element.style.transform = "translateX(0)"
    },
    out: (element) => {
      element.style.opacity = "0"
      element.style.transform = "translateX(30px)"
    },
  }

  const scaleAnimations = {
    in: (element) => {
      element.style.opacity = "1"
      element.style.transform = "scale(1)"
    },
    out: (element) => {
      element.style.opacity = "0"
      element.style.transform = "scale(0.9)"
    },
  }

  const headerAnimations = {
    in: (element) => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
      const divider = element.querySelector(".section-divider")
      if (divider) {
        setTimeout(() => {
          divider.style.width = "60px"
        }, 300)
      }
    },
    out: (element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(-20px)"
      const divider = element.querySelector(".section-divider")
      if (divider) {
        divider.style.width = "0"
      }
    },
  }

  // Create bidirectional observers
  const fadeUpObserver = createBidirectionalObserver(fadeUpAnimations.in, fadeUpAnimations.out)
  const slideLeftObserver = createBidirectionalObserver(slideLeftAnimations.in, slideLeftAnimations.out)
  const slideRightObserver = createBidirectionalObserver(slideRightAnimations.in, slideRightAnimations.out)
  const scaleObserver = createBidirectionalObserver(scaleAnimations.in, scaleAnimations.out)
  const headerObserver = createBidirectionalObserver(headerAnimations.in, headerAnimations.out)

  // Apply animations to different elements

  // Section headers - fade in from top
  const sectionHeaders = document.querySelectorAll(".section-header")
  sectionHeaders.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(-30px)"
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    headerObserver.observe(el)
  })

  // Work cards - fade up with stagger and read more functionality
  const workCards = document.querySelectorAll(".work-card")
  workCards.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(50px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    fadeUpObserver.observe(el)

    const readMoreButton = el.querySelector(".read-more-button")
    if (readMoreButton) {
      readMoreButton.addEventListener("click", () => {
        toggleReadMore(readMoreButton)
      })
    }
  })

  // Service cards - scale in
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "scale(0.8)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    scaleObserver.observe(el)
  })

  // Timeline items - slide in from left
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateX(-50px)"
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease"
    slideLeftObserver.observe(el)
  })

  // Certification cards - slide in from right
  const certificationCards = document.querySelectorAll(".certification-card")
  certificationCards.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateX(50px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    slideRightObserver.observe(el)
  })

  // Achievement cards - fade up
  const achievementCards = document.querySelectorAll(".achievement-card")
  achievementCards.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    fadeUpObserver.observe(el)
  })

  // Hobby cards - scale in
  const hobbyCards = document.querySelectorAll(".hobby-card")
  hobbyCards.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "scale(0.9)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    scaleObserver.observe(el)
  })

  // Contact cards - fade up with stagger
  const contactCards = document.querySelectorAll(".contact-card")
  contactCards.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    fadeUpObserver.observe(el)
  })

  // About content - slide in from sides
  const aboutImage = document.querySelector(".about-image")
  const aboutText = document.querySelector(".about-text")

  if (aboutImage) {
    aboutImage.style.opacity = "0"
    aboutImage.style.transform = "translateX(-50px)"
    aboutImage.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    slideLeftObserver.observe(aboutImage)
  }

  if (aboutText) {
    aboutText.style.opacity = "0"
    aboutText.style.transform = "translateX(50px)"
    aboutText.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    slideRightObserver.observe(aboutText)
  }

  // Contact content - fade up
  const contactContent = document.querySelector(".contact-content")
  if (contactContent) {
    contactContent.style.opacity = "0"
    contactContent.style.transform = "translateY(40px)"
    contactContent.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    fadeUpObserver.observe(contactContent)
  }

  // Add click handlers for buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
})

function switchTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content")
  tabContents.forEach((content) => {
    content.classList.remove("active")
  })

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button")
  tabButtons.forEach((button) => {
    button.classList.remove("active")
  })

  // Show selected tab content
  const selectedTab = document.getElementById(tabName)
  if (selectedTab) {
    selectedTab.classList.add("active")
  }

  // Add active class to clicked button
  const clickedButton = event.target
  clickedButton.classList.add("active")
}

// Smooth scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function toggleReadMore(button) {
  const workCard = button.closest(".work-card")
  const workDetails = workCard.querySelector(".work-details")
  const isExpanded = workDetails.style.display !== "none"

  if (isExpanded) {
    // Collapse the details
    workDetails.style.display = "none"
    button.textContent = "Read More"
    workCard.classList.remove("expanded")
  } else {
    // Expand the details
    workDetails.style.display = "block"
    button.textContent = "Read Less"
    workCard.classList.add("expanded")

    // Smooth scroll to keep the card in view
    setTimeout(() => {
      workCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }, 100)
  }
}

const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .section-divider {
        width: 0;
        transition: width 0.8s ease;
    }

    .work-details {
        display: none;
    }

    .work-card.expanded .work-details {
        display: block;
    }
`
document.head.appendChild(style)
