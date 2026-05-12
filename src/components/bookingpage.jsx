import { useState } from "react";
import { useParams } from "react-router-dom";

function BookingPage() {
  const { id } = useParams();

  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      doctorId: id,
      type,
      date,
      time,
    };

    const response = await fetch(
      "http://localhost:3000/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    if (response.ok) {
      alert("Session successfully booked");
    } else {
      alert("Doctor unavailable");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">
        Book Appointment
      </h2>

      <form
        onSubmit={handleBooking}
        className="bg-white p-6 rounded-xl shadow-md max-w-md"
      >
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        >
          <option value="">Select Session Type</option>
          <option value="Consultation">
            Consultation
          </option>
          <option value="Appointment">
            Appointment
          </option>
        </select>

        <input
          type="date"
          className="w-full p-3 border rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="w-full p-3 border rounded mb-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;