import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// //user routes
// import AboutUs from "./components/pages/user/aboutUs";
// import Blog from "./components/pages/user/blog";
// import Contact from "./components/pages/user/contact";
// import Home from "./components/pages/user/home";
// import Recipes from "./components/pages/user/recipes";
// import NotFound from "./components/pages/user/notFound";
// import SingleBlog from "./components/pages/user/singleBlog";
// //panel routes
// import Login from "./components/pages/panel/login";
// import NewPost from "./components/pages/panel/newPost";
// import Notice from "./components/pages/panel/notice";
// import Option from "./components/pages/panel/option";
// import Posts from "./components/pages/panel/posts";
// import Statistic from "./components/pages/panel/statistic";
// import Contacts from "./components/pages/panel/contacts";

import {
  AboutUs,
  Blog,
  Contact,
  Home,
  Recipes,
  NotFound,
  SingleBlog,
  Posts,
  NewPost,
  Notice,
  Settings,
  Statistic,
  Contacts,
  Login,
} from "./utils/routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="panel/posts" element={<Posts />} />
          <Route path="panel/newPost" element={<NewPost />} />
          <Route path="panel/notice" element={<Notice />} />
          <Route path="panel/settings" element={<Settings />} />
          <Route path="panel/statistic" element={<Statistic />} />
          <Route path="panel/login" element={<Login />} exact />
          <Route path="panel/contact" element={<Contacts />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
