import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AboutUs,
  Blog,
  Contact,
  Home,
  Recipes,
  NotFound,
  BlogPost,
  Recipe,
} from "./routes/user";

import {
  Posts,
  NewPost,
  Notice,
  Settings,
  Statistic,
  Contacts,
  Login,
  Register,
} from "./routes/panel";

import { LoginBox, ForgotPassword, ResetPassword } from "./routes/components";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogged } from "./features/auth/auth-actions";
import PrivateRoute from "./routes/privateRoute";
import { fetchRecipes } from "./features/recipe/recipeSlice";
import axios from "axios";

function App() {
  const { idToken, expirationTime, isLogged } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogged(idToken, expirationTime));
  }, [idToken, expirationTime]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://foodieland-3b1ed-default-rtdb.firebaseio.com/recipes.json"
      );
      console.log(data);
      dispatch(fetchRecipes(data));
    }
    fetchData();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="panel/posts/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route
            path="panel/newPost/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <NewPost />
              </PrivateRoute>
            }
          />
          <Route path="panel/notice" element={<Notice />} />
          <Route
            path="panel/settings/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Settings />
              </PrivateRoute>
            }
          />

          <Route
            path="panel/statistic"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Statistic />
              </PrivateRoute>
            }
          />
          <Route
            path="panel/contact"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="panel/login/*" element={<Login />}>
            <Route path="" element={<LoginBox />} />
            <Route path="forget-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="panel/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
