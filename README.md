# 🌦️ Weather Dashboard

A sleek and responsive Weather Dashboard web app built with **HTML, CSS, JavaScript**, and **Node.js + Express**, using the **OpenWeatherMap API** to fetch real-time weather data! ☀️🌧️❄️

![weather-app-banner](https://user-images.githubusercontent.com/placeholder/weather-dashboard-banner.png)

---

## 🚀 Features

✨ Real-time weather updates  
📍 Search by city name  
📊 Temperature, wind speed, humidity, and weather condition  
🌓 Light & dark theme ready (optional)  
💾 Save your favorite cities (coming soon)  
📱 Responsive design for mobile and desktop  

---

## 🧰 Tech Stack

| Frontend         | Backend        | API              |
|------------------|----------------|------------------|
| HTML5, CSS3, JS  | Node.js, Express | OpenWeatherMap  |

---

## 🗂️ Folder Structure

│
├── public/
│ ├── index.html # Frontend markup
│ ├── style.css # Styling
│ └── script.js # Client-side JS
│
├── server/
│ └── server.js # Node.js backend
│
├── .env # API key (keep secret!)
├── package.json
└── README.md

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
2. Install Dependencies
```bash
npm install
```
3. Create .env File
# .env
```bash
WEATHER_API_KEY=your_openweathermap_api_key_here
```
Get your free API key 👉 https://openweathermap.org/api

4. Start the Server
```bash
node server/server.js
```
Visit: http://localhost:3000 🌐

## 🛠️ Future Improvements
🌍 * Geolocation-based weather fetching

📅 * 5-day forecast with Chart.js graphs

⭐ * Favorite city list (stored in localStorage)

🌓 * Dark mode toggle

📨 * Email weather updates (NodeMailer)

