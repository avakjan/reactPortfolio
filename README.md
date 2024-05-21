# Introduction

- This is a personal portfolio website built using React. It showcases my projects, skills, and contact information.

## :ledger: Index

- [About](#beginner-about)
- [Installation](#electric_plug-installation)
- [Usage](#zap-usage)
- [Pre-Requisites](#notebook-pre-requisites)
- [Project Structure](#file_folder-file-structure)
- [Dependencies](#dependencies)
- [Features](#features)

## :beginner: About

This project is a personal portfolio website built using React. It is designed to showcase my professional skills, projects, and experiences in a visually appealing and interactive manner. The website includes various sections such as an introduction, portfolio, skills, and contact information, providing a comprehensive view of my work and capabilities. The responsive design ensures optimal viewing on different devices, enhancing user experience. This project not only highlights my technical skills but also my design sensibility and attention to detail.

##  :electric_plug: Installation

**Clone the repository:**
```
git clone https://github.com/avakjan/reactPortfolio.git
cd reactPortfolio-main
```

**Install the dependencies:**
```
npm install
```

## :zap: Usage

**Run the development server:**
```
npm start
```

**Open http://localhost:{yourLocalhost} to view it in the browser.**

**Build for production:**
```
npm run build
```

### :notebook: Pre-Requisites

- **Node.js**: Download and install it from [Node.js official website](https://nodejs.org/).
- **npm**: Node Package Manager, comes with Node.js.
- **Git**: Download and install it from [Git official website](https://git-scm.com/).
- **Code Editor**: An IDE or code editor like Visual Studio Code, Sublime Text, or Atom.

###  :file_folder: File Structure
```
.
reactPortfolio-main/
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── index.html
│   ├── robots.txt
│   ├── fonts/
│   └── img/
├── src/
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── AboutMe.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MyPortfolio.jsx
│   │   │   ├── MySkills.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Homescreen/
│   │   │       └── index.jsx
│   │   └── hooks/
│   │       └── useScrollListener/
│   │           └── index.js
│   ├── data/
│   │   └── index.json
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

### Dependencies

- **React** - JavaScript library for building user interfaces
- **React-DOM** - Entry point of the DOM-related rendering paths
- **React-Scripts** - Configuration and scripts for Create React App

### Features

- Responsive design
- Smooth scrolling
- Interactive portfolio section
- Skills showcase
- Contact form
