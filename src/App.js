
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import FAQs from "./pages/FAQs";
import Features from "./pages/Features";
import Working from "./pages/Working";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
 
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/benefits' element={<Benefits/>} />
    <Route path='/faqs' element={<FAQs/>} />
    <Route path='/features' element={<Features/>} />
    <Route path='/working' element={<Working/>} />
    <Route path='*' element={<Pagenotfound/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
