# 🌍 Wanderlust - Travel Listing Web App

**Wanderlust** is a full-stack web application built with Node.js, Express, MongoDB, and EJS. It allows users to explore, add, and review travel destinations with support for image uploads (via Cloudinary) and location services (via Mapbox). Authentication, validation, and session handling are built-in.

---

## 🚀 Features

- 🧭 Browse and explore travel listings
- 📝 Create, update, and delete your own listings
- 🖼️ Upload images using Cloudinary
- 🌐 Tag locations using Mapbox
- 💬 Post and manage reviews
- 🔐 User authentication with Passport.js
- 🧪 Server-side form validation (Joi)
- 💾 Session persistence with MongoDB

---

## 📦 Tech Stack

| Layer        | Technology                            |
|--------------|----------------------------------------|
| **Frontend** | HTML, CSS, EJS                         |
| **Backend**  | Node.js, Express.js                    |
| **Database** | MongoDB with Mongoose                  |
| **Auth**     | Passport.js + Sessions                 |
| **Storage**  | Cloudinary (image uploads), Multer     |
| **Maps**     | Mapbox SDK                             |
| **Validation** | Joi                                  |
| **Templating** | EJS with EJS-Mate layout engine      |

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create a .env File
Create a .env file in the root directory and add your credentials:

env
Copy
Edit
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token
ATLAS_URL=your_mongodb_connection_string
SECRET=your_cookie_secret
Note: Never commit your .env file to version control — it’s listed in .gitignore.

4. Start the Server
bash
Copy
Edit
node app.js
Or use nodemon in development:

bash
Copy
Edit
npx nodemon app.js
Visit: http://localhost:8080

🗂️ Project Structure
csharp
Copy
Edit
.
├── app.js                 # Entry point
├── cloudConfig.js         # Cloudinary config
├── middleware.js          # Auth & validation middleware
├── scahem.js              # Joi validation schemas
├── views/                 # EJS templates
├── public/                # Static assets
├── routes/                # Route handlers
│   ├── listings_route.js
│   ├── review_route.js
│   └── user_route.js
├── model/                 # Mongoose models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/                 # Express error utilities
├── .env                   # Environment config (ignored)
├── .gitignore
├── package.json
✨ Screenshots
Include UI screenshots here if desired (homepage, listing page, etc.).

✅ Environment Variables Example
env
Copy
Edit
CLOUD_NAME=dyo2wb1s3
CLOUD_API_KEY=869672768841377
CLOUD_API_SECRET=your_secret

MAP_TOKEN=pk.eyJ1IjoiaGFyc2hpdC1zdXJ1IiwiYSI6Im...
ATLAS_URL=mongodb+srv://username:password@cluster.mongodb.net/your-db
SECRET=some_random_secret
🧑 Author
Vennu Sai Charan
📧 [YourEmail@example.com]
🔗 GitHub

📜 License
This project is licensed under the ISC License.
Feel free to use and modify with attribution.

💡 Future Enhancements
Add user profile pages

Enable location-based search

Support multiple image uploads per listing

Integrate image cropping/editing

📝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

python
Copy
Edit

Let me know if you'd like to:
- Add GitHub badges (e.g., Node version, license, contributors)
- Include screenshots or a deployment section (Heroku/Vercel)
- Make this multilingual (e.g., Hindi + English)

I'll help you tailor it even further.








Ask ChatGPT
You said:
yes


ChatGPT said:
Great! Here's an enhanced professional README.md for your project, now with:

GitHub-style badges

Optional deployment instructions

Clear multilingual (English + Hindi) sections

UI screenshot placeholder

Contributor invitation

markdown
Copy
Edit
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

yaml
Copy
Edit

---

### ✅ Next Steps (Optional):

If you share screenshots or want help deploying it on:
- **Render**
- **Vercel**
- **Railway**
- **GitHub Pages (static only)**

Let me know — I’ll help you build a deployment pipeline and insert the exact link in this README.







