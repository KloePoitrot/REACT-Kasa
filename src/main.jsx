import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

/* Pages */
import HomePage from './pages/home';
import ErrorPage from './pages/error';
import APropos from './pages/a-propos';
import FicheLogement from './pages/fiche-logement';

/* style */
import '/src/assets/css/style.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  
  {
    path: "fiche-logement/:id",
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
