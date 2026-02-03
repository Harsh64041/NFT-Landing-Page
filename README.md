# NFTverse - NFT Platform Landing Page

A fully responsive, high-performance landing page for a digital NFT marketplace. This project was built to demonstrate advanced CSS Grid layout techniques without relying on Flexbox or external frameworks.

## 🚀 Live Demo
**https://harsh64041.github.io/NFT-Landing-Page/**

## 🛠️ Tech Stack
* **HTML5** - Semantic markup.
* **CSS3** - Advanced Grid layouts, Variables, Animations, and Media Queries.
* **JavaScript (Vanilla)** - DOM manipulation for modals, toggles, and sticky navigation.

## 📋 Approach
I adopted a **mobile-first philosophy**, ensuring the layout scales gracefully from small screens to large desktops. The core constraint of this project was to **use only CSS Grid** for all layout requirements.

* **Layout:** I utilized `display: grid` for everything, including one-dimensional row layouts (like the Navbar and Footer) that typically use Flexbox. This required precise column sizing (`grid-template-columns: auto 1fr auto`) and alignment (`align-items: center`).
* **Theming:** I implemented a robust CSS Variable system for Light/Dark mode, ensuring instant contrast switching without code duplication.

## 🧠 Struggles & Solutions
**The Filter Toggle Animation:**
The hardest challenge was creating the sliding "pill" animation for the filter bar (`All | Cheap | Premium`) using only Grid. Calculating the correct `33.33%` width and positioning the sliding background `div` behind the text labels while maintaining responsiveness was difficult without Flexbox's centering capabilities. I solved this by using absolute positioning within a relative grid container.

## ✅ Requirements Met
* [x] **CSS Grid Only:** Zero usage of Flexbox throughout the project.
* [x] **Fully Responsive:** Adapts cleanly to Mobile, Tablet, and Desktop.
* [x] **Dark/Light Mode:** Includes a contrast-optimized dark theme with smooth transitions.
* [x] **Hover Interactions:** Cards lift on hover; buttons have color shifts.
* [x] **Accessibility:** Added keyboard focus states (`outline`) for better navigation.

## ✨ Bonus Features Added
1.  **Sticky Navbar:** The navigation bar changes appearance (glassmorphism effect) when scrolling.
2.  **Live Countdown Timer:** A dynamic JavaScript timer on the Premium "Cat" card.
3.  **Like Interaction:** Heart buttons on NFT cards that toggle state.
4.  **Mobile Menu:** A custom hamburger menu implementation for small screens.

## ⚠️ Known Issues
* The infinite scrolling marquee in the footer is purely CSS-based. It runs smoothly but may not pause on hover in some older browsers.

## 📦 How to Run
1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/Integra.git](https://github.com/your-username/Integra.git)
    ```
2.  Navigate to the project folder.
3.  Open `index.html` in any modern web browser.

---
**Author:** Harsh Vardhan Sharma

**Submitted for:** Skill Evaluation
