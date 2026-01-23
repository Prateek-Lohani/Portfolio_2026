import React, { Suspense } from "react";
import BackgroundGrid from "./components/BackgroundGrid";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Experience = React.lazy(() => import('./components/Experience'));

const App=()=>{

    return (
        <>
        <Suspense fallback={<Loader/>}>
        <BackgroundGrid/>
        <Nav/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
        </Suspense>
        </>
    )
}

export default App;