import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MyProfile from "./modules/user/pages/MyProfile/MyProfile.tsx";
import TrackProyects from "./modules/user/pages/TrackProjects/TrackProjects.tsx";
import NewProyect from "./modules/user/pages/NewProject/NewProject.tsx";
import MyProyects from "./modules/user/pages/MyProjects/MyProjects.tsx";
import Projects from "./modules/user/pages/Projects/Projects.tsx";
import Home from "./modules/user/pages/Home/Home.tsx";
import User from "./modules/user/User.tsx";
import Register from "../src/modules/auth/pages/Register/Register.tsx";
import Login from "../src/modules/auth/pages/Login/Login.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="login" />} />
      <Route path="user" element={<User />}>
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="my-projects" element={<MyProyects />} />
        <Route path="new-proyect" element={<NewProyect />} />
        <Route path="track-proyects" element={<TrackProyects />} />
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
