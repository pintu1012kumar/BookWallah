
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";

import CourseSectionArea from "./components/Courses/CourseSectionArea";
import Signup from "./components/Signup";
import Home from "./Home/Home";
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    
     <>
    {/* <Home/>
    <Course/> */}
    <Routes>

     <Route path="/" element={<Home/>}/>
     <Route path="/course" element={<CourseSectionArea/>}/>
     <Route path="/About" element={<AboutSection/>}/>
     <Route path="/Contact" element={<ContactSection/>}/>
     <Route path="/Signup" element={<Signup/>}/>

    </Routes>

     </>
  
  )
}

export default App;
