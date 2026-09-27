# 🌊 IdentiOcean

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1F3A,50:0077B6,100:00B4D8&height=220&section=header&text=IdentiOcean&fontSize=60&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=AI-Powered%20Ocean%20Waste%20Identification&descAlignY=60&descSize=18" width="100%"/>
</p>

<p align="center">
  <strong>🐠 See it. Identify it. Protect our oceans. 🌊</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AI-Powered-00B4D8?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Hackathon-Project-0077B6?style=flat-square"/>
  <img src="https://img.shields.io/badge/Status-In%20Development-00B4D8?style=flat-square"/>
  <img src="https://img.shields.io/badge/Environment-Ocean%20Tech-023E8A?style=flat-square"/>
</p>

---

## 🐚 What is IdentiOcean?

**IdentiOcean** is an AI-powered platform designed to help identify and understand waste found in aquatic environments.

Users can provide an image of an object found in the ocean or surrounding waterways, and our system uses AI-driven image analysis to help determine what the object is.

The goal?

> **Turn an unidentified piece of ocean waste into actionable information.**

By combining computer vision, AI, and a user-friendly web interface, IdentiOcean creates a bridge between **technology and environmental awareness**.

---

## 🧠 How It Works

```text
             📸 USER IMAGE
                  │
                  ▼
        ┌───────────────────┐
        │   React Frontend  │
        │                   │
        │  Upload / Camera  │
        └─────────┬─────────┘
                  │
                  ▼
        ┌───────────────────┐
        │    AI ANALYSIS    │
        │                   │
        │ Computer Vision + │
        │   Classification  │
        └─────────┬─────────┘
                  │
                  ▼
        ┌───────────────────┐
        │   Spring Boot     │
        │      Backend      │
        └─────────┬─────────┘
                  │
                  ▼
        ┌───────────────────┐
        │  IDENTIFICATION   │
        │                   │
        │  Waste Type +     │
        │  Environmental    │
        │    Information    │
        └─────────┬─────────┘
                  │
                  ▼
             🌊 RESULTS
```

---

## ✨ Features

### 🔍 AI Object Identification

Upload an image and leverage AI-powered visual analysis to identify potential ocean waste.

### 🌊 Ocean-Focused Classification

Designed around common forms of aquatic pollution such as:

* 🧴 Plastic
* 🥤 Bottles & containers
* 🎣 Fishing-related waste
* 🛍️ Packaging
* 🗑️ General debris

### 📊 Intelligent Results

IdentiOcean transforms raw image input into understandable information that can help users recognize and understand the environmental impact of waste.

### 💻 Modern Web Interface

Built with a responsive React interface designed to make AI-powered environmental analysis accessible and intuitive.

---

## 🛠️ Tech Stack

| Layer                 | Technology                |
| --------------------- | ------------------------- |
| 🎨 Frontend           | React + Vite              |
| ⚙️ Backend            | Spring Boot               |
| ☕ Backend Language    | Java                      |
| 🧠 AI / ML            | Computer Vision + AI APIs |
| 📦 Package Management | npm / Maven               |
| 🔧 Development        | Git + GitHub              |

---

## 🧬 System Architecture

```text
                         ┌─────────────────┐
                         │      USER       │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  REACT + VITE   │
                         │    FRONTEND     │
                         └────────┬────────┘
                                  │
                            HTTP / REST
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   SPRING BOOT   │
                         │     BACKEND     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   AI / VISION   │
                         │     ENGINE      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ IDENTIFICATION  │
                         │   + ANALYSIS    │
                         └─────────────────┘
```

---

## 🌎 Why IdentiOcean?

Ocean pollution is not always immediately recognizable.

A piece of debris can look like an ordinary object, but understanding **what it is** is the first step toward understanding where it came from, how it affects aquatic ecosystems, and how it can be addressed.

IdentiOcean uses technology to make that process faster, more accessible, and more engaging.

### Our vision:

> **Use AI to make ocean conservation more intelligent, accessible, and actionable.**

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Java
* Maven
* Git

### Clone the repository

```bash
git clone https://github.com/ZDavila3/IdentiOcean.git
cd IdentiOcean
```

### Start the frontend

```bash
npm install
npm run dev
```

### Start the backend

```bash
cd backend
mvn spring-boot:run
```

---

## 📁 Project Structure

```text
IdentiOcean/
│
├── 📂 backend/
│   ├── 📂 src/
│   ├── 📂 target/
│   └── pom.xml
│
├── 📂 public/
│
├── 📂 src/
│   ├── components/
│   ├── assets/
│   └── ...
│
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 vite.config.js
└── 📄 README.md
```

---

## 🤖 AI Technologies

IdentiOcean was developed using modern AI and software engineering techniques to connect visual input with meaningful environmental information.

The project explores how **computer vision + generative AI + web technologies** can work together to create an accessible environmental tool.

---

## 🏆 Hackathon Project

**IdentiOcean** was created as part of the **Aquafina Hackathon**.

Our goal was to take a real-world environmental challenge and combine it with emerging technologies to create something useful, interactive, and impactful.

---

## 👩🏽‍💻 Built With

Made with:

**React • Vite • Spring Boot • Java • AI • Computer Vision • ☕ • 🌊**

---

<p align="center">

### 🌊 Protect what we can't replace.

**IdentiOcean**

<p>
  <em>Built for the ocean. Powered by technology. 💙</em>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00B4D8,50:0077B6,100:0B1F3A&height=120&section=footer" width="100%"/>

</p>
