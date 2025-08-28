import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="text-white py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 bg-zinc-800">
      {/* Logo */}
      <h2 id="logo" className="bg-yellow-500 text-2xl sm:text-2xl hover:bg-yellow-600 text-black font-bold px-2 py-1 sm:px-2 sm:py-1 px-1.5 py-0.5 rounded text-center">
        <Link to={"/"} className="block sm:inline text-base sm:text-2xl">
          Movies 4ever
        </Link>
      </h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="w-full sm:w-auto flex justify-center sm:justify-end">
        <div className="flex items-center">
          <input
            className="px-2 py-1 w-64 sm:w-96 border-2 border-white bg-white text-black text-sm"
            type="text"
            placeholder="Procure por um filme ou série"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black px-3 py-2 rounded-r cursor-pointer"
          >
            <BsSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
