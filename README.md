# QuoteGen

A modern aesthetic quote generator built with React, Vite, TailwindCSS, and Axios.

QuoteGen delivers random inspirational quotes inside a clean glassmorphism UI with smooth gradients, responsive design, and minimal interactions.

Because apparently humans enjoy receiving emotional guidance from randomly generated sentences between debugging sessions.

---

## Preview

Features:
- Random quote generation
- Beautiful glassmorphism UI
- Responsive layout
- Gradient buttons
- API integration
- Smooth user experience

---

## Tech Stack

### Frontend
- React
- Vite
- TailwindCSS

### Libraries
- Axios

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/quotegen.git
```

Navigate into the project:

```bash
cd quotegen
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Folder Structure

```txt
src/
│
├── components/
│   ├── QuoteCard.jsx
│   ├── ActionButtons.jsx
│   └── HeroSection.jsx
│
├── services/
│   └── quotesService.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## API Used

QuoteGen uses a random quote API for fetching inspirational quotes dynamically.

Example:
```txt
https://api.api-ninjas.com/v1/quotes
```

---

## Features

### Random Quote Generator
Fetches random quotes dynamically from API.

### Glassmorphism UI
Modern frosted-glass aesthetic with gradient accents.

### Responsive Design
Works across:
- Desktop
- Tablet
- Mobile

### Dynamic State Updates
Uses React hooks:
- useState
- useEffect

---

## Future Improvements

Planned features:
- Copy quote button
- Share functionality
- Favorite quotes
- Dark/light mode
- Framer Motion animations
- Category filtering

---

## Lessons Learned

This project helped practice:
- React component architecture
- Props
- State management
- API handling
- Async functions
- Event handling
- Tailwind styling

Also learned that React will instantly combust if you update state during render.

---

## Author

Mohammad Fahad Nawaz Khan

---

## License

This project is open-source and available under the MIT License.