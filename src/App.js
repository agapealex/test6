import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comp1 from "./components/comp1/comp1";
import Home from "./components/home/home";
import Header from "./components/header/header";
import { BrowserView, MobileView } from "react-device-detect";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

function DesktopNavigation() {
  return (
    <>
      <Header />
    </>
  );
}

function MobileNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="mobile-navigation"
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        component={Link}
        to="/home"
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        component={Link}
        to="/comp1"
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        component={Link}
        to="/comp1"
      />
    </BottomNavigation>
  );
}

function App() {
  const [st, setSt] = useState({ beMessage: "" });
  // fetch("https://node-test-production-7782.up.railway.app/home")/////
  //   .then((resp) => resp.json())
  //   .then((resp) => {
  //     setSt({ beMessage: resp.message });
  //   })
  //   .catch((err) => console.log(err, "erroareee"));

  console.log(process.env, "%%%");

  return (
    <div className="App">
      <BrowserRouter basename="/test6">
        <BrowserView>
          <DesktopNavigation />
        </BrowserView>
        <MobileView>
          <MobileNavigation />
        </MobileView>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="comp1" element={<Comp1 />} />
        </Routes>
      </BrowserRouter>

      <h1>{st.beMessage}</h1>
    </div>
  );
}

export default App;
