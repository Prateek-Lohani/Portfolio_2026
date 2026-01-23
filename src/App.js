import React, { Suspense } from "react";
import Loader from "./components/Loader";

const Experience = React.lazy(() => import('./components/Experience'));
const BackgroundGrid= React.lazy(() => import('./components/BackgroundGrid'));
const Nav= React.lazy(() => import('./components/Nav'));
const Hero= React.lazy(() => import('./components/Hero'));
const Projects= React.lazy(() => import('./components/Projects'));
const Contact= React.lazy(() => import('./components/Contact'));
const Footer= React.lazy(() => import('./components/Footer'));

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