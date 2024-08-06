import About from "./components/About";
import Contact from "./components/Contact";
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
     <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Signup" element={<Signup/>}/>

    </Routes>

     </>
  
  )
}

export default App;
