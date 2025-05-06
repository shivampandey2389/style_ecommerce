
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import Collection from './pages/Collection'
import { New } from './pages/New'
import Layout from './pages/Layout'
function App() {
  const router = createBrowserRouter(
    [{
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/collection",
          element:<Collection/>
        },
        {
          path:'/new',
          element:<New/>
        }
      ]
    }]
    
  )
  return (
  <RouterProvider router={router}/>
  )
}

export default App
