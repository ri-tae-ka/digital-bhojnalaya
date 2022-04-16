import React, { Fragment, useEffect, useState } from "react";
import "./Menu.css";
import FoodCard from "../Home/Food.js";
import { getFooditem } from "../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/Loading/Loading";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const Menu = (props) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, fooditems, fooditemCount, resultsPerPage } = useSelector(
    (state) => state.fooditems
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const { keyword } = useParams();

  useEffect(() => {
    dispatch(getFooditem(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

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
              fooditems.map((fooditem) => (
                <FoodCard food={fooditem} key={fooditem._id} />
              ))}
          </div>

          {resultsPerPage < fooditemCount && (
            <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultsPerPage}
              totalItemsCount={fooditemCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="First"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Menu;
