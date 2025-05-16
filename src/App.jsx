
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import Collection from './pages/Collection'
import { New } from './pages/New'
import Layout from './pages/Layout'
import Account from './pages/Account'
import Login from './auth/Login'
import SignIn from './auth/SignIn'
import PrivateRoute from './components/PrivateRoutes'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <PrivateRoute>
            <Layout/>
          </PrivateRoute>
      ),
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
    {
      path:"/register",
      element:<SignIn/>
    }
  ]);
  return (
  <RouterProvider router={router}/>
  )
}

export default App
