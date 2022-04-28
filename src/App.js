import React from "react";import AboutUs from "./components/Pages/aboutUs";
import Blog from "./components/Pages/blog";
import Contact from "./components/Pages/contact";
import Home from "./components/Pages/home"
import Recipes from "./components/Pages/Recipes"
import Post from "./components/Pages/user/post";
import NotFound from "./components/Pages/user/notFound";
import Panel from "./components/Pages/panel";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout";
import Singleblog from "./components/Pages/blog/Singleblog";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <div className="max-w-[1280px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/aboutUs" element={<AboutUs />} exact />
              <Route path="/blog" element={<Blog />} exact />
              <Route path="/blog/:id" element={<Singleblog/>}  />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/contact" element={<Contact />} exact />
              <Route path="/recipes" element={<Recipes />} exact />
              <Route path="/panel" element={<Panel />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </>
  );
}

export default App;
