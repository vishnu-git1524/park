import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/home.scss";

function Home() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Function to get the current location using geolocation API
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Use reverse geocoding to get the location name
            getLocationName(latitude, longitude);
          },
          (error) => {
            setError("Unable to retrieve your location.");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    // Function to get location name using latitude and longitude
    const getLocationName = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
        );
        const data = await response.json();
        // Extracting address components
        const address = [
          data.address.road,
          data.address.suburb,
          data.address.city,
          data.address.state,
          data.address.country
        ].filter(Boolean).join(", ");
        setLocation(address);
        setLoading(false);
      } catch (error) {
        setError("Error fetching location data.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <div className='banner'>
        <div className='overlay'>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', color: '#fff', textDecoration: 'none' }}>
            Looking for parking? <br />
            <span style={{ color: '#ffcc00' }}>You have come to the right place</span>
          </h1>
        </div>
      </div>

      <div className='container mt-5'>
        {/* Show user's location */}
        <section className='my-5 text-center'>
          {loading ? (
            <p>Loading your location...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                You are currently in:
                &nbsp;
                <span style={{ color: '#6a93cb' }}>{location}</span>
              </p>
              <Link
                to="/space"
                state={{ fromHome: true, city: location }}
                style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', color: '#fff', textDecoration: 'none' }}
              >
                <br />
                Find parking near you? ❗
              </Link>
            </div>
          )}
        </section>

        <section className='my-5'>
          <h2 className="text-center">How CarkPrk🚗 Works</h2>
          <div className='row mt-4'>
            <div className='col-md-4 text-center mb-4 mb-md-0'>
              <div className='card shadow-lg p-4'>
                <img src='./map.avif' className='services-card-icon rounded-circle' style={{ width: '50px', height: '50px' }} alt='search' />
                <div className='mt-4'>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Search</h3>
                  <p className='mt-3' style={{ fontSize: '14px', color: '#666' }}>Search for a parking spot according to your needs.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center mb-4 mb-md-0'>
              <div className='card shadow-lg p-4'>
                <img src='./book.png' className='services-card-icon rounded-circle' style={{ width: '50px', height: '50px' }} alt='book' />
                <div className='mt-4'>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Book</h3>
                  <p className='mt-3' style={{ fontSize: '14px', color: '#666' }}>Reserve a parking spot and pay the desired amount.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card shadow-lg p-4'>
                <img src='./parking.png' className='services-card-icon rounded-circle' style={{ width: '50px', height: '50px' }} alt='park' />
                <div className='mt-4'>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Park</h3>
                  <p className='mt-3' style={{ fontSize: '14px', color: '#666' }}>Follow the provided instructions and park your car.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
