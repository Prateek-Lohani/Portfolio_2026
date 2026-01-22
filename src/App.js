import { Suspense } from "react";
import BackgroundGrid from "./components/BackgroundGrid";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


const App=()=>{
    return (
        <>
        <BackgroundGrid/>
        <Nav/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Contact/>
        </>
    )
}

export default App;