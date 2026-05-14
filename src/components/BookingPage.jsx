import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const BookingPage = () => {
  const { id } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/doctors/${id}`)
      .then(res => res.json())
      .then(data => {
        setDoctor(data);
        setAvailableSlots(data.availableSlots.filter(slot => slot.available));
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setMessage('Please enter your information first.');
      return;
    }

    // Check if slot is available
    const slot = availableSlots.find(s => s.date === date && s.time === time);
    if (!slot) {
      setMessage('Selected slot is not available.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: user.email,
          doctorId: parseInt(id),
          type,
          date,
          time
        })
      });

      if (response.ok) {
        // Update slot availability
        await fetch(`http://localhost:3001/doctors/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            availableSlots: doctor.availableSlots.map(s =>
              s.id === slot.id ? { ...s, available: false } : s
            )
          })
        });
        setMessage('Session successfully booked!');
      } else {
        setMessage('Doctor is unavailable.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  const uniqueDates = [...new Set(availableSlots.map(s => s.date))];
  const timesForDate = availableSlots.filter(s => s.date === date).map(s => s.time);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Book with {doctor.name}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} required className="w-full p-2 border">
            <option value="">Select</option>
            <option value="appointment">Appointment</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <select value={date} onChange={e => { setDate(e.target.value); setTime(''); }} required className="w-full p-2 border">
            <option value="">Select Date</option>
            {uniqueDates.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <select value={time} onChange={e => setTime(e.target.value)} required className="w-full p-2 border">
            <option value="">Select Time</option>
            {timesForDate.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Book</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default BookingPage;