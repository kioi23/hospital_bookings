import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router for client-side routing
import { UserProvider } from './context/UserContext'; // Context provider for global user state
import Layout from './components/Layout'; // Layout component with navbar
import UserForm from './components/UserForm'; // Component for user information form
import DoctorsList from './components/DoctorList'; // Component to display list of doctors
import BookingPage from './components/BookingPage'; // Component for booking appointments/consultations

function App() {
  // Main App component that sets up routing and context
  return (
    <UserProvider> {/* Wrap app with UserProvider for state management */}
      <BrowserRouter> {/* Enable client-side routing */}
        <Routes> {/* Define route structure */}
          <Route path="/" element={<Layout />}> {/* Layout wraps all pages */}
            <Route index element={<UserForm />} /> {/* Home page: user form */}
            <Route path="doctors" element={<DoctorsList />} /> {/* Doctors list page */}
            <Route path="booking/:id" element={<BookingPage />} /> {/* Booking page with doctor ID */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
