/*import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> 
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
*/

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);

      // Mock products data (you can replace this with actual data fetching from your API)
      const staticProducts = [
        {
          id: 1,
          title: "L'Oreal Paris Casting Creme Gloss",
          description: "Semi-Permanent Hair Colour - 515 Chocolate Chestnut (Ammonia free)",
          price: 13.99,
          category: "Hair Care",
          des:"Cover first greys without the commitment with L'Oréal Paris Casting Crème Gloss. With caring, nature inspired ingredients tailored to your hair colour, that lasts up to 28 shampoos. No ammonia for a pleasant scent. This will be your go-to hair colour for ultra-glossy, natural looking colour. Available is an array of high shine shades.",
          image: "/assets/1.jpg",
        },
        {
          id: 2,
          title: "L'Oreal Men Expert ",
          description: "Power Age Moisturiser 50ml",
          price: 20.99,
          category: "Men's Care",
          des:"The Power Age 24H Anti-Ageing Moisturiser from L'Oreal Paris Men Expert is boosted with a duo of hyaluronic acids, an ingredient well-known for its deeply hydrating properties, playing a key role in the integrity of the skin structure and in the retention of skin hydration. This ultra-efficient anti-ageing moisturiser for men provides 3 powerful actions: firms and strengthens skin's elasticity, provides intense moisture for fresher & revitalized skin, increases skin smoothness.",
          image: "/assets/2.jpg",
        },
        {
          id: 3,
          title: "L'Oreal Paris Revitalift Filler",
          description: "Hyaluronic Acid Anti Wrinkle Serum 30ml",
          price: 35.99,
          category: "Skin Care",
          des:"This serum been specifically developed to effectively hydrate and plump skin. Its advanced formula is quick to absorb and delivers a non-greasy finish. The Revitalift Filler facial serum contains a scientifically formulated blend of 3 forms of pure Hyaluronic Acid to help retain skin's own moisture: Now enriched with Micro-Epidermic Hyaluronic Acid, 50X smaller than Macro Hyaluronic Acid.",
          image: "/assets/3.jpg",
        },
        {
          id: 4,
          title: "L'Oreal Paris Telescopic Mascara ",
          description: "Black",
          price: 17.99,
          category: "Makeup",
          des:"L'Oréal Paris Telescopic Clean Definition Mascara delivers cleanly defined, well separated lashes. The flexible brush separates and coats your lashes one by one for extreme length and definition. Telescopic length with up to 70% longer looking lashes and precise separation for your eyes only!",
          image: "/assets/4.jpg",
        },
        {
          id: 5,
          title: "L'Oreal Paris Revitalift Laser X3",
          description: "Day Cream SPF 15 50ml",
          price: 32.99,
          category: "Skin Care",
          des:"Now with an improved formula combining 3 top derm actives, Pro-Retinol, Hyaluronic Acid and Vitamin C*, to target visible sign of ageing smooths wrinkles, firms and brightens the look of skin and renews skins appearance. This day cream is also formulated with SPF to protect skin from UV rays. Effective on all skin types and tones, including sensitive skin.",
          image: "/assets/5.jpg",
        },
        {
          id: 6,
          title: "L'Oreal Paris Revitalift Laser ",
          description: "Retinol + Niacinamide Pressed Cream 50ml",
          price: 35.69,
          category: "Skin Care",
          des:"Retinol, a dermatologist-recommended active known for its ability to renew skin and fight even the most stubborn signs of ageing such as deep wrinkles, age spots and uneven skin texture.Niacinamide, an essential nutrient that helps brighten and even skin tone for a healthier looking complexion",
          image: "/assets/6.jpg", // your own image
        },
        {
          id: 7,
          title: "L'Oreal Paris Lash Paradise Mascara",
          description: "Intense Black",
          price: 15.69,
          category: "Makeup",
          des:"Take your lashes to paradise with intense volume and spectacular length. The Ultra-Soft brush coats lashes with a silky smooth formula, enriched with lash-loving castor oil.Lashes feel feather-soft, without any flaking.",
          image: "/assets/7.jpg", // your own image
        },
        {
          id: 8,
          title: "L'Oreal Paris Magic Retouch",
          description: "Temporary Root Concealer SprayDark Brown(Instant Grey Hair Coverage)",
          price: 12.39,
          category: "Hair Care",
          des:" Our Magic Retouch Instant Root Concealer Spray temporary root colour delivers a quick fix in 3 seconds. Designed for those looking to cover grey and white hairs, this root concealer provides temporary colour that rinses easily with shampoo. Application is easy and the pin-point micro diffuser allows for a light, but thorough, spray that ensures each hair gets targeted with natural looking colour for seamless coverage.",
          image: "/assets/8.png", // your own image
        },
        {
          id: 9,
          title: "L'Oreal Paris True Match Nude ",
          description: "Plumping Tinted Serum Foundation Light 2-3",
          price: 26.99,
          category: "Lip & Face Base",
          des:"The perfect combination of skincare and makeup, now with an improved formula for better skincare benefits. Visibly replumps your skin in just 1 hour! This hydrating hyaluronic acid serum foundation smoothes, hydrates and replumps the skin like a serum while giving it a radiant finish and coverage just like a foundation.",
          image: "/assets/9.png", // your own image
        },
        {
          id: 10,
          title: "L'Oreal Paris Cest Magic BB Cream",
          description: "03 Medium Light",
          price: 15.99,
          category: "Lip & Face Base",
          des:"Perfect your skin with L'Oréal Paris Magic BB cream, now formulated with Vitamin B5 and Vitamin E. This lightweight formula transforms to adapt to skin tone for a flawless finish. Providing up to 24 hours of hydration, Magic BB cream provides a natural make-up result all day long. This BB cream helps to minimise the appearance of imperfections, wrinkles, and pores",
          image: "/assets/10.jpg", // your own image
        },
        {
          id: 11,
          title: "Elvive Extraordinary Oil Treatment ",
          description: "100ml for Dry Hair",
          price: 18.99,
          category: "Jair Care",
          des:"L'Oréal Paris Elvive Extraordinary Oil Treatment is a hair oil for all hair types. Enriched with 6 precious flower oils, the formula deeply penetrates the hair fibre for ultimate nourishment and protection without leaving hair greasy. Vital in the haircare regime to protect hair from styling damage. It's your daily shortcut to perfect-looking hair.",
          image: "/assets/11.jpg", // your own image
        },
        {
          id: 12,
          title: "Rouge Signature Plump Lip Gloss ",
          description: "402 I Soar",
          price: 14.00,
          category: "Lip & Face Base",
          des:"Sign your lips with sophistication with L'Oréal Paris Brilliant Signature Plumping Gloss! Infused with skincare ingredients for a lasting plump - it's more than a gloss. With Hyaluronic Acid to enhance, hydrate and moisturise your lips and Collagen Complex for a lasting plump. NEW volume applicator contours to every lip and is shaped for generous application. ",
          image: "/assets/12.jpg", // your own image
        },
        {
          id: 13,
          title: "L'Oreal Men Expert Hydra Energetic Scrub ",
          description: "100mL",
          price: 9.99,
          category: "Men's Care",
          des:"Discover the Hydra Energetic Deep Exfoliating Daily Face Scrub by L'Oréal Men Expert. This facial cleanser is designed to remove impurities and eliminate shine for skin that are prone to clogged pores.This face scrub intensely cleanses and purifies the skin leaving it feeling soft and refreshed.",
          image: "/assets/13.jpg", // your own image
        },
        {
          id: 14,
          title: "L'Oreal Elvive Dream Lengths",
          description: "No Haircut Cream Leave In Treatment 200ml",
          price: 11.99,
          category: "Hair Care",
          des:"Discover our Elvive Dream Lengths, our first range formulated to help you achieve your long hair goals. It's enriched with a cocktail of Keratin, Vitamins and Castor Oil. Say no to cutting and yes to the hair of your dreams!",
          image: "/assets/14.png", // your own image
        },
        {
          id: 15,
          title: "Volume Million Lashes Mascara Balm Noir",
          description: "",
          price: 17.99,
          category: "Makeup",
          des:"Amplify your lashes with 7x more volume* with L'Or?al Paris Volume Million Lashes Balm Noir Mascara. Made with 99% Natural Origin Ingredients, the Volume Million Lashes Balm Noir contains no parabens, no silicones and no mineral oils for excellent eyelash care.",
          image: "/assets/15.png", // your own image
        },
        {
          id: 16,
          title: "L'Oreal Paris Cest Magic CC Cream",
          description: "Anti-Redness",
          price: 17.39,
          category: "Lip & Face Base",
          des:"The CC cream formula contains mineral pigments which green tone blend seamlessly to help correct the appearance of redness in the skin. Colour matching pigments release on application to match the skin's unique tone and texture. Enriched with Glycerine and Fig extracts, the texture is a light with long lasting hydration benefits of up to 24 hours.",
          image: "/assets/16.jpg", // your own image
        },
        {
          id: 17,
          title: "L'Oreal Bright Reveal Tinted ",
          description: "SPF 50 Fluid Medium 50ml",
          price: 32.99,
          category: "Lip & Face Base",
          des:"A dermatologist-validated, lightweight tinted fluid that provides broad-spectrum SPF 50 protection while visibly brightening and evening skin tone. Formulated with Niacinamide, it helps reduce the appearance of dark spots, for a smoother, more radiant complexion. Suitable for all skin types, even sensitive skin.",
          image: "/assets/17.png", // your own image
        },
        {
          id: 18,
          title: "L'Oreal Paris Revitalift Filler  ",
          description: "[HA] Night Moisturiser 50ml",
          price: 32.99,
          category: "Skin Care",
          des:"Discover a non-invasive alternative to cosmetic procedures with L'Oreal Paris Revitalift Filler skincare range. Revitalift Filler [ Hyaluronic Acid] Intensive Replumping Night Moisturiser has been designed to fill lines and re-plump the skin. The night moisturiser contains the highest concentration of Hyaluronic Acid ever formulated in a L'Oreal Paris cream.",
          image: "/assets/18.jpg", // your own image
        },
      ];

      const currentProduct = staticProducts.find(p => p.id === parseInt(id));
      setProduct(currentProduct);

      // Pick random products (exclude the current product)
      const randomList = staticProducts.filter(p => p.id !== parseInt(id));
      // Shuffle the array and take the first 4 products as random selection
      const shuffled = randomList.sort(() => 0.5 - Math.random()).slice(0, 4);
      setRandomProducts(shuffled);

      setLoading(false);
      setLoading2(false);
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">{product.description}</p>
              <h3 className="display-6 my-4">${product.price}</h3>
              <p className="lead">{product.des}</p>
              <Link to="/checkout" className="btn btn-dark mx-3">Buy Now</Link>
             
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>

              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
             
              
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowRandomProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {randomProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center" style={{ cursor: "pointer" }}>
                  <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <img
                      className="card-img-top p-3"
                      src={item.image}
                      alt="Card"
                      height={300}
                      width={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title.substring(0, 15)}...
                      </h5>
                    </div>
                    <div className="card-body">
                    <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                        Buy Now
                      </Link>
                      <button
                        className="btn btn-dark m-1"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the link click from firing
                          addProduct(item);
                        }}
                      >
                        Add to Cart
                      </button>
                      
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
  
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowRandomProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;


