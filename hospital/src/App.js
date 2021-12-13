import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import DoctorsList from './Components/AdminComponents/DoctorsList';
import DoctorsDetails from './Components/AdminComponents/DoctorsDetails';
import DoctorsCreate from './Components/AdminComponents/DoctorsCreate';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import IsAdmin from './Utils/IsAdmin';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
            <Route path="/signup" element={<PublicRoute> <SignUp /> </PublicRoute>} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
            <Route path="/doctorsList" element={<IsAdmin> <DoctorsList /> </IsAdmin>} />
            <Route path="/doctorsList/details" element={<IsAdmin> <DoctorsDetails /> </IsAdmin>} />
            <Route path="/doctorsList/create" element={<IsAdmin> <DoctorsCreate /> </IsAdmin>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
