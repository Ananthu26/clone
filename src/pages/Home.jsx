import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
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
            src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/medium.mp4#t=0"
            type="video/mp4"
          />
        </video>
        <div className="container h-100 d-flex flex-column justify-content-center animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-4">iPhone 16 Pro</h1>
          <p className="lead mb-5">Built for Apple Intelligence. Designed to Amaze.</p>
          <div>
            <Link to="/iphone" className="btn btn-primary btn-lg me-3">Learn More</Link>
            <Link to="/iphone" className="btn btn-outline-light btn-lg">Buy Now</Link>
          </div>
        </div>
        <div className="overlay" style={{ zIndex: 1 }}></div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Explore Apple Products</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                >
                  <source
                    src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/medium.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="card-body">
                  <h5 className="card-title fw-bold">MacBook Pro</h5>
                  <p className="card-text">Supercharged by M3 Max.</p>
                  <Link
                    to="/mac"
                    className="btn w-100"
                    style={{
                      backgroundColor: '#2d2d2d',
                      color: '#fff',
                      padding: '5px 20px',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                >
                  <source
                    src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4#t=6.002264"
                    type="video/mp4"
                  />
                </video>
                <div className="card-body">
                  <h5 className="card-title fw-bold">iPhone 16 Pro</h5>
                  <p className="card-text">The ultimate smartphone experience.</p>
                  <Link
                    to="/iphone"
                    className="btn w-100"
                    style={{
                      backgroundColor: '#2d2d2d',
                      color: '#fff',
                      padding: '5px 20px',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100" style={{ height: '400px' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title fw-bold">Apple Watch</h5>
                  <p className="card-text">The future of health is on your wrist.</p>
                  <Link
                    to="/watch"
                    className="btn w-100"
                    style={{
                      backgroundColor: '#2d2d2d',
                      color: '#fff',
                      padding: '1px 2px',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  >
                    Discover
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-black overflow-hidden" style={{ height: '400px' }}>
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
                <div className="card-body d-flex flex-column justify-content-end position-relative" style={{ zIndex: 1 }}>
                  <h5 className="card-title fw-bold">iPad Pro</h5>
                  <p className="card-text">Your next computer is not a computer.</p>
                  <Link
                    to="/ipad"
                    className="btn w-100"
                    style={{
                      backgroundColor: '#007bff',
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-headphones fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">AirPods</h5>
                  <p className="card-text">Wireless. Effortless. Magical.</p>
                  <Link
                    to="/airpods"
                    className="btn w-100"
                    style={{
                      backgroundColor: '#2d2d2d',
                      color: '#fff',
                      padding: '1px 2px',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Innovation Spotlight - Apple Intelligence, SOS, Ecosystem */}
      <section className="py-5 bg-dark text-white">
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-5">Innovation Spotlight: AI & Beyond</h2>
          <p className="text-center lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>
            Experience the future with Apple Intelligence, advanced SOS features, and the unmatched benefits of the Apple ecosystem. Smarter AI, life-saving connectivity, and seamless integration redefine what your devices can do.
          </p>

          {/* Apple Intelligence - Image Left */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://cdn.mos.cms.futurecdn.net/xtZzNhvA4MjYFicmHL8Amc.gif"
                className="img-fluid rounded shadow-lg"
                alt="Apple Intelligence Writing Tools"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Apple Intelligence: Your Personal AI</h3>
              <p>
                Apple Intelligence transforms how you interact with your iPhone, iPad, and Mac. Powered by on-device AI, it offers Writing Tools to refine your text, a smarter Siri that understands your screen, and Genmoji for custom expressions. From summarizing emails to enhancing photos with Clean Up, it’s AI tailored to you—securely processed on your device for unmatched privacy.
              </p>
              <Link to="/iphone" className="btn btn-outline-light mt-3">Explore AI Features</Link>
            </div>
          </div>

          {/* New SOS Feature - Image Right */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://cdn.wccftech.com/wp-content/uploads/2023/05/Apple-2-1-728x379.jpg"
                className="img-fluid rounded shadow-lg"
                alt="Emergency SOS via Satellite"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Emergency SOS: Connectivity Anywhere</h3>
              <p>
                The latest iPhone 16 introduces an upgraded Emergency SOS via satellite, now with Roadside Assistance integration. Whether you’re stranded without signal or need help in a crisis, your iPhone connects to satellites to send precise location data and messages to emergency services. It’s peace of mind, no matter where life takes you.
              </p>
              <Link to="/iphone" className="btn btn-outline-light mt-3">Learn About SOS</Link>
            </div>
          </div>

          {/* Ecosystem Benefits - Centered */}
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <img
                src="https://miro.medium.com/v2/resize:fit:3840/format:webp/1*YZo1ckhknr2RoJxuJyesGw.png"
                className="img-fluid rounded shadow-lg mb-4"
                alt="Apple Ecosystem"
                style={{ maxHeight: '400px', width: '100%' }}
              />
              <h3 className="fw-bold mb-3">Apple Ecosystem: Seamless Living</h3>
              <p>
                The Apple ecosystem ties it all together—iPhone, Mac, iPad, Watch, and AirPods working in harmony. Share files effortlessly with AirDrop, answer calls from your Mac, or unlock your devices with a glance. Apple Intelligence enhances this synergy, syncing AI-driven insights across your devices, keeping your digital life connected, secure, and intuitive.
              </p>
              <Link to="/" className="btn btn-outline-light mt-3">Discover Ecosystem Benefits</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;