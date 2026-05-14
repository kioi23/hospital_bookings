import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/doctors')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Select a Doctor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">{doctor.name}</h2>
            <p>{doctor.specialty}</p>
            <Link to={`/booking/${doctor.id}`} className="text-blue-500 hover:underline">Book Appointment</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;