import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Hospital Bookings</Link>
        <div>
          <Link to="/doctors" className="mr-4 hover:underline">Doctors</Link>
          {/* Add more links if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;