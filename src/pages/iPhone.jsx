import React from 'react';

function Iphone() {
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
            src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/medium.mp4#t=0"
            type="video/mp4"
          />
        </video>
        <div className="container h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-4">iPhone 16 Pro</h1>
          <p className="lead mb-5">Pro-level performance and design.</p>
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

     {/* Key Features Section */}
<section className="py-5 text-white text-center" style={{ backgroundColor: '#000000' }}>
  <div className="container py-5">
    <h2 className="text-center mb-5">Key Features</h2>
    <hr />
    <br />
    <div className="row justify-content-center pt-3 align-items-center">
      {/* Feature 1 */}
      <div className="col-md-4 mb-5 px-4">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0px',
            backgroundColor: '#0000',
            borderRadius: '15px',
            height: '100%',
          }}
        >
          <img
            src="https://www.apple.com/v/iphone-16-pro/e/images/overview/product-stories/design/display__f5509jfp9nyq_medium.jpg"
            alt="Titanium Design"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '1rem',
            }}
          />
          <h4 className="mb-3">Grade 5 Titanium</h4>
          <p>Stronger and lighter than ever.</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-md-4 mb-5 px-4">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0px',
            backgroundColor: '#0000',
            borderRadius: '15px',
            height: '100%',
          }}
        >
          <img
            src="https://www.apple.com/v/iphone-16-pro/e/images/overview/apple-intelligence/apple_intelligence_endframe__ksa4clua0duu_medium.jpg"
            alt="Apple Intelligence"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '1rem',
            }}
          />
          <h4 className="mb-3">Apple Intelligence</h4>
          <p>AI-opening possibilities.</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-md-4 mb-5 px-4">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#0000',
            borderRadius: '15px',
            height: '100%',
          }}
        >
          <img
            src="https://www.apple.com/v/iphone-16-pro/e/images/overview/chip/chip_endframe__d9ww29ytvb0i_medium.jpg"
            alt="A18 Pro Chip"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '1rem',
            }}
          />
          <h4 className="mb-3">A18 Pro Chip</h4>
          <p>Unmatched speed and efficiency.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Compare Models Section */}
      <section className="pb-5" style={{ backgroundColor: '#000000' }}>
        <div className="container py-5 text-center text-white "style={{ backgroundColor: '#000000' }}> 
          <h2 className="mb-5">Compare Models</h2>
          <hr></hr>
          <p className="lead mb-4">Find the iPhone that’s right for you.</p>
          <img
            src="https://www.apple.com/v/iphone-16-pro/e/images/overview/product-stories/design/color__eaawe4bmivki_medium.jpg" // Compare iPhone Models
            className="img-fluid rounded"
            alt="Compare iPhone Models"
          />
        </div>
      </section>
    </div>
  );
}

export default Iphone;