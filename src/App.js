import React, { Suspense } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import Skills from "./components/Skills";
import BackToTop from "./components/BackToTop";

const Experience = React.lazy(() => import("./components/Experience"));
const BackgroundGrid = React.lazy(() => import("./components/BackgroundGrid"));
const Nav = React.lazy(() => import("./components/Nav"));
const Hero = React.lazy(() => import("./components/Hero"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
      <Suspense fallback={<Loader />}>
        <BackgroundGrid />
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
      <BackToTop />
    </>
  );
};

export default App;
