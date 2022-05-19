import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  AboutUs,
  Blog,
  Contact,
  Home,
  Recipes,
  NotFound,
  BlogPost,
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

import {
  SettingsAccountForm,
  SettingsSecurity,
  SettingsInfo,
  PostDashboardList,
  ArticleDashboardList,
  NewArticleForm,
  NewRecipeForm,
  LoginBox,
  ForgotPassword,
  ResetPassword,
} from "./routes/components";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogged } from "./features/auth/auth-actions";
import PrivateRoute from "./routes/privateRoute";

function App() {
  const { idToken, expirationTime, isLogged } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogged(idToken, expirationTime));
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
          <Route path="*" element={<NotFound />} />
          <Route
            path="panel/posts/*"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Posts />
              </PrivateRoute>
            }
          >
            <Route path="recipe" element={<PostDashboardList />} />
            <Route path="article" element={<ArticleDashboardList />} />
          </Route>
          <Route
            path="panel/newPost/*"
            element={
              <PrivateRoute isLogged={isLogged}>
                <NewPost />
              </PrivateRoute>
            }
          >
            <Route path="recipe" element={<NewRecipeForm />} />
            <Route path="article" element={<NewArticleForm />} />
          </Route>
          <Route path="panel/notice" element={<Notice />} />
          <Route
            path="panel/settings/*"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Settings />
              </PrivateRoute>
            }
          >
            <Route path="account" element={<SettingsAccountForm />} />
            <Route path="security" element={<SettingsSecurity />} />
            <Route path="info" element={<SettingsInfo />} />
          </Route>

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
