import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import UserForm from './components/UserForm';
import DoctorsList from './components/DoctorList';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserForm />} />
            <Route path="doctors" element={<DoctorsList />} />
            <Route path="booking/:id" element={<BookingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
