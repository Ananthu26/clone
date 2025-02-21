import React from 'react';

function Mac() {
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
          src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/medium.mp4" // MacBook Pro video from Apple
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
          autoPlay
          loop
          muted
        />
        <div className="container h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-4">MacBook Pro</h1>
          <p className="lead mb-5">M3 Max and M3 Ultra.</p>
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

      {/* Why Mac Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="text-center mb-5">Why Mac?</h2>
          <div className="row">
            <div className="col-md-6 px-4">
            <video
                src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/performance/medium.mp4" // Display design video from Apple
                className="img-fluid mb-4"
                style={{ width: '100%' }}
                autoPlay
                loop
                muted
              />
              <h4 className="mb-3">Extreme Performance</h4>
              <p>Up to 12-core CPU and 38-core GPU.</p>
            </div>
            <div className="col-md-6 px-4">
              <img
                src="https://ca-times.brightspotcdn.com/dims4/default/34830f4/2147483647/strip/true/crop/1960x1274+0+0/resize/1024x666!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F28%2Fcb%2F29efb8cb4f86ad21db53e25eda8c%2Fla-photos-handouts-apple-macbook-pro-14-16-inch-10182021.jpg" // Display design image from Unsplash
                className="img-fluid mb-4"
                alt="Display Design"
              />
              <h4 className="mb-3">Stunning Display</h4>
              <p>14-inch and 16-inch Liquid Retina XDR.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mac;