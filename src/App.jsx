import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="app bg-black min-h-screen" >
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
      
    
  )
}

export default App
