import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
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
import Portfolio from "./Pages/Portfolio/Portfolio";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import AddProduct from "./Pages/Dashboard/AddProduct";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Payment from "./Pages/Dashboard/Payment";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageOrders from "./Pages/Dashboard/ManageOrders";

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
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="tool/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="allUsers" element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin>
            <ManageOrders></ManageOrders>
          </RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
