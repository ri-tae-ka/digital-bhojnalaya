import React, { Fragment, useState } from "react";
import "./userOptions.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Dashboard from "@mui/icons-material/Dashboard";
import Person from "@mui/icons-material/Person";
import ExitToApp from "@mui/icons-material/ExitToApp";
import ListAlt from "@mui/icons-material/ListAlt";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";

const UserOptions = ({ user }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const options = [
    { icon: <ListAlt />, name: "Orders", func: orders },
    { icon: <Person />, name: "Profile", func: account },
    { icon: <ExitToApp />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <Dashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/dashboard");
  }

  function orders() {
    navigate("/orders");
  }

  function account() {
    navigate("/account");
  }

  function logoutUser() {
    dispatch(logout());
    window.alert("Logged Out");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{zIndex: "10"}} />
      <SpeedDial
        className="speedDial"
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url!=="This is sample url" ? user.avatar.url : "/logo192.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
          />
        ))}
        ;
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
