# Ankit Yadav — Software Engineering Portfolio

🌐 **Live Deployment:** https://ankityadav11005.netlify.app/  
📄 **Updated Resume:** [12313015.pdf](./12313015.pdf)  
📬 **Email:** [ankityadav11005@gmail.com](mailto:ankityadav11005@gmail.com) | 📱 **Mobile:** +91-9785545041  
💼 **LinkedIn:** [linkedin.com/in/ankityadav005](https://www.linkedin.com/in/ankityadav005/) | 🐙 **GitHub:** [github.com/ankityadav281](https://github.com/ankityadav281)

---

## 👨‍💻 About Me

Computer Science and Engineering undergraduate at **Lovely Professional University (2023–2027)** with a **7.32 CGPA**. Competitive programmer with a **1600 LeetCode peak rating** and **200+ problems solved**, specializing in full-stack web engineering (**MERN**, **Django REST Framework**), mobile engineering (**Android / Jetpack Compose**), and algorithmic systems (**C++**).

---

## 🌟 Featured Projects

| Project | Tech Stack | Highlights |
| :--- | :--- | :--- |
| **[Paramarsh](https://github.com/ankityadav281/Paramarsh)** | React 19, Express 5, MySQL, xAI Grok API, JWT | AI-powered medical consultation platform with Grok clinical triage, real-time cross-tab chat via `BroadcastChannel` & `StorageEvent`, and resilient in-memory database failover. |
| **[CampusCart](https://github.com/ankityadav281/CampusCart)** | React 18, Tailwind CSS v4, Django 6.1, DRF, SQLite | University multi-vendor marketplace with atomic multi-vendor checkout (`transaction.atomic()` + `select_for_update()`), scheduled break-time pickup slots, merchant onboarding with auto-handle derivation, and multi-tenant shop dashboard. |
| **[MineImpact](https://github.com/ankityadav281/MineImpact)** | React 18, Node.js, Express, MongoDB, jsPDF | Industrial Life Cycle Assessment (LCA) intelligence platform with an ISO 14044/IPCC engine quantifying carbon footprint (GWP), acidification, water depletion, and automated executive PDF reporting. |
| **[Aasha](https://github.com/yosobanta/Aasha)** | Kotlin, Jetpack Compose, Room SQLite, Firebase, WorkManager, Hilt | Mission-critical offline-first Android app for rural community health workers (ASHA) with Clean Architecture, fuzzy duplicate detection, encrypted MPIN security, and trilingual UI (Hindi, Bengali, Marathi). |
| **[Student Management System](https://github.com/ankityadav281/Student-Management-System)** | Python, Django, Node.js, Relational DB, JWT | Academic SIS and ERP with tri-role RBAC (Admin, Teacher, Student), real-time attendance analytics, automated GPA & report cards, and fee invoice management. |
| **[Parking Slot Allocation](https://github.com/ankityadav281/parking-slot-allocation)** | C++, STL, Heaps, Priority Queues, Hash Maps | High-efficiency parking facility management system leveraging $O(\log n)$ min-heap slot allocation, collision avoidance, and dynamic vehicle routing. |

---

## 🛠️ Skills & Technologies

- **Languages:** C++, Java, JavaScript (ES6+), Python, C, SQL, Kotlin
- **Frontend & UI:** React.js (v18 & v19), Jetpack Compose, Vite, Tailwind CSS, HTML5, CSS3, Lucide React
- **Backend & APIs:** Node.js, Express.js 5, Django 6.1, Django REST Framework, RESTful APIs, JWT, bcryptjs
- **Databases & Cloud:** MySQL (mysql2 pool), MongoDB & Mongoose, SQLite3, Firebase (Firestore & Auth), Room DB
- **Core CS Fundamentals:** Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, OOP
- **Competitive Programming:** 1600 LeetCode peak rating, 200+ solved problems on LeetCode & GFG, Top LeetCode Badges

---

## 🎓 Education

- **Lovely Professional University (Punjab, India)** — B.Tech Computer Science and Engineering (2023 – Present) · **CGPA: 7.32**
- **New Bright Moon Sr. Sec. School (Jaipur, Rajasthan)** — Intermediate (PCM) · **94.60%** (2020 – 2021)
- **New Bright Moon Sr. Sec. School (Jaipur, Rajasthan)** — Matriculation · **87.00%** (2018 – 2019)

---

## 📜 Certifications

- **Java Programming** — iamneo (May '25)
- **Cloud Computing** — NPTEL · IIT Kharagpur (Apr '25)
- **Data Structure and Algorithm** — iamneo (Dec '24)
- **Object Oriented Programming** — iamneo (Dec '24)
- **Python for Data Science** — Board Infinity

---

## 📁 Modular Architecture

The portfolio is organized into clean, maintainable modular components with dedicated `.html`, `.css`, and `.js` files:

```
portfolio/
├── index.html                 # Production entrypoint serving full static DOM
├── 12313015.pdf               # Official updated resume
├── ankit.jpeg                 # High-resolution portrait photograph
│
├── components/                # Independent HTML component templates
│   ├── navbar.html            # Floating pill navigation bar & mobile drawer
│   ├── hero.html              # Hero portrait stage, halftone effect & name typography
│   ├── stats.html             # 4-column statistics & metric showcase
│   ├── about.html             # Dotted 3D wave canvas & editorial philosophy
│   ├── projects.html          # Editorial layout for all 6 production projects
│   ├── skills.html            # Minimal typographic skills grid & disciplines
│   ├── experience.html        # Academic milestones & industry training
│   ├── contact.html           # Minimal contact inquiry form & direct links
│   ├── footer.html            # Minimal editorial footer
│   └── modals.html            # 6 deep-dive technical specification modals
│
├── css/                       # Modular CSS stylesheets
│   ├── variables.css          # Design tokens (colors, fonts, borders, shadows)
│   ├── base.css               # Reset, typography, background grid lines
│   ├── navbar.css             # Floating pill nav styles & mobile drawer
│   ├── hero.css               # Hero portrait & typography layout
│   ├── stats.css              # Statistics row & vertical hairline dividers
│   ├── about.css              # Editorial quote & wave container layout
│   ├── projects.css           # Project cards & hover interactions
│   ├── skills.css             # Skills & disciplines 4-column grid
│   ├── experience.css         # Academic & training cards
│   ├── contact.css            # Minimal underline form fields & submit button
│   ├── modals.css             # Modal blur backdrop & specification overlays
│   ├── footer.css             # Footer layout & link styling
│   ├── responsive.css         # Universal multi-breakpoint responsive engine
│   └── main.css               # Master stylesheet importing all modular CSS files
│
└── js/                        # Modular JavaScript scripts
    ├── navigation.js          # Mobile drawer toggle & drawer close handling
    ├── modals.js              # Modal open/close controllers & Escape listener
    ├── contact.js             # Form validation & inquiry dispatching
    ├── wave.js                # 3D mathematical perspective dotted wave canvas
    └── main.js                # Master coordinator script
```

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/ankityadav281/portfolio.git
cd portfolio

# Open with any static server or live server
# For Python:
python -m http.server 3000

# Or with Node.js:
npx serve .
```

Visit `http://localhost:3000` in your web browser.

---

© 2026 Ankit Yadav. Licensed under the MIT License.
