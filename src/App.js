import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//user routes
import AboutUs from "./components/Pages/user/aboutUs";
import Blog from "./components/Pages/user/blog";
import Contact from "./components/Pages/user/contact";
import Home from "./components/Pages/user/home";
import Recipes from "./components/Pages/user/recipes";
import Post from "./components/Pages/user/aboutUs";
import NotFound from "./components/Pages/user/notFound";
//panel routes
import Login from "./components/Pages/panel/login";
import NewPost from "./components/Pages/panel/newPost";
import Notice from "./components/Pages/panel/notice";
import Option from "./components/Pages/panel/option";
import Posts from "./components/Pages/panel/posts";
import Statistic from "./components/Pages/panel/statistic";
import Contacts from "./components/Pages/panel/contacts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="panel/posts" element={<Posts />} />
          <Route path="panel/newPost" element={<NewPost />} />
          <Route path="panel/notice" element={<Notice />} />
          <Route path="panel/option" element={<Option />} />
          <Route path="panel/statistic" element={<Statistic />} />
          <Route path="panel/login" element={<Login />} exact />
          <Route path="panel/contact" element={<Contacts />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
