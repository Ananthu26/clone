import React from 'react';

function Watch() {
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
        <img
          src="https://www.apple.com/v/apple-watch-ultra-2/f/images/overview/hero/hero_endframe__ewae8bv9nsia_medium.jpg" // Online image URL
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
          alt="Apple Watch Series 10 Hero"
        />
        <div className="container h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-4">Apple Watch Series 10</h1>
          <p className="lead mb-5">Thinnest. Biggest display.</p>
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
      <section className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="text-center mb-5">Health Features</h2>
          
          <div className="row justify-content-center align-items-center">
  <div className="col-md-4 px-4 d-flex flex-column align-items-center text-center">
    <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
      <img
        src="https://www.apple.com/v/watch/bp/images/overview/consider_modals/safety/modal_safety_crash_detection__bziyl8q4skya_medium.jpg"
        className="img-fluid"
        alt="SOS"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    <h4 className="mt-3 mb-2">SOS</h4>
    <p>Emergency services when you need them.</p>
  </div>
  <div className="col-md-4 px-4 d-flex flex-column align-items-center text-center">
    <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
      <img
        src="https://www.apple.com/v/watch/bp/images/overview/consider_modals/health/modal_health_ecg__gany7sy943ue_medium.jpg"
        className="img-fluid"
        alt="ECG App"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    <h4 className="mt-3 mb-2">ECG App</h4>
    <p>Check your heart rhythm anytime.</p>
  </div>
  <div className="col-md-4 px-4 d-flex flex-column align-items-center text-center">
    <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
      <img
        src="https://www.apple.com/v/watch/bp/images/overview/consider_modals/health/modal_health_sleep__b5sbshxkaj36_medium.jpg"
        className="img-fluid"
        alt="Fitness & Sleep Tracking"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    <h4 className="mt-3 mb-2">Sleep Tracking & Fitness</h4>
    <p>Track sleep & workouts with precision.</p>
  </div>
</div>
        </div>
      </section>
    </div>
  );
}

export default Watch;