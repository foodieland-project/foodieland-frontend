import React from "react";
import AboutUs from "./components/Pages/front/aboutUs";
import Blog from "./components/Pages/front/blog";
import Contact from "./components/Pages/front/contact";
import Home from "./components/Pages/front/home";
import Recipes from "./components/Pages/front/Recipes";
import Post from "./components/Pages/front/post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/Pages/front/notFound";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <div className="w-11/12 sm:container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </>
  );
}

export default App;
