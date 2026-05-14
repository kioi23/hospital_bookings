import { Outlet } from 'react-router-dom'; // Outlet renders the matched child route
import Navbar from './Navbar'; // Navbar component for navigation

const Layout = () => {
  // Layout component that provides consistent structure across pages
  return (
    <div>
      <Navbar /> {/* Render navbar at the top */}
      <main>
        <Outlet /> {/* Render the current page content here */}
      </main>
    </div>
  );
};

export default Layout;