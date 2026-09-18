// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Projects";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Tools from "./pages/Tools";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div> {/* Add top padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
