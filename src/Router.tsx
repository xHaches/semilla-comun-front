import React, { lazy } from "react";
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

const LLogin = lazy(() => import("../src/modules/auth/pages/Login/Login.tsx"));
const LRegister = lazy(
  () => import("../src/modules/auth/pages/Register/Register.tsx")
);

const LUser = lazy(() => import("./modules/user/User.tsx"));
const LHome = lazy(() => import("./modules/user/pages/Home/Home.tsx"));
const LProyects = lazy(
  () => import("./modules/user/pages/Projects/Projects.tsx")
);
const LMyProyects = lazy(
  () => import("./modules/user/pages/MyProjects/MyProjects.tsx")
);

const LMyProfile = lazy(
  () => import("./modules/user/pages/MyProfile/MyProfile.tsx")
);

const LNewProyect = lazy(
  () => import("./modules/user/pages/NewProject/NewProject.tsx")
);
const LTrackProyects = lazy(
  () => import("./modules/user/pages/TrackProjects/TrackProjects.tsx")
);

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LLogin />} />
      <Route path="register" element={<LRegister />} />
      <Route path="*" element={<Navigate to="login" />} />
      <Route path="user" element={<LUser />}>
        <Route path="home" element={<LHome />} />
        <Route path="projects" element={<LProyects />} />
        <Route path="my-projects" element={<LMyProyects />} />
        <Route path="new-proyect" element={<LNewProyect />} />
        <Route path="track-proyects" element={<LTrackProyects />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
      <Route path="profile" element={<LUser />}>
        <Route path="*" element={<Navigate to="settings" />} />
        <Route path="settings" element={<LMyProfile />} />
        <Route index element={<LMyProfile />} />
      </Route>
    </Routes>
  );
};

export default Router;
