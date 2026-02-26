# Fintech Currency Converter

A clean, production-style currency converter built with React, designed to simulate real-world fintech UX patterns.

## Features
- Live currency conversion using the Frankfurter API
- Controlled inputs with user-friendly typing behavior
- Loading states without blocking user interaction
- Fintech-inspired UI focused on clarity and trust
- Handles edge cases such as empty input and same-currency conversion

## Technical Highlights
- Separation of UI state and business logic
- Safe numeric coercion at logic boundaries
- Side-effect management with `useEffect`
- Prevents unnecessary API calls
- Clean, readable component structure

## Tech Stack
- React (Hooks)
- JavaScript (ES6+)
- CSS (custom, no UI libraries)
- Frankfurter Exchange Rates API

## Getting Started
```bash
npm install
npm run dev
