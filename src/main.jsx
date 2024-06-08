import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

/* Pages */
import HomePage from './pages/home';
import ErrorPage from './pages/error';
import APropos from './pages/APropos';
import FicheLogement from './pages/fiche-logement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  
  {
    path: "fiche-logement",
    element: <FicheLogement />,
  },
  {
    path: "a-propos",
    element: <APropos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
