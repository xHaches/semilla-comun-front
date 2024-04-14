import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./modules/auth/pages/Login/Login";
import Register from "./modules/auth/pages/Register/Register";
import Home from "./modules/user/pages/Home/Home";
import User from "./modules/user/User";
import MyProjects from "./modules/user/pages/MyProjects/MyProjects";
import Projects from "./modules/user/pages/Projects/Projects";
import NewProject from "./modules/user/pages/NewProject/NewProject";
import TrackProjects from "./modules/user/pages/TrackProjects/TrackProjects";
import MyProfile from "./modules/user/pages/MyProfile/MyProfile";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="login" />} />
      <Route path="user" element={<User />}>
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="new-proyect" element={<NewProject />} />
        <Route path="track-proyects" element={<TrackProjects />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
      <Route path="profile" element={<User />}>
        <Route path="*" element={<Navigate to="settings" />} />
        <Route path="settings" element={<MyProfile />} />
        <Route index element={<MyProfile />} />
      </Route>
    </Routes>
  );
};

export default Router;
