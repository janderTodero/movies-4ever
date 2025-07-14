import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="app bg-black min-h-screen" >
      <Navbar />
      <Outlet></Outlet>
    </div>
      
    
  )
}

export default App
