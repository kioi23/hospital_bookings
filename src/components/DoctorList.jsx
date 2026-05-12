import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">
        Available Doctors
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <h3 className="text-xl font-bold">
              {doctor.name}
            </h3>

            <p>{doctor.specialization}</p>

            <Link
              to={`/booking/${doctor.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Book Session
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;