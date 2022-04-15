import React, { Fragment } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import CarouselPart from "./Carousel/Carousel";
import Metadata from "../layout/Metadata";

const Home = () => {

  return (
    <Fragment>
      <Metadata title="Digital Bhojnalaya"/>

      <CarouselPart />

      <div className="menu">
      <Link to="/Menu" className="menu-btn">Menu</Link>
      </div>

      <h2 className="heading">Our Services</h2>

    </Fragment>
  );
};

export default Home;
