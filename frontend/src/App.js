import Home from "./pages/home"
import Contact from "./pages/contact"
import About from "./pages/about"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Order from "./pages/order";
import SignUp from "./pages/signup";


function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/order" element={<Order/>}/>
            <Route  path="/signup" element={<SignUp/>}/>
          </Routes>        
      </Router>
  );
}

export default App;
