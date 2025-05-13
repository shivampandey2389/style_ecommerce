
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import Collection from './pages/Collection'
import { New } from './pages/New'
import Layout from './pages/Layout'
import Account from './pages/Account'
import Login from './pages/Login'
function App() {
  const isAuthenticated = false;
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Layout  /> : <Navigate to="/login" />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/collection",
          element: <Collection />,
        },
        {
          path: "/new",
          element: <New />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
  <RouterProvider router={router}/>
  )
}

export default App
