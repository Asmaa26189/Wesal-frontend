//app.jsx
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation"; // Import the navigation component
import { Header } from "./components/header"; // Import the header component
import { Users } from "./components/users"; // Import the users component
import { AddUser } from "./components/addUser"; // Import the addUser component
import { About } from "./components/about"; // Import the about component
import { Contact } from "./components/contact"; // Import the contact component
import { Clinics } from "./components/clinics"; // Import the clinics component
import { AddClinic } from "./components/addClinic"; // Import the addClinic component
import { Doctors } from "./components/doctors"; // Import the doctors component
import { AddDoctor } from "./components/addDoctor"; // Import the addDoctor component
import { Patients } from "./components/patients"; // Import the patients component
import { AddPatient } from "./components/addPatient"; // Import the addPatient component
import { Appointments } from "./components/appointments"; // Import the appointments component
import { AddAppointment } from "./components/addAppoitment"; // Import the addAppoitment component
import { UserLogin } from "./components/login";  // Import the Login component
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";// Import the Login component
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage login stat
  const [userName, setUserName] = useState(""); // State to hold the user's name
  const [userToEdit, setUserToEdit] = useState(null);
  const [usersListUpdated, setUsersListUpdated] = useState(false); // Track updates to user list

  useEffect(() => {
    setLandingPageData(JsonData);
    
  }, []);
   // user section
  const handleLogin = (name) => {
    setIsAuthenticated(true); // Set login state to true after successful login
    setUserName(name); // Set the user's name upon successful login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName(""); // Clear the user's name on logout
  };

  const handleEditUser = (user) => {
    setUserToEdit(user);
  };

  const handleClearUser = () => {
    setUserToEdit(null);
  };
  // Function to trigger re-fetching users after add/edit
  const refreshUsersList = () => {
    setUsersListUpdated(!usersListUpdated); // Toggle the state to force re-fetch in Users component
  };

  // doctor section
  const [doctorToEdit, setDoctorToEdit] = useState(null);
  const [doctorsListUpdated, setDoctorsListUpdated] = useState(false); // Track updates to doctor list
  const handleEditDoctor = (doctor) => {
    setDoctorToEdit(doctor);
  };
  
  const handleClearDoctor = () => {
    setDoctorToEdit(null);
  };
    // Function to trigger re-fetching Doctors after add/edit
    const refreshDoctorsList = () => {
      setDoctorsListUpdated(!doctorsListUpdated); // Toggle the state to force re-fetch in Doctors component
    };

    // patient
    const [patientToEdit, setPatientToEdit] = useState(null);
    const [patientsListUpdated, setPatientsListUpdated] = useState(false); // Track updates to patient list
    const handleEditPatient = (patient) => {
      setPatientToEdit(patient);
    };
  
    const handleClearPatient = () => {
      setPatientToEdit(null);
    };
    // Function to trigger re-fetching Patients after add/edit
    const refreshPatientsList = () => {
      setPatientsListUpdated(!patientsListUpdated); // Toggle the state to force re-fetch in Patients component
    };

  // clinic section
  const [clinicToEdit, setClinicToEdit] = useState(null);
  const [clinicsListUpdated, setClinicsListUpdated] = useState(false); // Track updates to doctor list
    const handleEditClinic= (clinic) => {
      setClinicToEdit(clinic);
    };
  
  const handleClearClinic = () => {
    setClinicToEdit(null);
  };
    // Function to trigger re-fetching Clinics after add/edit
    const refreshClinicsList = () => {
      setClinicsListUpdated(!clinicsListUpdated); // Toggle the state to force re-fetch in Clinics component
    };

  // appointment section
  const [appointmentToEdit, setAppointmentToEdit] = useState(null);
  const [appointmentsListUpdated, setAppointmentsListUpdated] = useState(false); // Track updates to appointment list
  const handleEditAppointment= (appointment) => {
    setAppointmentToEdit(appointment);
  };
  
  const handleClearAppointment = () => {
    setAppointmentToEdit(null);
  };
  // Function to trigger re-fetching Appointments after add/edit
  const refreshAppointmentsList = () => {
    setAppointmentsListUpdated(!appointmentsListUpdated); // Toggle the state to force re-fetch in Appointments component
  };

  
  return (
    <Router>
    <Routes>
      {/* {!isAuthenticated ? (
        // Show login page when not authenticated
        <Route path="/" element={<UserLogin onLogin={handleLogin}  />} /> 
        // 
      ) : (
        // Redirect to homepage after login
        <Route path="*" element={<Navigate to="/" />} />
      )} */}

      {/* Main app pages only accessible after login */}
      {/* {isAuthenticated && ( */}
      <Route
        path="/"
        element={
          <>
            <Navigation userName={userName}  onLogout={handleLogout}  /> {/* Pass userName to Navigation */} {/* Pass handleLogout */}
            <Header data={landingPageData.Header} />
            {/* <Users onEditUser={handleEditUser} refreshTrigger={usersListUpdated} /> */}
            {/* <AddUser userToEdit={userToEdit} clearUser={handleClearUser} onUserChange={refreshUsersList}/> */}
            <About data={landingPageData.About} />
            {/* <Clinics  onEditClinic={handleEditClinic} refreshTrigger={clinicsListUpdated} /> */}
            {/* <AddClinic clinicToEdit={clinicToEdit} clearClinic={handleClearClinic} onClinicChange={refreshClinicsList} /> */}
            {/* <Doctors onEditDoctor={handleEditDoctor} refreshTrigger={doctorsListUpdated} /> */}
            {/* <AddDoctor doctorToEdit={doctorToEdit} clearDoctor={handleClearDoctor} onDoctorChange={refreshDoctorsList} /> */}
            {/* <Patients onEditPatient={handleEditPatient} refreshTrigger={patientsListUpdated} /> */}
            {/* <AddPatient patientToEdit={patientToEdit} clearPatient={handleClearPatient} onPatientChange={refreshPatientsList} /> */}
            {/* <Appointments  onEditAppointment={handleEditAppointment} refreshTrigger={appointmentsListUpdated} */}
            {/* doctorsListUpdated={doctorsListUpdated} clinicsListUpdated={clinicsListUpdated} patientsListUpdated={patientsListUpdated}/> */}
            {/* <AddAppointment appointmentToEdit={appointmentToEdit} clearAppointment={handleClearAppointment} onAppointmentChange={refreshAppointmentsList} 
            doctorsListUpdated={doctorsListUpdated} clinicsListUpdated={clinicsListUpdated} patientsListUpdated={patientsListUpdated}/> */}
            <Contact data={landingPageData.Contact} />
          </>
        } 
      /> 
      {/* )} */}
    </Routes>
  </Router>
  );
};

export default App;
