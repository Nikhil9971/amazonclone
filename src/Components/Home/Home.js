import React from "react";
import "./Home.css";
import amazonBanner from "../../images/amazonbanner.jpeg";
import Product from "../Product/Product";
import prod1 from "../../images/prod1.jpg";
import prod2 from "../../images/prod2.jpg";
import prod3 from "../../images/prod3.jpg";
import prod4 from "../../images/prod4.jpg";
import prod5 from "../../images/prod5.jpg";
import prod6 from "../../images/prod6.jpg";
import prod7 from "../../images/prod7.jpg";
import prod8 from "../../images/prod8.jpg";
import prod9 from "../../images/prod9.jpg";
import Header from "../Header/Header";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <img src={amazonBanner} className="home_image" alt="amazon-banner" />
      <div className="home-body">
        <div className="home_row">
          <Product
            id={1}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={515}
            image={prod1}
            rating={4}
          />
          <Product
            id={2}
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={37700}
            image={prod2}
            rating={4}
          />
          <Product
            id={8}
            title="Kindle (10th Gen), 6 Display with Built-in Light, WiFi (Black)"
            price={6799}
            rating={5}
            image={prod8}
          />
        </div>
        <div className="home_row">
          <Product
            id={3}
            title="LG UltraWide 29 inch (73 cm) IPS FHD, 2560x1080 Pixels, Color Calibrated, 100Hz, 7W x 2 Inbuilt Speaker, USB-C, Display Port, HDMI, White Color-29WQ600"
            price={17899}
            rating={5}
            image={prod3}
          />
          <Product
            id={4}
            title="All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue"
            price={4449}
            rating={4}
            image={prod4}
          />
          <Product
            id={5}
            title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)"
            rating={5}
            price={88990}
            image={prod5}
          />
        </div>
        <div className="home_row">
          <Product
            id={7}
            title="Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
            price={20999}
            rating={4}
            image={prod7}
          />
          <Product
            id={6}
            title="OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)"
            price={61999}
            rating={5}
            image={prod6}
          />
          <Product
            id={9}
            title="True Elements Nuts & Berries Muesli , Almonds& Cranberries 1kg - Muesli Nuts Delight - 30% Berries, Nuts and Seeds | Protein Muesli | Cereal for Breakfast"
            price={449}
            rating={5}
            image={prod9}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
