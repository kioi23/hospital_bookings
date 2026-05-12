import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/booking/:id"
          element={<Booking />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;