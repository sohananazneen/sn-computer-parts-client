import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import Register from "./Pages/Login/Register";
import Purchase from "./Pages/Tools/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import BusinessSummary from "./Pages/Home/BusinessSummary";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/Shared/NotFound";
import Tools from "./Pages/Tools/Tools";
import Reviews from "./Pages/Reviews/Reviews";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="summary" element={<BusinessSummary />} />
        <Route path="review" element={<Reviews />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="tool/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
