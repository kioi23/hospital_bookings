import { Link } from "react-router-dom";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
    },
    {
      id: 2,
      name: "Dr. Michael Lee",
      specialty: "Dermatologist",
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Neurologist",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Doctors
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold">
              {doctor.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {doctor.specialty}
            </p>

            <Link
              to={`/booking/${doctor.id}`}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;