
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../css/product.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    // Hardcode the products
    const staticProducts = [
      {
        id: 1,
        title: "L'Oreal Paris Casting Creme Gloss",
        description: "Semi-Permanent Hair Colour - 515 Chocolate Chestnut (Ammonia free)",
        price: 13.99,
        category: "Hair Care",
        image: "/assets/1.jpg", // your own image
      },
      {
        id: 2,
        title: "L'Oreal Men Expert ",
        description: "Power Age Moisturiser 50ml",
        price: 20.99,
        category: "Men's Care",
        image: "/assets/2.jpg", // your own image
      },
      {
        id: 3,
        title: "L'Oreal Paris Revitalift Filler",
        description: "Hyaluronic Acid Anti Wrinkle Serum 30ml",
        price: 35.99,
        category: "Skin Care",
        image: "/assets/3.jpg", // your own image
      },
      {
        id: 4,
        title: "L'Oreal Paris Telescopic Mascara ",
        description: "Black",
        price: 17.99,
        category: "Makeup",
        image: "/assets/4.jpg", // your own image
      },
      {
        id: 5,
        title: "L'Oreal Paris Revitalift Laser X3",
        description: "Day Cream SPF 15 50ml",
        price: 32.99,
        category: "Skin Care",
        image: "/assets/5.jpg", // your own image
      },
      {
        id: 6,
        title: "L'Oreal Paris Revitalift Laser ",
        description: "Retinol + Niacinamide Pressed Cream 50ml",
        price: 35.69,
        category: "Skin Care",
        image: "/assets/6.jpg", // your own image
      },
      {
        id: 7,
        title: "L'Oreal Paris Lash Paradise Mascara",
        description: "Intense Black",
        price: 15.69,
        category: "Makeup",
        image: "/assets/7.jpg", // your own image
      },
      {
        id: 8,
        title: "L'Oreal Paris Magic Retouch",
        description: "Temporary Root Concealer SprayDark Brown(Instant Grey Hair Coverage)",
        price: 12.39,
        category: "Hair Care",
        image: "/assets/8.png", // your own image
      },
      {
        id: 9,
        title: "L'Oreal Paris True Match Nude ",
        description: "Plumping Tinted Serum Foundation Light 2-3",
        price: 26.99,
        category: "Lip & Face Base",
        image: "/assets/9.png", // your own image
      },
      {
        id: 10,
        title: "L'Oreal Paris Cest Magic BB Cream",
        description: "03 Medium Light",
        price: 15.99,
        category: "Lip & Face Base",
        image: "/assets/10.jpg", // your own image
      },
      {
        id: 11,
        title: "Elvive Extraordinary Oil Treatment ",
        description: "100ml for Dry Hair",
        price: 18.99,
        category: "Jair Care",
        image: "/assets/11.jpg", // your own image
      },
      {
        id: 12,
        title: "Rouge Signature Plump Lip Gloss ",
        description: "402 I Soar",
        price: 14.00,
        category: "Lip & Face Base",
        image: "/assets/12.jpg", // your own image
      },
      {
        id: 13,
        title: "L'Oreal Men Expert Hydra Energetic Scrub ",
        description: "100mL",
        price: 9.99,
        category: "Men's Care",
        image: "/assets/13.jpg", // your own image
      },
      {
        id: 14,
        title: "L'Oreal Elvive Dream Lengths",
        description: "No Haircut Cream Leave In Treatment 200ml",
        price: 11.99,
        category: "Hair Care",
        image: "/assets/14.png", // your own image
      },
      {
        id: 15,
        title: "Volume Million Lashes Mascara Balm Noir",
        description: "",
        price: 17.99,
        category: "Makeup",
        image: "/assets/15.png", // your own image
      },
      {
        id: 16,
        title: "L'Oreal Paris Cest Magic CC Cream",
        description: "Anti-Redness",
        price: 17.39,
        category: "Lip & Face Base",
        image: "/assets/16.jpg", // your own image
      },
      {
        id: 17,
        title: "L'Oreal Bright Reveal Tinted ",
        description: "SPF 50 Fluid Medium 50ml",
        price: 32.99,
        category: "Lip & Face Base",
        image: "/assets/17.png", // your own image
      },
      {
        id: 18,
        title: "L'Oreal Paris Revitalift Filler  ",
        description: "[HA] Night Moisturiser 50ml",
        price: 32.99,
        category: "Skin Care",
        image: "/assets/18.jpg", // your own image
      },
      // Add more products here
    ];

    setData(staticProducts);
    setFilter(staticProducts);
    setLoading(false);  // Set loading to false after setting the data

  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        {/* Add more Skeleton loaders if needed */}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Skin Care")}
          >
            Skin Care
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Hair Care")}
          >
            Hair Care
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Makeup")}
          >
            Makeup
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Lip & Face Base")}
          >
            Lip & Face Base
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Men's Care")}
          >
            Men's Care
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <Link to={"/product/" + product.id} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              </Link>
            </div>
          );
          
        })}
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Our Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;

