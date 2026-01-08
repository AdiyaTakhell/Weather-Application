
#  Weather Application

A responsive weather application built using **React** and **Vite** that consumes the OpenWeatherMap API to display current weather conditions and a five-day forecast.

The project emphasizes clean architecture, predictable state management, and secure configuration practices suitable for internship and entry-level engineering evaluation.

## Preview

## Overview

This application demonstrates practical front-end engineering skills, including API integration, asynchronous data handling, component-based UI design, and responsive layouts.

The primary goal of the project is to show **how design decisions are made**, not just that features work.

## Key Features

### Real-Time Weather Data

* Fetches live temperature, humidity, wind speed, and weather conditions.
* Updates the UI dynamically based on user input without page reloads.

### Five-Day Forecast

* Uses the OpenWeatherMap 3-hour interval forecast API.
* **Smart Filtering:** logic filters data to display a single representative forecast per day (midday) for clarity and consistency.

### Error Handling

* Gracefully handles:
* Invalid city names
* API errors (non-200 responses)
* Network failures and timeouts


* Provides clear user feedback (UI states) instead of silent failures.

### Responsive Design

* Layout adapts fluidly to mobile, tablet, and desktop screen sizes.
* Implements Glassmorphism UI trends for a modern aesthetic.

### Secure Configuration

* API keys are stored in environment variables (.env) and are **never committed** to source control.

## Technology Stack

* **Frontend:** React (Vite)
* **Styling:** CSS3 (Variables, Flexbox, Grid)
* **API:** OpenWeatherMap
* **Icons:** Google Material Symbols

## Design Decisions

**1. React + Vite**
Vite was chosen over Create React App for significantly faster startup times, simpler configuration, and modern ES module support.

**2. Midday Forecast Filtering**
The OpenWeatherMap forecast API provides data in 3-hour intervals (8 items per day). Displaying all 40 items is overwhelming. Selecting the "12:00:00" timestamp provides a consistent "daily snapshot" that reduces cognitive load for the user.

**3. Component Separation**
The app is broken down into SearchSection, WeatherInfo, and ForecastItem. This keeps the main App component focused on state logic while child components handle presentation.

**4. State-Driven UI**
React useState and useEffect are used as the single source of truth. The UI is a direct reflection of the current state (loading, error, weatherData), preventing UI desynchronization.

## Project Structure

```text
weather-app/
 ├── public/           
 │   └── assets/       # Static assets (images, icons)
 ├── src/
 │   ├── components/   # Reusable UI components (Search, Info, Forecast)
 │   ├── App.jsx       # Main State Logic
 │   ├── App.css       # Global Styles and Responsive Media Queries
 │   └── main.jsx      # Entry Point
 ├── .env              # Environment Variables (Git Ignored)
 └── package.json

```

## Installation and Setup

**1. Clone the repository**

```bash
git clone <repository-url>
cd weather-app

```

**2. Install dependencies**

```bash
npm install

```

**3. Configure environment variables**
Create a .env file in the project root and add your OpenWeatherMap key:

```env
VITE_API_KEY=your_api_key_here

```

*(Note: The variable must start with VITE_ to be exposed to the client).*

**4. Run the development server**

```bash
npm run dev

```

**5. Build for production**

```bash
npm run build

```

## Known Limitations

* **API Rate Limits:** Enforced by OpenWeatherMap (60 calls/minute for free tier).
* **Caching:** No browser-side caching is implemented; repeated searches trigger new API requests.
* **Testing:** Automated unit tests (Jest/Vitest) are not yet included.

*These limitations were accepted to keep the project focused on core front-end architecture and React fundamentals.*

## Possible Improvements

* Add unit tests for components using Vitest.
* Implement localStorage caching to reduce redundant API calls.
* Introduce theme switching (Light/Dark mode).
* Improve accessibility with strict ARIA attributes and keyboard navigation.

## License

This project is licensed under the MIT License.