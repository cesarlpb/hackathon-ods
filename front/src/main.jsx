import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.jsx'
import Room from './pages/Room.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Flashcards from './pages/Flashcards.jsx'
import Categories from './pages/Categories.jsx'
import Login from './pages/Login.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/room',
    element: <Room />
  },
  {
    path: '/flashcards',
    element: <Flashcards />
  },
  {
    path: '/categories',
    element: <Categories />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
