# YelpCamp 🏕️

A full-stack web application for discovering and reviewing campgrounds. This project was built to demonstrate proficiency in the **MERN stack**, server-side rendering, and secure authentication workflows.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=white)

---

## 🚀 Features
- **Authentication:** Secure user registration, login, and session persistence using Passport.js.
- **CRUD Functionality:** Full Create, Read, Update, and Delete operations for campgrounds and user reviews.
- **Cloud Integration:** Dynamic image uploads and management using Cloudinary.
- **Validation & Security:** Server-side data validation (Joi) and security middleware to prevent unauthorized access.
- **Interactive UI:** Dynamic EJS templating with Bootstrap for a responsive design.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS
- **Authentication:** Passport.js (Local Strategy)
- **Services:** Cloudinary (Images), Mapbox (Geocoding)

## 📂 Project Structure
```text
/
├── models/          # Mongoose schemas (Campground, User, Review)
├── routes/          # Express route handlers
├── views/           # EJS templates
├── public/          # Client-side assets (CSS, JS)
├── middleware/      # Custom authentication & error handling
├── seeds/           # Database seeding scripts
└── .env             # Environment variables (not tracked)
```

## ⚙️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance (local or Atlas)
- Cloudinary account

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Nerosegnofic/YelpCamp.git](https://github.com/Nerosegnofic/YelpCamp.git)
   cd YelpCamp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Copy `.env.example` to `.env` and fill in your keys:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   ```
4. Start the application:
   ```bash
   npm run dev
   ```

## 🧠 Key Learnings
Building this project was a significant milestone in my development as a Backend Engineer. Key technical challenges I overcame include:
- **Managing Relationships:** Designing efficient Mongoose schemas to link users, campgrounds, and reviews.
- **Middleware Design:** Implementing custom middleware to enforce authorization (e.g., ensuring only the campground creator can edit or delete their posts).
- **Asynchronous Operations:** Handling image uploads to Cloudinary while simultaneously saving data to MongoDB using `async/await`.

---

## 📬 Contact
**Ahmed Abdelnabi**  
[GitHub](https://github.com/Nerosegnofic) | [LinkedIn](https://linkedin.com/in/YOUR_LINKEDIN)  
*Backend Engineer*
