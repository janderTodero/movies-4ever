import tmdbLogo from "../assets/tmdb-logo.svg"
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tmdbLogo}
              alt="TMDb Logo"
              className="h-6"
            />
          </a>
        </div>

        <p className="max-w-md px-4">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} - Criado apenas para fins educacionais
        </p>
      </div>
    </footer>
  );
}

export default Footer;
