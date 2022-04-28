import React from "react";
import AboutUs from "./components/Pages/user/aboutUs";
import Blog from "./components/Pages/user/blog";
import Contact from "./components/Pages/user/contact";
import Home from "./components/Pages/user/home";
import Recipes from "./components/Pages/user/recipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Pages/user/notFound";
// import Singleblog from "./components/Pages/user/singleBlog";
import Panel from "./components/Pages/panel";
import Post from "./components/Pages/user/post";

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
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;