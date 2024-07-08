import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import './App.css'
import Home from "./components/Home";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home/>}/>
      
      </>
    )
  )

  return (
    <>
      
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
