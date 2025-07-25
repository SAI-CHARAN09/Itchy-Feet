# 🌍 Itchy-Feet - Travel Listings Web App

![Node.js](https://img.shields.io/badge/Node.js-v22.13.1-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)
![License](https://img.shields.io/badge/license-ISC-blue)
![Status](https://img.shields.io/badge/status-maintained-brightgreen)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange)

**Itchy-Feet** is a full-stack web application that allows users to explore, create, and review travel destinations. With cloud image hosting, interactive maps, and secure user authentication, it's your go-to project for travel listing management.

---


## 🔧 Features

- ✨ Create, update, and delete travel listings
- 🖼 Upload images using Cloudinary
- 🌍 Add and view locations on an interactive Mapbox map
- 💬 Leave reviews with ratings
- 🔐 Secure user authentication using Passport.js
- 🧪 Form validation with Joi
- ⚡ Flash messages for real-time feedback

---

## 💻 Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| Frontend     | HTML, CSS, EJS            |
| Backend      | Node.js, Express.js       |
| Database     | MongoDB + Mongoose        |
| Auth         | Passport.js + Sessions    |
| File Upload  | Multer + Cloudinary       |
| Maps         | Mapbox SDK                |
| Validation   | Joi                       |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SAI-CHARAN09/Itchy-Feet.git
cd Itchy-Feet
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root with:

env
Copy
Edit
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token
ATLAS_URL=your_mongodb_connection_string
SECRET=your_session_secret
⚠️ Ensure .env is listed in .gitignore and never pushed to GitHub.

4. Start the Application
bash
Copy
Edit
# For development
npx nodemon app.js

# Or for production
node app.js
Then go to: http://localhost:8080

📁 Project Structure
bash
Copy
Edit
Itchy-Feet/
├── app.js               # Main app entry point
├── cloudConfig.js       # Cloudinary storage config
├── middleware.js        # Custom middleware (auth, validation)
├── scahem.js            # Joi validation schemas
├── routes/              # Express routes
├── model/               # Mongoose models
├── views/               # EJS view templates
├── public/              # Static assets (CSS, JS)
├── .env                 # Environment variables
├── .gitignore
├── package.json
🌍 Multilingual Overview
🇬🇧 English
Itchy-Feet allows travelers to post listings, review experiences, and explore destinations using maps and photos.

🇮🇳 हिंदी
Itchy-Feet उपयोगकर्ताओं को यात्रा स्थलों की सूची बनाने, फ़ोटो अपलोड करने और समीक्षाएँ लिखने की सुविधा देता है।

👤 Author
Vennu Sai Charan
📧 vennusaicharan09@gmail.com
🔗 SAI-CHARAN09

🤝 Contributing
We welcome your contributions!

bash
Copy
Edit
# Fork the repo
# Create a new feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git commit -m "Add new feature"

# Push and create a Pull Request
git push origin feature/your-feature-name
📜 License
This project is licensed under the ISC License.
