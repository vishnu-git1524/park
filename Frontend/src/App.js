import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';  // Import useEffect to request location when the app loads
import { Home, Layout, NoPage, Parking } from './pages';
import ParkingForm from './pages/ParkingForm';
import Login from './pages/Login';
import Register from './pages/Register';
import Space from './pages/Space';
import SpaceForm from './pages/SpaceForm';
import BookingForm from './pages/BookingForm';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Reviews from './pages/Reviews';
import Users from './pages/Users';
import About from './pages/About';

function App() {
  useEffect(() => {
    // This will run once when the app loads, requesting location access
    const requestLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('Latitude:', position.coords.latitude);
            console.log('Longitude:', position.coords.longitude);
            // You can store the location details in localStorage or a state management system here
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
              default:
                console.log("An unknown error occurred.");
            }
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    requestLocation();
  }, []);  // Empty dependency array means this runs once when the component mounts

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="parking" element={<Parking />} />
          <Route path="parkingForm" element={<ParkingForm />} />
          <Route path="space" element={<Space />} />
          <Route path="spaceForm" element={<SpaceForm />} />
          <Route path="bookingForm" element={<BookingForm />} />
          <Route path="booking" element={<Booking />} />
          <Route path="profile" element={<Profile />} />
          <Route path="review" element={<Reviews />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
