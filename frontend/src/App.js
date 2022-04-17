import React, { Fragment } from "react";
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

function App() {
  return (
    <Fragment>
      <ViewportProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
          <Routes>
            <Route path="/Menu" element={<Menu/>} />
          </Routes>
          <Routes>
            <Route path="/Menu/fooditem/:id" element={<FoodDetails/>} />
          </Routes>
          <Routes>
            <Route path="/Menu/fooditems/:keyword" element={<Menu/>} />
          </Routes>
          <Routes>
            <Route path="/search" element={<Search/>} />
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginSignup/>} />
          </Routes>
          <Footer />
        </Router>
      </ViewportProvider>
    </Fragment>
  );
}

export default App;
