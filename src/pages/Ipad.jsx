import React from 'react';

function Ipad() {
  return (
    <div className="pt-5">
      
      <section
        className="text-center text-white hero-section"
        style={{
          minHeight: '100vh',
          paddingTop: '120px',
          paddingBottom: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source
            src="https://www.apple.com/assets-www/en_WW/ipad/welcome/86793aa32_medium.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-4">iPad Pro</h1>
          <p className="lead mb-5">Powered by M2.</p>
          <button className="btn btn-primary" style={{
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '25px',
            border: '1px solid #fff',
            fontSize: '0.8rem',
            textAlign: 'center',
          }}>Buy Now</button>
        </div>
        <div className="overlay" style={{ zIndex: 1 }}></div>
      </section>

      {/* Accessories Section */}
      <section className="py-5">
        <div className="container py-5 text-center">
          <h2 className="mb-5">Accessories</h2>
          <p className="lead mb-4">Enhance your iPad experience.</p>
          
          <img
            src="https://www.apple.com/v/ipad-mini/s/images/overview/hero/hero_endframe__gnx9z3uu3t6q_medium.png" 
            className="img-fluid me-3"
            alt="iPad Accessories" 
          />
        <br></br>
         
        </div>
      </section>
    </div>
  );
}

export default Ipad;