import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-black"
        >
          Job Listing
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;