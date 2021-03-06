import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Pages/Login/ProtectedRoute";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments/MyAppointments";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import History from "./Pages/Dashboard/History/History";
import Users from "./Pages/Dashboard/Users/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReviews />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="history" element={<History />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
