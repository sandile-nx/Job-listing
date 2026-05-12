# Design Decisions

I used a simple flex-based card layout for the job listings and job details to accommodate all relevant information in a single readable card.
I implemented a sticky navigation bar to provide a consistent site structure across all pages, along with a simple application form that collects minimal details for an easy application process.
The layout is built using Tailwind CSS and is designed to resemble common job listing platforms, making it user-friendly and familiar to applicants.

# Tech Stack

- React + Vite
- Tailwind CSS

---

# Project Setup

## 1. Clone the repository

```bash
git clone <repository-url>
```

---

## 2. Navigate into project

```bash
cd job-listing
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Run the Project

The project requires 2 terminals running simultaneously.

### Terminal 1 — Start React App

```bash
npm run dev
```

Default frontend URL: `http://localhost:5173`

---

### Terminal 2 — Start Mock API Server

```bash
npm run server
```

Mock API URL: `http://localhost:3001`

---

# package.json Scripts

```json
"scripts": {
  "dev": "vite",
  "server": "json-server --watch db.json --port 3001"
}
```

---

# API Endpoints

## Get all jobs

```http
GET /jobs
```

---

## Get single job

```http
GET /jobs/:id
```

e.g.

```http
GET /jobs/1
```

---

## Submit application

```http
POST /applications
```

---

# Folder Structure

```bash
src/
├── api/
├── components/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

---
