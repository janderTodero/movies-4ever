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
    <div className="text-white py-0 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 bg-zinc-800">
      {/* Logo */}
        <Link to={"/"} className="block sm:inline">
          <img src="/Movies-logo.png" alt="Movies 4ever Logo" className="w-30" />
        </Link>

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
