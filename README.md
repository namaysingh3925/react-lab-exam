<div align="center">

# ⚛️ React Lab Exam & Frontend Practice Repository

<p align="center">
  <strong>A comprehensive collection of practical React.js, Redux Toolkit, React Router, and modern JavaScript laboratory assignments and frontend applications.</strong>
</p>

[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

</div>

## 📖 Table of Contents

- [Overview](#-overview)
- [Repository Architecture](#-repository-architecture)
- [Lab Projects & Modules](#-lab-projects--modules)
  - [1. Admin Dashboard with Protected Routes (`admin`)](#1-admin-dashboard-with-protected-routes-admin)
  - [2. Weather Information Dashboard (`api`)](#2-weather-information-dashboard-api)
  - [3. Interactive Calculator App (`calculator`)](#3-interactive-calculator-app-calculator)
  - [4. Feedback Form System (`feedback`)](#4-feedback-form-system-feedback)
  - [5. Multi-Page Navigation with React Router (`multipages`)](#5-multi-page-navigation-with-react-router-multipages)
  - [6. Developer Portfolio Website (`portfo`)](#6-developer-portfolio-website-portfo)
  - [7. Shopping Cart Management with Redux Toolkit (`redux`)](#7-shopping-cart-management-with-redux-toolkit-redux)
  - [8. Student Registration Form with Validation (`signup`)](#8-student-registration-form-with-validation-signup)
  - [9. Student Marks Analytics & Analyzer (`student_marks`)](#9-student-marks-analytics--analyzer-student_marks)
  - [10. Theme Preference Manager with Custom Hook (`theame`)](#10-theme-preference-manager-with-custom-hook-theame)
- [Key Concepts Covered](#-key-concepts-covered)
- [Getting Started & Installation](#-getting-started--installation)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Running a Vite React Project](#running-a-vite-react-project)
  - [Running a Vanilla HTML/JS Project](#running-a-vanilla-htmljs-project)
- [Project Directory Structure](#-project-directory-structure)
- [Contributing](#-contributing)
- [Author & License](#-author--license)

---

## 🌟 Overview

The **React Lab Exam** repository serves as an all-in-one hands-on lab repository demonstrating foundational to intermediate frontend engineering concepts. It contains 10 distinct, self-contained mini-projects covering:

- **Declarative UI development** using React 18 & Vite.
- **Global State Management** utilizing Redux Toolkit (`createSlice`, `configureStore`, `useDispatch`, `useSelector`).
- **Client-Side Routing** with React Router DOM v6 (Nested routes, layout routes, URL parameters, 404 fallbacks, and authentication-based route guarding).
- **Custom React Hooks** and modular component reusability.
- **Form state management and validation logic**.
- **Modern ES6+ functional programming** (`map`, `filter`, `reduce`) applied to real-world analytical tasks.

---

## 📁 Repository Architecture

Each directory in this repository is configured as an independent module. React applications are scaffolded with **Vite** for fast hot-module replacement (HMR), while standard web exercises run directly in the browser.

| # | Directory | Type | Core Technologies | Focus Area |
|---|-----------|------|-------------------|------------|
| 1 | [`admin`](file:///c:/Users/Dell/react-lab-exam/admin) | React (Vite) | React Router DOM, Protected Routes | Authentication flow & nested admin layout |
| 2 | [`api`](file:///c:/Users/Dell/react-lab-exam/api) | React (Vite) | `useState`, `useEffect`, Card Layout | Mock API / Weather data rendering |
| 3 | [`calculator`](file:///c:/Users/Dell/react-lab-exam/calculator) | Vanilla JS | HTML5, CSS3, DOM Events | Arithmetic operations & UI state |
| 4 | [`feedback`](file:///c:/Users/Dell/react-lab-exam/feedback) | React (Vite) | Controlled Components, `useState` | Feedback collection & submission handling |
| 5 | [`multipages`](file:///c:/Users/Dell/react-lab-exam/multipages) | React (Vite) | React Router DOM v6, Dynamic Routes | Layout wrapper, dynamic URL params (`:id`), 404 page |
| 6 | [`portfo`](file:///c:/Users/Dell/react-lab-exam/portfo) | React (Vite) | Component-Based Architecture | Modular personal developer portfolio |
| 7 | [`redux`](file:///c:/Users/Dell/react-lab-exam/redux) | React (Vite) | Redux Toolkit, React-Redux | Global cart state, item additions/removals, billing |
| 8 | [`signup`](file:///c:/Users/Dell/react-lab-exam/signup) | React (Vite) | Forms, Inline Validation, Conditional Render | Form constraint checks & feedback |
| 9 | [`student_marks`](file:///c:/Users/Dell/react-lab-exam/student_marks) | Vanilla JS | ES6 `map`, `filter`, `reduce`, DOM API | Statistical aggregation, filtering & topper detection |
| 10 | [`theame`](file:///c:/Users/Dell/react-lab-exam/theame) | React (Vite) | Custom Hook (`useTheme`), CSS Styling | Light/Dark theme switching logic |

---

## 🔬 Lab Projects & Modules

### 1. Admin Dashboard with Protected Routes (`admin`)
- **Path:** [`admin/`](file:///c:/Users/Dell/react-lab-exam/admin)
- **Description:** An administrative management portal featuring user authentication and protected routing.
- **Key Features:**
  - `ProtectedRoute` higher-order component checking login status before granting dashboard access.
  - Nested routing hierarchy for `/dashboard/users`, `/dashboard/reports`, and `/dashboard/settings`.
  - Automatic redirect/fallback handling for unauthorized access attempts.

### 2. Weather Information Dashboard (`api`)
- **Path:** [`api/`](file:///c:/Users/Dell/react-lab-exam/api)
- **Description:** A weather statistics visualizer displaying meteorological data for key metropolitan cities.
- **Key Features:**
  - Component lifecycle initialization using `useEffect`.
  - Dynamic dataset rendering for temperature, weather conditions, and city metrics.
  - Card-based grid presentation with clean CSS styling.

### 3. Interactive Calculator App (`calculator`)
- **Path:** [`calculator/`](file:///c:/Users/Dell/react-lab-exam/calculator)
- **Description:** A browser-based calculator implementing standard arithmetic expressions.
- **Key Features:**
  - Real-time display update and string-based expression evaluation.
  - Clear (`C`) and single-character backspace (`DEL`) functionality.
  - Error-safe computation with `try...catch` handling.

### 4. Feedback Form System (`feedback`)
- **Path:** [`feedback/`](file:///c:/Users/Dell/react-lab-exam/feedback)
- **Description:** Controlled user feedback submission interface.
- **Key Features:**
  - Controlled inputs for Name, Email, and multi-line Feedback comments.
  - Prevent default form submission and trigger user acknowledgement alerts.
  - Clean, centered responsive form styling.

### 5. Multi-Page Navigation with React Router (`multipages`)
- **Path:** [`multipages/`](file:///c:/Users/Dell/react-lab-exam/multipages)
- **Description:** A multi-page SPA demonstrating complete routing capabilities using React Router v6.
- **Key Features:**
  - Shared layout wrapper (`<Layout />`) with persistent navigation links and footer.
  - Dynamic route parameters (`/user/:id`) with runtime parameter extraction.
  - Catch-all 404 Route (`path="*"`) directing users to a dedicated `NotFound` component.

### 6. Developer Portfolio Website (`portfo`)
- **Path:** [`portfo/`](file:///c:/Users/Dell/react-lab-exam/portfo)
- **Description:** A modular, component-driven personal developer portfolio.
- **Key Features:**
  - Atomic component design: `Navbar`, `Hero`, `About`, `Skills`, and `Footer`.
  - Responsive showcase for developer bio, technical stack, and contact links.

### 7. Shopping Cart Management with Redux Toolkit (`redux`)
- **Path:** [`redux/`](file:///c:/Users/Dell/react-lab-exam/redux)
- **Description:** An e-commerce cart manager with global state synchronization powered by Redux Toolkit.
- **Key Features:**
  - Dedicated cart slice (`cartSlice.js`) with `addToCart` and `removeFromCart` reducers.
  - Real-time derived state calculation for total item count and cumulative price calculation.
  - Product catalog listing with instant cart updates.

### 8. Student Registration Form with Validation (`signup`)
- **Path:** [`signup/`](file:///c:/Users/Dell/react-lab-exam/signup)
- **Description:** Registration form with client-side field validation.
- **Key Features:**
  - Input constraint checks (Name ≥ 2 characters, valid email `@` check, Password ≥ 6 characters).
  - Dynamic inline error highlighting.
  - Conditional rendering: renders a success confirmation view upon successful validation.

### 9. Student Marks Analytics & Analyzer (`student_marks`)
- **Path:** [`student_marks/`](file:///c:/Users/Dell/react-lab-exam/student_marks)
- **Description:** A student performance dashboard demonstrating advanced ES6 array operations.
- **Key Features:**
  - **All Students:** Dynamically renders student cards with individual totals and averages using `.map()`.
  - **Passed Students:** Filters students achieving $\ge 60\%$ average using `.filter()`.
  - **Class Topper:** Finds the highest-scoring student using `.reduce()`.
  - **Class Average:** Computes collective batch performance using `.reduce()`.

### 10. Theme Preference Manager with Custom Hook (`theame`)
- **Path:** [`theame/`](file:///c:/Users/Dell/react-lab-exam/theame)
- **Description:** Theme switcher utilizing custom React hooks for state isolation.
- **Key Features:**
  - Custom hook `useTheme` managing active theme state (`Light` / `Dark`) and toggle action.
  - Dynamic CSS class switching altering background colors and typography styling.

---

## 💡 Key Concepts Covered

```
┌─────────────────────────────────────────────────────────────┐
│                    REACT & JS CONCEPTS                      │
├───────────────────────────────┬─────────────────────────────┤
│ ⚛️ Component Fundamentals      │ Functional Components, JSX │
│ 🔄 State & Lifecycle          │ useState, useEffect         │
│ 🎯 Custom Hooks               │ useTheme abstraction        │
│ 🗄️ Global State Management    │ Redux Toolkit, useSelector  │
│ 🧭 Routing & Navigation       │ BrowserRouter, Route, Link  │
│ 🛡️ Security & Route Guards    │ ProtectedRoute, Auth State  │
│ 📋 Form Architecture          │ Controlled inputs, Errors   │
│ ⚡ Modern JavaScript (ES6+)   │ map, filter, reduce, arrow  │
└───────────────────────────────┴─────────────────────────────┘
```

---

## 🚀 Getting Started & Installation

### Prerequisites

Ensure you have the following installed on your local development machine:

- **Node.js** (v18.0.0 or higher recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**
- Modern Web Browser (Chrome, Firefox, Edge, Safari)

### Cloning the Repository

```bash
git clone https://github.com/bobby404-K/react-lab-exam.git
cd react-lab-exam
```

---

### Running a Vite React Project

To run any of the React applications (e.g., `redux`, `admin`, `multipages`, `theame`, etc.):

1. Navigate into the target project folder:
   ```bash
   cd redux
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the displayed local URL (typically `http://localhost:5173`).

---

### Running a Vanilla HTML/JS Project

For standalone projects like `calculator` or `student_marks`:

- Simply open the corresponding `.html` file (e.g., `calculator/cal.html` or `student_marks/student.html`) directly in any web browser.
- Alternatively, serve via VS Code **Live Server** extension or `npx serve`:
  ```bash
  cd calculator
  npx serve .
  ```

---

## 📂 Project Directory Structure

```text
react-lab-exam/
├── admin/                  # Admin portal with Protected Routes
│   ├── src/
│   │   ├── components/     # Protectedroutes.jsx
│   │   ├── pages/          # Login, Dashboard, Users, Reports, Settings
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── api/                    # Weather dashboard (useEffect & state)
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── calculator/             # Vanilla JS Calculator application
│   ├── cal.html
│   ├── cal.css
│   └── cal.js
├── feedback/               # Controlled Feedback form
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── multipages/             # React Router multi-page navigation
│   ├── src/
│   │   ├── Pages/          # Home, About, Services, Contact, User, Notfound
│   │   ├── components/     # Layout, Navbar, Footer
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── portfo/                 # Personal developer portfolio
│   ├── src/
│   │   ├── comopents/      # Navbar, Hero, About, Skills, Footer
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── redux/                  # Redux Toolkit shopping cart
│   ├── src/
│   │   ├── redux/          # store.js, cartSlice.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── signup/                 # Registration form with validation
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── student_marks/          # JavaScript marks analyzer (map, filter, reduce)
│   ├── student.html
│   ├── student.css
│   └── student.js
├── theame/                 # Theme preference manager with custom hook
│   ├── src/
│   │   ├── Hooks/          # Usetheme.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md               # Repository documentation
```

---

## 🤝 Contributing

Contributions, feedback, and improvements are always welcome!

1. Fork the repository (`git fork`).
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 Author & License

- **Author:** [bobby404-K](https://github.com/bobby404-K)
- **Repository:** [react-lab-exam](https://github.com/bobby404-K/react-lab-exam)
- **License:** This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <sub>Built with ❤️ for React learners and frontend developers.</sub>
</div>
