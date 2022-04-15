import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./FoodDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getFooditemDetails } from "../../actions/foodAction.js";
import { Link, useParams } from "react-router-dom";
import Loading from "../layout/Loading/Loading";

const FooditemDetails = (props) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { fooditem, loading, error } = useSelector(
    (state) => state.foodDetails
  );

  //console.log(id);

  useEffect(() => {
    dispatch(getFooditemDetails(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="FoodDetails">
            <div>
              {fooditem.food_images &&
                  fooditem.food_images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              {/* <Carousel>
                {fooditem.food_images &&
                  fooditem.food_images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel> */}
            </div>
            <div>
              <div className="detailsBlock-1">
                <h1>{fooditem.food_name}</h1>
                <p>Fooditem #{fooditem._id}</p>
              </div>
              <div className="detailsBlock-2">
                <h1>{`₹${fooditem.food_price}`}</h1>
                <div className="detailsBlock-2-1">
                  <div className="detailsBlock-2-1-1">
                    <button>-</button>
                    <input value="1" type="number" />
                    <button>+</button>
                  </div>{" "}
                  <button>Add to Cart</button>
                </div>

                <p>
                  Status:{" "}
                  <b
                    className={
                      fooditem.food_quantity < 1 ? "redColor" : "greenColor"
                    }
                  >
                    {fooditem.food_quantity < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-3">
                Description: <p>{fooditem.food_description}</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FooditemDetails;
