import React, { Fragment } from "react";
import "./Menu.css";
import FoodCard from "../Home/Food.js";

const Menu = () => {
  const food = {
    food_name: "Noodles",
    food_images: [{ url: "https://picsum.photos/seed/picsum/200/300" }],
    food_description: "This is one of the best.",
    food_price: "200",
    _id: "noodle123",
  };

  return (
    <Fragment>
        <h2 className="heading">Menu</h2>

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

export default Menu;
