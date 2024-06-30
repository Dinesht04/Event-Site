import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import './App.css'
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Navbar from "./components/Navbar";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home/>}/>
      <Route path='/speakers' element={<Speakers/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
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
