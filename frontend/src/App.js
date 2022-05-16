import React, { Fragment, useEffect, useState } from "react";
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
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
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

          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
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
            </Elements>
          )}
          <Routes>
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <MyOrders />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/order/:id"
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order/confirm"
              element={
                <ProtectedRoute>
                  <ConfirmOrder />
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
