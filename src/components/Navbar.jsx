import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hospital Booking System
        </h1>

        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link to="/doctors" className="hover:text-gray-200">
            Doctors
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;