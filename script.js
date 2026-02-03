/* --- NAVIGATION LOGIC --- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Mobile Menu Toggle
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Sticky Navbar Logic
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* --- MODALS LOGIC --- */
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const artistModal = document.getElementById("artistModal");

if(loginBtn) loginBtn.addEventListener("click", () => loginModal.classList.add("active"));
if(signupBtn) signupBtn.addEventListener("click", () => signupModal.classList.add("active"));

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("active"));
  }
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
  }
});

// Switch between Login/Signup
document.querySelectorAll(".switch span").forEach(span => {
  span.addEventListener("click", () => {
    loginModal.classList.remove("active");
    signupModal.classList.remove("active");
    const target = span.getAttribute("data-open");
    document.getElementById(target + "Modal").classList.add("active");
  });
});

// Password Toggle
document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = toggle.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
  });
});

/* --- ARTIST DATA --- */
const artistData = {
  andrew: {
    name: "Andrew Garfield",
    bio: "Andrew Garfield is a British-American actor and artist best known for his expressive performances and creative influence in digital and visual art communities.",
    wiki: "https://en.wikipedia.org/wiki/Andrew_Garfield"
  },
  jen: {
    name: "Jen Stark",
    bio: "Jen Stark is an American visual artist known for her vibrant, psychedelic sculptures and digital artworks inspired by geometry and patterns.",
    wiki: "https://en.wikipedia.org/wiki/Jen_Stark"
  },
  casey: {
    name: "Casey Reas",
    bio: "Casey Reas is an American artist and designer, widely recognized as the co-creator of Processing and a pioneer of generative and computational art.",
    wiki: "https://en.wikipedia.org/wiki/Casey_Reas"
  }
};

const artistName = document.getElementById("artistName");
const artistBio = document.getElementById("artistBio");
const artistWiki = document.getElementById("artistWiki");

document.querySelectorAll(".artist-card").forEach(card => {
  card.addEventListener("click", () => {
    const artist = artistData[card.dataset.artist];
    artistName.textContent = artist.name;
    artistBio.textContent = artist.bio;
    artistWiki.href = artist.wiki;
    artistModal.classList.add("active");
  });
});

/* --- FILTER LOGIC --- */
const filterButtons = document.querySelectorAll(".filter button");
const indicator = document.querySelector(".filter-indicator");

filterButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter button.active").classList.remove("active");
    btn.classList.add("active");
    indicator.style.transform = `translateX(${index * 100}%)`;

    document.querySelectorAll("#marketplace .card").forEach(card => {
      card.style.display =
        btn.dataset.filter === "all" || card.dataset.price === btn.dataset.filter
          ? "block"
          : "none";
    });
  });
});

/* --- FEATURE: LIKE BUTTON --- */
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    btn.classList.toggle('liked');
  });
});

/* --- FEATURE: COUNTDOWN --- */
const countdownEl = document.getElementById('countdown');
if(countdownEl) {
  let time = 3600 * 2 + 1500; // 2h 25m in seconds
  setInterval(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    countdownEl.innerText = `Ending in: ${hours}:${minutes}:${seconds}`;
    if(time > 0) time--;
  }, 1000);
}

/* --- SCROLL TO TOP --- */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* --- SCROLL REVEAL --- */
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* --- NEWSLETTER --- */
const subscribeBtn = document.getElementById("subscribeBtn");
const newsletterEmail = document.getElementById("newsletterEmail");
const toast = document.getElementById("successToast");

if (subscribeBtn && newsletterEmail) {
  subscribeBtn.addEventListener("click", () => {
    if (newsletterEmail.value.trim() !== "") {
      newsletterEmail.value = "";
      newsletterEmail.placeholder = "Thanks for subscribing!";
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    }
  });
}

/* --- THEME TOGGLE --- */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "light" : "dark");
});