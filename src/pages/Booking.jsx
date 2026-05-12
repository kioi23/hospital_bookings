import { useParams, Link } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Booking Page
      </h1>

      <p className="text-lg mb-6">
        You are booking appointment for doctor ID:
        <span className="font-bold"> {id}</span>
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Confirm Booking
      </button>

      <Link
        to="/doctors"
        className="mt-4 text-blue-600 underline"
      >
        Back to Doctors
      </Link>
    </div>
  );
}

export default Booking;