// Smooth scroll for navigation links
document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Animate product cards on scroll
  const productCards = document.querySelectorAll(".product-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, {
    threshold: 0.2
  });
  productCards.forEach(card => observer.observe(card));
  
  // Back to Top Button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerText = "↑ Top";
  backToTopBtn.style.position = "fixed";
  backToTopBtn.style.bottom = "30px";
  backToTopBtn.style.right = "30px";
  backToTopBtn.style.padding = "10px 15px";
  backToTopBtn.style.border = "none";
  backToTopBtn.style.borderRadius = "6px";
  backToTopBtn.style.backgroundColor = "#ff6f61";
  backToTopBtn.style.color = "white";
  backToTopBtn.style.cursor = "pointer";
  backToTopBtn.style.display = "none";
  backToTopBtn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  backToTopBtn.style.zIndex = "999";
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Add current year in footer
  const footer = document.querySelector("footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Maa's Home Store. All rights reserved.`;
  }
  