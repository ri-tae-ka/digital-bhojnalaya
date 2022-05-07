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
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";

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
          <Routes>
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/me/update"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/password/update"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route path="/password/forgot" element={<ForgotPassword />} />
          </Routes>
          <Routes>
            <Route path="/password/reset/:token" element={<ResetPassword />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Routes>
            <Route
              path="/login/shipping"
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/order/confirm"
              element={
                <ProtectedRoute>
                  <ConfirmOrder />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/process/payment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </ViewportProvider>
    </Fragment>
  );
}

export default App;
