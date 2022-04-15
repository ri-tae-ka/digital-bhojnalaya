import React, { Fragment, useEffect } from "react";
import "./Menu.css";
import FoodCard from "../Home/Food.js";
import { getFooditem } from "../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/Loading/Loading";

const Menu = () => {
  const dispatch = useDispatch();

  const { loading, error, fooditems, fooditemCount } = useSelector(
    (state) => state.fooditems
  );

  useEffect(() => {
    dispatch(getFooditem());
  }, [dispatch]);

  // const food = {
  //   food_name: "Noodles",
  //   food_images: [{ url: "https://picsum.photos/seed/picsum/200/300" }],
  //   food_description: "This is one of the best.",
  //   food_price: "200",
  //   _id: "noodle123",
  // };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h2 className="heading">Menu</h2>

          <div className="container" id="container">
            {/* <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />

        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} />
        <FoodCard food={food} /> */}
            {fooditems &&
              fooditems.map((fooditem) => <FoodCard food={fooditem} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Menu;
