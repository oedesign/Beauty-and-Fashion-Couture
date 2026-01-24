 const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const dropdown = document.getElementById("dropdown");
  const dropdownToggle = document.getElementById("dropdownToggle");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });




  // Hero Slider

  const slides = document.querySelectorAll(".hero-slide");
  const nextBtn = document.querySelector(".hero-arrow.right");
  const prevBtn = document.querySelector(".hero-arrow.left");

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 6000);

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
  }

  
  // Children's Section Tabs
   const childSlides = document.querySelectorAll(".children-slide");
  const childNextBtn = document.querySelector(".children-arrow.right");
  const childPrevBtn = document.querySelector(".children-arrow.left");
  let childCurrent = 0;
  let childInterval = setInterval(nextChildSlide, 5000); // 5s per slide

  function showChildSlide(index) {
    childSlides.forEach(slide => slide.classList.remove("active"));
    childSlides[index].classList.add("active");
  }

  function nextChildSlide() {
    childCurrent = (childCurrent + 1) % childSlides.length;
    showChildSlide(childCurrent);
  }

  function prevChildSlide() {
    childCurrent = (childCurrent - 1 + childSlides.length) % childSlides.length;
    showChildSlide(childCurrent);
  }

  childNextBtn.addEventListener("click", () => {
    nextChildSlide();
    resetChildInterval();
  });

  childPrevBtn.addEventListener("click", () => {
    prevChildSlide();
    resetChildInterval();
  });

  function resetChildInterval() {
    clearInterval(childInterval);
    childInterval = setInterval(nextChildSlide, 5000);
  }

  // Adult Section Tabs
  const adultSlides = document.querySelectorAll(".adult-slide");
  const adultNextBtn = document.querySelector(".adult-arrow.right");
  const adultPrevBtn = document.querySelector(".adult-arrow.left");
  let adultCurrent = 0;
  let adultInterval = setInterval(nextAdultSlide, 5000);

  function showAdultSlide(index) {
    adultSlides.forEach(slide => slide.classList.remove("active"));
    adultSlides[index].classList.add("active");
  }

  function nextAdultSlide() {
    adultCurrent = (adultCurrent + 1) % adultSlides.length;
    showAdultSlide(adultCurrent);
  }

  function prevAdultSlide() {
    adultCurrent = (adultCurrent - 1 + adultSlides.length) % adultSlides.length;
    showAdultSlide(adultCurrent);
  }

  adultNextBtn.addEventListener("click", () => {
    nextAdultSlide();
    resetAdultInterval();
  });

  adultPrevBtn.addEventListener("click", () => {
    prevAdultSlide();
    resetAdultInterval();
  });

  function resetAdultInterval() {
    clearInterval(adultInterval);
    adultInterval = setInterval(nextAdultSlide, 5000);
  }


  // Custom section tabs can be added similarly
  const customSlides = document.querySelectorAll(".custom-slide");
  const customNextBtn = document.querySelector(".custom-arrow.right");
  const customPrevBtn = document.querySelector(".custom-arrow.left");
  let customCurrent = 0;
  let customInterval = setInterval(nextCustomSlide, 5000);

  function showCustomSlide(index) {
    customSlides.forEach(slide => slide.classList.remove("active"));
    customSlides[index].classList.add("active");
  }

  function nextCustomSlide() {
    customCurrent = (customCurrent + 1) % customSlides.length;
    showCustomSlide(customCurrent);
  }

  function prevCustomSlide() {
    customCurrent = (customCurrent - 1 + customSlides.length) % customSlides.length;
    showCustomSlide(customCurrent);
  }

  customNextBtn.addEventListener("click", () => {
    nextCustomSlide();
    resetCustomInterval();
  });

  customPrevBtn.addEventListener("click", () => {
    prevCustomSlide();
    resetCustomInterval();
  });

  function resetCustomInterval() {
    clearInterval(customInterval);
    customInterval = setInterval(nextCustomSlide, 5000);
  }


// back to top

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
