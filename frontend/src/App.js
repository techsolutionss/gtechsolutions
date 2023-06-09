import Home from "./pages/home"
import Contact from "./pages/contact"
import About from "./pages/about"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Order from "./pages/order";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import { useSelector,useDispatch} from "react-redux";
import { logOut } from "./store/userslice/userslice";
import Blog from "./pages/blog";
import BlogSinglePage from "./pages/blogsinglepage";

function App() {
  var dispatch = useDispatch()
  window.onunload = function(){
    dispatch(logOut())
  }
  const user = useSelector((state)=>state.user)
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/order" element={user.currentUser ?<Order/>:<SignIn/>}/>
            <Route  path="/signup" element={<SignUp/>}/>
            <Route  path="/signin" element={<SignIn/>}/>
            <Route  path="/blogs" element={<Blog/>}/>
            <Route  path="/blog/:category/:id" element={<BlogSinglePage/>}/>
          </Routes>        
      </Router>
  );
}

export default App;
