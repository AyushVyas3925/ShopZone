# Development Journey & AI Collaboration

This document captures the iterative process of building the **ShopZone Single Page Application (SPA)**. It reflects the key technical questions, architectural decisions, and debugging sessions I initiated while developing the e-commerce platform.

---

## 🏗️ Level 1: Core Navigation & Routing

**Goal**: Establish the project foundation and implement client-side routing.

### 1. Initial Routing Setup
> "I am setting up a new React SPA for an e-commerce store called ShopZone using Vite. I have installed `react-router-dom`. How should I structure my `main.jsx` and `App.jsx` to handle basic routes like Home (`/`), Shop (`/shop`), and Contact (`/contact`) without page reloads?"

### 2. Dynamic Routing & API Fetching
> "On my Shop page, I am displaying a grid of products fetched from `dummyjson.com/products`. When a user clicks a product, I want them to navigate to `/product/:id`. How can I use React Router's `useParams` hook on the `ProductDetails` page to extract the ID from the URL and fetch that specific product's data?"

### 3. Handling Loading States
> "While fetching the product data, my app sometimes crashes because the `product` state is initially `null`. What is the best standard practice in React to show a loading spinner or message until the API response is received?"

---

## 🛒 Level 2: Global State (The Cart)

**Goal**: Implement a shopping cart accessible across the entire application without prop drilling.

### 4. Context API Architecture
> "My application needs a shopping cart. Since the cart data (`cart` array, `addToCart`, `removeFromCart`) needs to be accessed by the `Navbar` (for the badge) and the `Cart` page, prop drilling is getting messy. Can you guide me on creating a `CartContext` using the Context API?"

### 5. Add to Cart Logic
> "Inside my `CartContext.jsx`, I need to implement the `addToCart(product)` function. If the user clicks 'Add to Cart' for a product that is already in the cart, how do I safely update the state immutably to just increase its `quantity` instead of adding a duplicate object?"

### 6. Calculating Grand Totals
> "On my `Cart.jsx` page, I am mapping through the `cart` array to display selected items. Each item has a `price` and `quantity` property. What is the cleanest and most efficient way to use the array `reduce()` method to calculate the total order price before rendering it?"

---

## 🎨 Level 3: UI Polish & Premium Styling

**Goal**: Enhance the visual aesthetics using modern CSS techniques while preserving all React logic.

### 7. Global Theming
> "The core functionality of my SPA is working great, but the default UI is very basic. Without altering any of my React component logic, how can I configure `index.css` to apply a dark mode theme with glassmorphism effects and modern button hover states?"

### 8. Responsive Product Grid
> "My product grid on the `Shop` page isn't adapting well to mobile screens. Instead of writing multiple media queries, how can I use CSS Grid with the `minmax()` function to make the product cards automatically resize and wrap cleanly?"

### 9. Sticky Navbar with Glassmorphism
> "I want my `Navbar` component to stay at the top of the screen when the user scrolls down the `Home` or `Shop` pages. How do I apply `position: sticky` along with a `backdrop-filter: blur` to give it a modern, translucent effect?"
