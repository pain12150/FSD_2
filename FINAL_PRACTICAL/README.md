# Final Practical: Product Dashboard

This project is a beginner-friendly React application built as part of the Final Practical assessment. It demonstrates the implementation of a basic **Product Dashboard** with multiple views and routing using **React** and **Vite**.

## Objective
The main goal of this experiment is to build a functional product dashboard that includes:
1. **Product List View:** A main dashboard page displaying a list of at least 5 products.
2. **Product Details View:** A dedicated page for each individual product that shows detailed information.
3. **Client-Side Routing:** The ability to navigate between the list view and the details view seamlessly without reloading the entire page.

## Tech Stack
- **React (v18):** A JavaScript library for building the user interface.
- **Vite:** A fast build tool and development server.
- **React Router DOM:** Used to handle routing and navigation between the list and details views.
- **Vanilla CSS:** Minimal, basic styling intended for beginners to understand component layouts without complex styling libraries.

## Project Structure

```text
FINAL_PRACTICAL/
├── index.html          # Main HTML entry point
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration file
└── src/                # Source code folder
    ├── main.jsx        # The root React component mounting the App
    ├── App.jsx         # The main application component where routing is configured
    ├── index.css       # The main stylesheet containing minimal CSS
    ├── data/
    │   └── products.js # Mock data containing the list of products (No images, text-only)
    └── pages/
        ├── ProductList.jsx    # The dashboard component that renders all products
        └── ProductDetails.jsx # The component that renders the details of a single product
```

## Implementation Details

### 1. Data Mockup (`src/data/products.js`)
Instead of fetching data from a backend server, the application uses a hardcoded array of JavaScript objects. Each object represents a product with properties like `id`, `name`, `price`, `description`, and `features`.

### 2. Routing Setup (`src/App.jsx`)
The `App` component acts as the router container. It uses `BrowserRouter` to keep the UI in sync with the URL.
- The root route `/` renders the `ProductList` component.
- The dynamic route `/product/:id` renders the `ProductDetails` component, where `:id` is a parameter representing the specific product ID.

### 3. Product List (`src/pages/ProductList.jsx`)
This component maps over the mock data array and displays basic information for each product (name and price). It utilizes the `<Link>` component from `react-router-dom` to create navigational buttons that safely route the user to the details page of that specific product based on its `id`.

### 4. Product Details (`src/pages/ProductDetails.jsx`)
This component extracts the dynamic `id` from the URL using the `useParams` hook provided by React Router. It then finds the corresponding product from the mock data and displays its full description and list of features using basic standard HTML tags (`<h1>`, `<ul>`, `<li>`, etc.).

### 5. Minimal Styling (`src/index.css`)
The application is styled with extreme simplicity in mind. It uses basic CSS properties like `margin`, `padding`, `border`, and standard `flexbox` layout. This ensures that the focus remains on the core React concepts and routing logic rather than complex design systems.

## Setup and Installation

Follow these steps to run the project locally on your machine:

1. **Navigate to the directory:**
   ```bash
   cd FINAL_PRACTICAL
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to view the dashboard.
