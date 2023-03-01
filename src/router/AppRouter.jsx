import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";
import { useState } from "react";
const AppRouter = () => {
  const [log, setLog] = useState("Login")
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar log={log} setLog={setLog}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login log={log} setLog={setLog}/>} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="register" element={<Register log={log} setLog={setLog}/>} />
        <Route path="logout" element={<Logout />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
