import React from "react";
import "./../css/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className='banner'>
        <div className='overlay'>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', color: '#fff', textDecoration: 'none' }}>Looking for parking. <br /> <span>You have came to right place</span></h1>
        </div>
      </div>

      <div className='container mt-5'>
       <section className='my-5'>
          <h2 className="text-center">How CarkPrk🚗 Works</h2>

          <div className='row mt-4'>
            <div className='col-md-4 text-center mb-4 mb-md-0'>
              <div className='card shadow-lg p-4'>
                <img src='./map.avif' className='services-card-icon rounded-circle' style={{ width: '50px', height: '50px' }}></img>
                <div className='mt-4'>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Search</h3>
                  <p className='mt-3' style={{ fontSize: '14px', color: '#666' }}>Search for a parking spot according to your needs.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center mb-4 mb-md-0'>
              <div className='card shadow-lg p-4'>
                <img src='./book.png' className='services-card-icon rounded-circle' style={{ width: '50px', height: '50px' }}></img>
                <div className='mt-4'>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Book</h3>
                  <p className='mt-3' style={{ fontSize: '14px', color: '#666' }}>Reserved Parking spot and pay desired amount..</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card shadow-lg p-4'>
                <img src='./parking.png' className='services-card-icon rounded-circle' style={{ width: '50px', height: '50px' }}></img>
                <div className='mt-4'>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Park</h3>
                  <p className='mt-3' style={{ fontSize: '14px', color: '#666' }}>Follow the provided instructions and park your car.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Testimonial */}
      {/* <section className='my-5'>
          <h2 className='mt-5'>Testimonial</h2>
          <div className='row'>
            <div className='col-md-6'>
              <div className='testimonial-card p-3 rounded text-center'>
                <img src='./profile-1.jpeg' />
                <p className='mt-4 mb-3'>"I recently used Rent A Spot, a parking booking website, and I was thoroughly impressed with the service. The Rent-A-Spot website was user-friendly and easy to navigate, allowing me to quickly find and book a parking spot for my trip. The process was seamless, and I received a confirmation email from Rent-A-Spot with all the necessary details. On the day of my arrival, the Rent-A-Spot parking lot was well-maintained and had ample space. I highly recommend Rent A Spot to anyone in need of convenient and reliable parking options."</p>
                <span><strong>Harry</strong> Manager at Google</span>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='testimonial-card p-3 rounded text-center'>
                <img src='./profile-1.webp' />
                <p className='mt-4 mb-3'>"I cannot express how grateful I am for Rent A Spot, the parking booking website. Rent A Spot has made the process incredibly convenient and stress-free. With just a few clicks on the Rent-A-Spot website, I can compare prices and book a parking spot in advance. Rent A Spot provides detailed information about each parking facility, including reviews from other users, which helped me make informed decisions. On multiple occasions, I arrived at my destination to find a reserved spot waiting for me, thanks to Rent A-Spot. This website is a game-changer for travellers like me"</p>
                <span><strong>Mill</strong> Co-founder at Tim Hortons</span>
              </div>
            </div>
          </div>
        </section>
      </div>

			{/* <div>
				<div className="box">
					<div>
						<h1 className="hero-text days-one-regular">QUICK SEARCH FOR <span>PARKING</span></h1>
						<img className="hero-image" src="./HeroImage.jpg" />
					</div>
					<div className="secondBox">
            <img className="hero-image2" src="./heroimagetwo.jpg" />
          </div>
				</div>
			</div> */}



    </div>
  );
}

export default Home;
