import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import "../css/about.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <h1 className="text-center mb-4">About Us</h1>
        <hr />
        <p className="lead text-center mb-4">
          Welcome to <strong>Amorgleam</strong>, where beauty meets excellence. We specialize in providing high-quality skincare and haircare solutions that enhance your natural beauty. From hair color treatments to anti-aging serums, we carefully select each product to ensure it meets the highest standards of effectiveness and safety.
        </p>

        <div className="container my-5 py-5">
          {/* Mission Section */}
          <div className="row mb-5 card-section">
            <div className="col-12">
              <div className="card">
                <h2>Our Mission</h2>
                <p className="lead">
                  At <strong>Amorgleam</strong>, our mission is simple: to provide our customers with top-quality skincare and haircare products that promote beauty and well-being. We are committed to offering products that combine innovation, effectiveness, and luxury, ensuring that every customer feels confident and radiant.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="row mb-5 card-section">
            <div className="col-12">
              <div className="card">
                <h2>Why Choose Us?</h2>
                <p className="lead">
                  We strive to be your trusted partner in beauty and wellness, providing products that cater to your needs. Here's why our customers choose us:
                </p>
                <ul className="list-unstyled">
                  <li><strong>Premium Quality:</strong> We ensure that all our products are sourced from top-tier manufacturers to guarantee exceptional results.</li>
                  <li><strong>Affordable Luxury:</strong> Our products are priced to make high-quality beauty care accessible to everyone.</li>
                  <li><strong>Fast & Reliable Shipping:</strong> We offer quick and secure shipping to ensure your products arrive on time and in perfect condition.</li>
                  <li><strong>Customer Satisfaction:</strong> Our dedicated customer support team is here to assist with any inquiries and ensure you have a delightful experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h2 className="text-center py-4">Explore Our Product Categories</h2>
<div className="row justify-content-center">
  <div className="col-md-2 col-sm-4 mb-3 px-3">
    <Link to="/product" className="text-decoration-none text-dark">
      <div className="card h-100">
        <img
          className="card-img-top img-fluid"
          src="../../assets/1.jpg"
          alt="Hair Care"
          height={160}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Hair Care</h5>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-md-2 col-sm-4 mb-3 px-3">
    <Link to="/product" className="text-decoration-none text-dark">
      <div className="card h-100">
        <img
          className="card-img-top img-fluid"
          src="../../assets/3.jpg"
          alt="Skin Care"
          height={160}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Skin Care</h5>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-md-2 col-sm-4 mb-3 px-3">
    <Link to="/product" className="text-decoration-none text-dark">
      <div className="card h-100">
        <img
          className="card-img-top img-fluid"
          src="../../assets/7.jpg"
          alt="Makeup"
          height={160}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Makeup</h5>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-md-2 col-sm-4 mb-3 px-3">
    <Link to="/product" className="text-decoration-none text-dark">
      <div className="card h-100">
        <img
          className="card-img-top img-fluid"
          src="../../assets/9.png"
          alt="Lip & Face Base"
          height={160}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Lip & Face Base</h5>
        </div>
      </div>
    </Link>
  </div>

  <div className="col-md-2 col-sm-4 mb-3 px-3">
    <Link to="/product" className="text-decoration-none text-dark">
      <div className="card h-100">
        <img
          className="card-img-top img-fluid"
          src="../../assets/2.jpg"
          alt="Men's Care"
          height={160}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Men's Care</h5>
        </div>
      </div>
    </Link>
  </div>
</div>
      
      <Footer />
    </>
  );
};

export default AboutPage;
