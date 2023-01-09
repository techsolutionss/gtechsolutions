import Home from "./pages/home"
import Contact from "./pages/contact"
import About from "./pages/about"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Services from "./pages/services";
import Order from "./pages/order";

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/services" element={<Services/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/order" element={<Order/>}/>
          </Routes>        
      </Router>
  );
}

export default App;
