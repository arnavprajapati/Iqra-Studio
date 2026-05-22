import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CraftedGiftsPage from './pages/CraftedGiftsPage';
import DemoPage from './pages/DemoPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <CraftedGiftsPage /> },
      { path: "shop", element: <DemoPage title="Shop" /> },
      { path: "gifts", element: <DemoPage title="Gifts" /> },
      { path: "custom", element: <DemoPage title="Custom" /> },
      { path: "moments", element: <DemoPage title="Moments" /> },
      { path: "search", element: <DemoPage title="Search" /> },
      { path: "cart", element: <DemoPage title="Cart" /> },
      { path: "whatsapp", element: <DemoPage title="WhatsApp" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;