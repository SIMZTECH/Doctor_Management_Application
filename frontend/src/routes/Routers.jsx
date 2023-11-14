import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Doctors from '../pages/doctors/Doctors';
import DoctorDetails from '../pages/doctors/DoctorDetails';
import MyAccount from '../dashboard/user-account/MyAccount';
import Dashbord from '../dashboard/doctor-account/Dashbord';
import ProtectedRoute from './ProtectedRoute';

import {Routes, Route} from 'react-router-dom';

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctor_details/:id' element={<DoctorDetails />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={["patient"]}><MyAccount /></ProtectedRoute>} />
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={["docotor"]}><Dashbord /></ProtectedRoute>} />
    </Routes> 
  )
}

export default Routers;