# Codebase Overview: Food Delivery Frontend

## Purpose and Context

This repository contains the frontend code for a web-based food delivery platform. It provides a modern, responsive client interface for users to browse food menus, place orders, track deliveries, and manage their profiles. The frontend is designed to be minimalistic and fast, with a focus on user experience and mobile responsiveness.

## High-Level Structure

The project is organized as a typical ReactJS single-page application (SPA), with a clear separation between components, context providers (for global state), styling, and individual feature pages.

```
food_delivery_frontend/
├── README.md
├── package.json
├── eslint.config.mjs
├── post_process_status.lock
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── setupTests.js
│   ├── logo.svg
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Sidebar.js / Sidebar.css
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── OrderTracking.js
│   │   ├── OrderHistory.js
│   │   ├── Profile.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── NotFound.js
```

## Main Technologies Used

- **ReactJS (v18)**: Main framework for building UI components and managing SPA routing.
- **React Router DOM (v6)**: For client-side routing between application views/pages.
- **Plain CSS**: Project uses vanilla CSS and CSS variables for styling with no heavy UI frameworks, focusing on modern and responsive design.
- **Jest / React Testing Library**: For UI/unit testing.
- **ESLint**: Configured for clean code and adherence to React standards.
- **Local Storage**: Used for simulating persistent authentication and cart state (in the absence of a live backend/API during development).

## Key Features and Components

### Authentication & User State

- **AuthContext.js**: Provides authentication logic for login, registration, and session state using React context.
- **Profile.js, Login.js, Register.js**: Pages for user management, login, and signup functionality.
- Session data is stored in localStorage for the MVP/prototype.

### Menu Browsing & Ordering

- **Home.js**: Welcome/landing page.
- **Menu.js**: Displays a list of menu items with search and category filter functionality.
- **CartContext.js**: Manages shopping cart logic and state globally.
- **Cart.js**: Shows items in the user cart, allows for removal, clearing, and proceeds to checkout.
- **Checkout.js**: Simulated payment and checkout process.

### Order Tracking and History

- **OrderTracking.js**: Shows real-time (simulated) delivery progress for the user's active order.
- **OrderHistory.js**: Displays demo past orders for the authenticated user.

### Navigation & UI Framework

- **Navbar.js, Sidebar.js**: Core navigation components for both desktop and mobile layouts.
- **App.js**: Root of the React app; coordinates layout, theming (light/dark mode), and routing for all major functional areas.

### Theming and Styles

- Colors and theme variables in `src/App.css` follow the KAVIA palette (primary orange, dark backgrounds, and accent colors).
- Responsive layout, adaptive design, and accessible components.
- Custom CSS is leveraged for all UI styling—no external component libraries are used.

### Routing

The application uses React Router v6 for all inner navigation. All core user flows (viewing the menu, authentication, cart, checkout, order status, and history) are mapped to their respective `/pages` components.

### Testing

- A minimal test suite exists (see `App.test.js` and `setupTests.js`) using React Testing Library to ensure core components render as expected.

## Development and Customization

- Start the application locally using `npm start` (see README.md).
- All business logic and demo data reside client-side. Backend API calls would need to be integrated for a real deployment.
- Main entry and configuration points:
  - `src/App.js` - Core app/layout/routing/contexts.
  - `src/pages/` - Individual functional screens/views.
  - `src/components/` - Reusable navigation/UI elements.
  - `src/contexts/` - React Contexts for shared state and logic.

## Feature Recap

- User authentication (local/demo for now).
- Menu browsing (with search and filter).
- Cart management.
- Simulated checkout and order tracking.
- User profile and past orders.
- Mobile-first, modern UX (responsive).
- Easily customizable color/theme and layout.

## Future Extensions

Though data and payment flow are currently simulated, architecture is modular for easy integration of real APIs, payment gateways (such as Stripe), and persistent user/order state.

---

For more setup and run instructions, see `README.md` in this directory.
