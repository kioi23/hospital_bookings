import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-6">
      <h1 className="text-4xl font-bold mb-6">
        Hospital Appointment System
      </h1>

      <p className="mb-6 text-gray-700 text-center max-w-md">
        Register and book appointments with doctors easily.
      </p>

      <Link
        to="/doctors"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        View Doctors
      </Link>
    </div>
  );
}

export default Home;