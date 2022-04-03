import React, { Fragment } from "react";
import "./Home.css";
import FoodCard from "./Food.js";

const Home = () => {
  const food = {
    food_name: "Noodles",
    food_images: [{ url: "https://picsum.photos/seed/picsum/200/300" }],
    food_description: "This is one of the best.",
    food_price: "200",
    _id: "noodle123",
  };
  return (
    <Fragment>
      hrekrkkdeidejq
      {/* carousel component */}
      <h2 className="heading">Featured Items</h2>

      <div className="container" id="container">
        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />

        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />
      </div>
    </Fragment>
  );
};

export default Home;
