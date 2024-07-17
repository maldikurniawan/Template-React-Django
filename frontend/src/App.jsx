import { CompLayout } from "./components";
import React from "react";
import LoginPage from "./pages/Login/LoginPage"
import PrivateRoute from "./pages/Login/PrivateRoute"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route element={<CompLayout />}>
              <Route index element={<DashboardPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
