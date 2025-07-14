import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="app bg-zinc-900 min-h-screen px-96" >
      <Navbar />
      <Outlet></Outlet>
    </div>
      
    
  )
}

export default App
