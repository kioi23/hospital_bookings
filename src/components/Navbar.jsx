import { Link } from 'react-router-dom'; // Link for navigation without page reload

const Navbar = () => {
  // Navigation bar component with links to main pages
  return (
    <nav className="bg-blue-600 text-white p-4"> {/* Tailwind CSS classes for styling */}
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Hospital Bookings</Link> {/* Home link */}
        <div>
          <Link to="/doctors" className="mr-4 hover:underline">Doctors</Link> {/* Doctors list link */}
          {/* Add more links if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;