# Boilerplate Next.js 14

This is a Next.js 14 boilerplate project designed using the Atomic Design architecture. The Atomic Design methodology helps in creating scalable and maintainable design systems by breaking down the UI components into five distinct levels: Atoms, Molecules, Organisms, Templates, and Pages.

## Installation

This project requires [Node.js](https://nodejs.org/) v21+ to run.

Clone the repository and install the dependencies to get started.

```sh
git clone https://github.com/your-username/boilerplate-next.git
cd boilerplate-next
npm install
# or
yarn install
# or
pnpm install
```

Start the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Folder Structure

The project follows the Atomic Design architecture with the following folder structure:
Here is the corrected version of your folder structure with proper annotations for the `shared` directory:

```
src/
├── features/
│   ├── home/                    <-- A feature module representing the home page
│   │   ├── components/          <-- UI components specific to the home feature
│   │   │   └── ExampleForm.js   <-- Example form component
│   │   ├── container/           <-- Container components for business logic and data fetching
│   │   │   ├── ExampleListContainer.js
│   │   │   ├── ExampleCreateContainer.js
│   │   │   ├── ExampleEditContainer.js
│   │   │   ├── ExampleDeleteContainer.js
│   │   ├── datasource/          <-- Data source management (e.g., API calls, data fetching)
│   │   ├── hooks/               <-- Custom hooks specific to the home feature
│   │   ├── store/               <-- State management for the home feature
├── pages/
│   ├── _app.js                  <-- Custom App component to initialize pages
│   ├── _document.js             <-- Custom Document component for server-side rendering
│   ├── index.js                 <-- Main entry point for the home page
├── public/                      <-- Static files served directly by the server
├── shared/
│   ├── components/              <-- Shared UI components used across the application
│   ├── config/                  <-- Shared configuration files
│   ├── datasource/              <-- Shared data source management
│   ├── helpers/                 <-- Shared utility functions and helper modules
│   ├── hooks/                   <-- Shared custom hooks
│   ├── store/                   <-- Shared state management
│   ├── styles/                  <-- Shared global and component-specific styles
```

### Explanation

- **src/features/home**: This directory encapsulates everything related to the "home" feature, following a modular approach.
  - **components**: Contains presentational components used in the home feature.
  - **container**: Contains container components responsible for handling state and logic for the home feature.
  - **datasource**: Manages data fetching and API interactions specific to the home feature.
  - **hooks**: Custom hooks that encapsulate reusable logic for the home feature.
  - **store**: Manages state, possibly using a state management library like Redux or Zustand, for the home feature.

- **pages**: Default Next.js directory for routing. Includes custom App and Document components, along with the main entry point for the home page.

- **public**: Directory for static assets such as images, fonts, and other files that should be served directly by the server.

- **shared**: Contains reusable code that is shared across different features.
  - **components**: Shared UI components that are not specific to any single feature.
  - **config**: Configuration files that are used across the application.
  - **datasource**: Shared data source management, such as API utilities.
  - **helpers**: Utility functions and helper modules that can be used across the project.
  - **hooks**: Custom hooks that are reusable across different features.
  - **store**: State management that is shared across different features.
  - **styles**: Global styles and shared component-specific styles.

This structure ensures that your project is well-organized, making it easier to maintain and scale as it grows. The `shared` directory promotes reusability and reduces code duplication by housing components, hooks, and utilities that can be used across multiple features.

Sure, here's how to create and use components in your project based on the provided folder structure:

## Usage

1. **Creating a Component in `components`**: To create a new component, add a new file in the `features/home/components` directory. For example, to create an `ExampleForm` component:

    ```javascript
    // src/features/home/components/ExampleForm.js
    const ExampleForm = ({ onSubmit }) => {
        return (
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter text" />
                <button type="submit">Submit</button>
            </form>
        );
    };

    export default ExampleForm;
    ```

2. **Creating a Container in `container`**: To create a new container, add a new file in the `features/home/container` directory. For example, to create an `ExampleListContainer` component:

    ```javascript
    // src/features/home/container/ExampleListContainer.js
    import React, { useEffect, useState } from 'react';
    import ExampleForm from '../components/ExampleForm';

    const ExampleListContainer = () => {
        const [items, setItems] = useState([]);

        useEffect(() => {
            // Fetch items from API or datasource
            setItems(['Item 1', 'Item 2', 'Item 3']);
        }, []);

        const handleSubmit = (event) => {
            event.preventDefault();
            // Handle form submission
        };

        return (
            <div>
                <ExampleForm onSubmit={handleSubmit} />
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    export default ExampleListContainer;
    ```

3. **Creating a Data Source in `datasource`**: To create a new data source, add a new file in the `features/home/datasource` directory. For example, to create an `api.js` file:

    ```javascript
    // src/features/home/datasource/api.js
    export const fetchItems = async () => {
        // Simulate an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(['Item 1', 'Item 2', 'Item 3']);
            }, 1000);
        });
    };
    ```

4. **Creating a Hook in `hooks`**: To create a new custom hook, add a new file in the `features/home/hooks` directory. For example, to create a `useFetchItems` hook:

    ```javascript
    // src/features/home/hooks/useFetchItems.js
    import { useState, useEffect } from 'react';
    import { fetchItems } from '../datasource/api';

    const useFetchItems = () => {
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const getItems = async () => {
                const data = await fetchItems();
                setItems(data);
                setLoading(false);
            };

            getItems();
        }, []);

        return { items, loading };
    };

    export default useFetchItems;
    ```

5. **Creating a Store in `store`**: To create a new store, add a new file in the `features/home/store` directory. For example, to create a `useHomeStore` with Zustand:

    ```javascript
    // src/features/home/store/useHomeStore.js
    import create from 'zustand';

    const useHomeStore = create((set) => ({
        items: [],
        setItems: (newItems) => set({ items: newItems }),
    }));

    export default useHomeStore;
    ```

6. **Creating a Page**: To create a new page, add a new file in the `features/home` directory. For example, to create a `HomePage` component:

    ```javascript
    // src/features/home/HomePage.js
    import ExampleListContainer from './container/ExampleListContainer';

    const HomePage = () => {
        return (
            <div>
                <h1>Welcome to the Home Page</h1>
                <ExampleListContainer />
            </div>
        );
    };

    export default HomePage;
    ```

7. **Integrating in `pages`**: To use the `HomePage` component, import it in the `pages/index.js` file:

    ```javascript
    // src/pages/index.js
    import HomePage from '../features/home/HomePage';

    export default function Index() {
        return <HomePage />;
    }
    ```
