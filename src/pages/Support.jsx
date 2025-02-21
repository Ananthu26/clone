import React from 'react';

function Support() {
  return (
    <div className="pt-5">
      <section className="py-5 text-center">
        <div className="container py-5">
          <h1 className="display-4 mb-5">Apple Support</h1>
          <p className="lead mb-5">Get help with your Apple products.</p>
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-as-yt-home-promo.image.large_2x.png" // High-res support hero image
            className="img-fluid mb-5"
            alt="Apple Support"
          />
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row text-center justify-content-center">
          <div className="row justify-content-center">
  {/* Column 1: Chat with Us */}
  <div className="col-md-4 mb-5 px-4 d-flex flex-column align-items-center text-center">
    <img
      src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-supportapp.image.large_2x.png"
      className="img-fluid mb-4 rounded" // Added rounded corners for consistency
      alt="Chat Support"
      style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed height and width
    />
    <h3 className="mb-3">Chat with Us</h3>
    <p className="mb-4">Talk to an Apple Support specialist.</p>
    <button className="btn btn-primary mt-auto">Start Chat</button>
  </div>

  {/* Column 2: Find a Store */}
  <div className="col-md-4 mb-5 px-4 d-flex flex-column align-items-center text-center">
    <img
      src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-lg-getstartediphone_2x.png"
      className="img-fluid mb-4 rounded" // Added rounded corners for consistency
      alt="Find a Store"
      style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed height and width
    />
    <h3 className="mb-3">Find a Store</h3>
    <p className="mb-4">Visit an Apple Store near you.</p>
    <button className="btn btn-primary mt-auto">Locate</button>
  </div>

  {/* Column 3: Community Support */}
  <div className="col-md-4 mb-5 px-4 d-flex flex-column align-items-center text-center">
    <img
      src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-getsupport.image.large_2x.png"
      className="img-fluid mb-4 rounded" // Added rounded corners for consistency
      alt="Community Support"
      style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed height and width
    />
    <h3 className="mb-3">Community</h3>
    <p className="mb-4">Ask questions and get answers.</p>
    <button className="btn btn-primary mt-auto">Join Now</button>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;