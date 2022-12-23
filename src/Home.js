import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Oraimo Rock in Ear Bluetooth True Wireless Earbuds with Mic, 24H Battery Life and Quick Charge, True Bass"
            price={220}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51kywrQpbQL._SY450_.jpg"
          />
          <Product
            id="49538094"
            title="Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery"
            price={20039.0}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81UT07JsBqL._AC_UL450_SR450,320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={4000}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={5000}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={65000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Acer Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/8150iUXkc5L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
