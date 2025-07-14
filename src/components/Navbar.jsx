import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Navbar () {
    return (
        <div className="text-white py-5 flex items-center justify-between">
            <h2 className="bg-yellow-500 text-2xl hover:bg-yellow-600 text-black font-bold px-2 py-1 rounded">
                <Link to={"/"}>MOVIES 4EVER</Link>
            </h2>
            <form>
                <div className="flex items-center">
                    <input className="px-2 py-1 w-96 border-2 border-white bg-white text-black text-sm" type="text" placeholder="Procure por um filme ou série"/>
                    <button type="submit" className="bg-white text-black px-3 py-2 rounded-r cursor-pointer"><BsSearch /></button>
                </div>
                
            </form>
        </div>
    )
}

export default Navbar