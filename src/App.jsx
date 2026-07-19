import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import './index.css';

const CraftedGiftsPage = lazy(() => import('./pages/CraftedGiftsPage'));
const DemoPage = lazy(() => import('./pages/DemoPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const CartPage = lazy(() => import('./pages/CartPage'));

const PageLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#b58953]/20 border-t-[#be9456] animate-spin"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <Suspense fallback={<PageLoader />}><CraftedGiftsPage /></Suspense> },
      { path: "shop", element: <Suspense fallback={<PageLoader />}><DemoPage title="Shop" /></Suspense> },
      { path: "gifts", element: <Suspense fallback={<PageLoader />}><DemoPage title="Gifts" /></Suspense> },
      { path: "custom", element: <Suspense fallback={<PageLoader />}><DemoPage title="Custom" /></Suspense> },
      { path: "moments", element: <Suspense fallback={<PageLoader />}><DemoPage title="Moments" /></Suspense> },
      { path: "search", element: <Suspense fallback={<PageLoader />}><DemoPage title="Search" /></Suspense> },
      { path: "cart", element: <Suspense fallback={<PageLoader />}><CartPage /></Suspense> },
      { path: "whatsapp", element: <Suspense fallback={<PageLoader />}><DemoPage title="WhatsApp" /></Suspense> },
      { path: "category/:categoryId", element: <Suspense fallback={<PageLoader />}><CategoryPage /></Suspense> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;