import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ViewportProvider from "./viewport";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import Menu from "./component/Menu/Menu";
import FoodDetails from "./component/Food/FoodDetails.js";
import Search from "./component/Food/Search.js";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Navbar/UserOptions.js";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <ViewportProvider>
        <Router>
          <Navbar />

          {isAuthenticated && <UserOptions user={user} />}

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/Menu" element={<Menu />} />
          </Routes>
          <Routes>
            <Route path="/Menu/fooditem/:id" element={<FoodDetails />} />
          </Routes>
          <Routes>
            <Route path="/Menu/fooditems/:keyword" element={<Menu />} />
          </Routes>
          <Routes>
            <Route path="/search" element={<Search />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </Router>
      </ViewportProvider>
    </Fragment>
  );
}

export default App;
