# 🐝 Make Bee Trip

A modern, responsive, high-converting travel landing page built with React.

---

## 🚀 Overview

**Make Bee Trip** is a frontend travel platform UI where users can:

- ✈️ Book Flights
- 🚆 Book Trains
- 🚌 Book Buses
- 🏨 Book Hotels

Designed with a focus on:

- Conversion
- Clean UI/UX
- Scalability
- Performance

---

## 🧠 Tech Stack

- React (Vite)
- SCSS (modular architecture)
- React Hot Toast
- Feature-based folder structure

---

## 📁 Project Structure
```
src/
│
├── App.jsx
├── main.jsx
├── app.routes.jsx
│
├── assets/
│ ├── logo.png
│ ├── travel.png
│ └── travel1.png
│
├── components/
│ └── Navbar.jsx
│
├── features/
│ └── landing/
│ ├── components/
│ │ ├── Hero.jsx
│ │ ├── Features.jsx
│ │ ├── HowItWorks.jsx
│ │ ├── Destinations.jsx
│ │ ├── Testimonals.jsx
│ │ ├── AppCTA.jsx
│ │ ├── ContactForm.jsx
│ │ └── Footer.jsx
│ │
│ └── pages/
│ └── Landing.jsx
│
├── layouts/
│ └── RootLayout.jsx
│
├── styles/
│ ├── variables.scss
│ ├── globals.scss
│ └── main.scss
│
└── utils/
├── logger.utils.js
└── toaster.utils.js
```
---

## ✨ Features

- Responsive landing page
- Mobile drawer navigation
- Smooth scrolling
- Toast notifications
- Clean reusable components
- Feature-based architecture

---

## ⚙️ Setup
```bash
npm install
npm run dev
```
---

## 🔔 Toast Usage
```
import { showSuccess } from "@/utils/toaster.utils";

showSuccess("Booking started!");
```
---

## 🧾 Logger Usage
```
import { logInfo, logError } from "@/utils/logger.utils";

logInfo("User clicked CTA");
logError("Something failed", error);
```
---

## 🚀 Future Improvements

- Authentication system
- Real booking APIs
- Payment integration
- Analytics tracking
- Dark mode

---

## 👨‍💻 Author

Anshu
