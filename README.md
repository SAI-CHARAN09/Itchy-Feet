# 🌍 Wanderlust - Travel Listings App

![Node.js](https://img.shields.io/badge/Node.js-v22.13.1-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)
![License](https://img.shields.io/badge/license-ISC-blue)
![Status](https://img.shields.io/badge/status-maintained-brightgreen)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange)

> A full-stack web application to explore, post, and review travel destinations 🌄

---

## ✨ Overview

**Wanderlust** is a Node.js + MongoDB-based travel application where users can:

- 📍 Browse and explore listings
- 📝 Add and edit travel spots
- 💬 Post and manage reviews
- 🖼 Upload photos (via Cloudinary)
- 🧭 Use maps (via Mapbox)
- 🔐 Log in securely (via Passport.js)

---

## 📷 UI Preview

> *(Insert screenshots here)*  
> For example:
>
> ![Homepage](https://via.placeholder.com/800x400.png?text=Homepage+Preview)
> ![Listing Page](https://via.placeholder.com/800x400.png?text=Listing+Preview)

---

## 📦 Tech Stack

| Layer        | Technology                            |
|--------------|----------------------------------------|
| **Frontend** | HTML, CSS, EJS                         |
| **Backend**  | Node.js, Express.js                    |
| **Database** | MongoDB + Mongoose                     |
| **Authentication** | Passport.js + express-session    |
| **Storage**  | Cloudinary + Multer                    |
| **Location** | Mapbox SDK                             |
| **Validation** | Joi                                  |

---

## 🚀 Live Demo

> 🔗 Coming soon on Vercel/Render/Heroku

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js 20+
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

### 📥 Installation

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
npm install
⚙️ Setup Environment
Create a .env file:

env
Copy
Edit
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_key
CLOUD_API_SECRET=your_secret

MAP_TOKEN=your_mapbox_token
ATLAS_URL=your_mongodb_uri
SECRET=your_cookie_secret
▶️ Run the Server
bash
Copy
Edit
# For production
node app.js

# For development
npx nodemon app.js
Visit: http://localhost:8080

🌐 Project Structure
bash
Copy
Edit
.
├── app.js               # Entry point
├── cloudConfig.js       # Cloudinary config
├── middleware.js        # Auth & validation middleware
├── scahem.js            # Joi validation schemas
├── routes/              # Express routers
├── model/               # Mongoose models
├── views/               # EJS templates
├── public/              # Static files (CSS, JS)
├── .env                 # Secrets (not committed)
├── package.json
🌍 Multilingual Notes
🇬🇧 English
This project allows users to explore destinations, write reviews, and add photos for different places around the world.

🇮🇳 हिंदी
यह प्रोजेक्ट उपयोगकर्ताओं को यात्रा स्थलों को खोजने, समीक्षा लिखने और फ़ोटो अपलोड करने की सुविधा देता है।
इसमें यूज़र लॉगिन, रिव्यू सबमिट और मैप सपोर्ट जैसी विशेषताएं हैं।

🧑 Author
Vennu Sai Charan
📧 [vennusaicharan09@gmail.com]
🔗 GitHub

🤝 Contributing
We welcome contributions!

bash
Copy
Edit
# Fork it
# Create your feature branch
git checkout -b feature/awesome-feature

# Commit changes
git commit -m "Add awesome feature"

# Push to the branch
git push origin feature/awesome-feature

# Create a pull request
📜 License
ISC

🔮 Future Improvements
🌈 UI Redesign with Tailwind or Bootstrap

🔍 Full-text & location-based search

🌐 Deployment on cloud platforms

📱 Responsive layout

📸 Multiple image uploads

