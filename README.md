# 🌿 Health Wellness App - Frontend

This is the **frontend** of the Health Wellness App — a user-focused platform to set wellness goals, book consultations, and track progress in a simple, intuitive way.

Built using:
- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🔒 Google reCAPTCHA
- 🔄 Axios for API communication
- 🔐 Token-based Authentication

---

## 🔧 Features

✅ Register & Login with reCAPTCHA  
✅ Dashboard with Goals & Consultations Overview  
✅ Create, Edit, and Delete Wellness Goals  
✅ Book & Cancel Health Consultations  
✅ Authentication via JWT  
✅ Protected Routes using token  
✅ Clean UI with TailwindCSS  
✅ Loader shown on each API request

---

## 📁 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── api/                # BASE_URL setup
│   ├── components/
│   │   ├── goals/          # GoalForm, GoalList
│   │   └── consultation/   # ConsultationForm, ConsultationList
│   ├── pages/              # Pages like Login, Register, Dashboard, Goals, Consultation
│   ├── App.jsx             # Route structure
│   ├── main.jsx            # Vite entry point
│   └── index.css           # Tailwind base styles
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Vite
- React
- Backend API running (check backend repo)

---

### 🛠 Installation

```bash
# Go to frontend directory
cd frontend

# Install dependencies
npm install

# Run the app
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🌐 Environment Setup

> Create a `.env` if you're planning to customize the base URL

Currently the API base is handled in `src/api/index.js`:

```js
const BASE_URL = "https://wellness-app-server.onrender.com";
export default BASE_URL;
```

---

## 🔐 Google reCAPTCHA

Used in both login and registration.

Add your own **site key** in:

```jsx
<ReCAPTCHA sitekey="your-site-key" />
```

Example keys used:
- Site Key: `6Ld173ArAAAAAKz9a4mGRwZDwL35czUnFohwIzlP`

---

## 🧪 Sample Pages

- `/register` - Create account
- `/login` - Login with CAPTCHA
- `/dashboard` - Overview of goals & consultations
- `/goals` - Set your health goals
- `/consultation` - Book/cancel appointments

---

## 📦 Build

To create a production build:

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🤝 Contributing

Feel free to fork and enhance the project. PRs are welcome.

---

## 📜 License

This project is open-source and free to use.

---

## 🔗 Backend Link

See [Health Wellness App - Backend](https://github.com/asmit137/wellness_App_Server)
