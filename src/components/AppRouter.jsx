import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { publicRoutes, privateRoutes } from "../router";

export default function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="/*" element={<Posts to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="/*" element={<Login to="/login" replace />} />
    </Routes>
  );
}

{
  /* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Error to="/errors" replace />} /> */
}
