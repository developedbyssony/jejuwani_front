import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Activity, Navigation, Restaurant, Law } from "./components/pages";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Write from './components/pages/write';
import Main from './components/pages/mainPage';
import Detail from './components/pages/productDetailPage';
import Detail2 from './components/pages/productDetailPage_Restaurant';
import Blog from './components/pages/blog';
import Order from './components/pages/orderSheet';
import Pay from './components/pages/payment';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="blog" element={<Blog />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="activity" element={<Activity />} />
      <Route path="restaurant" element={<Restaurant />} />
      <Route path="detail" element={<Detail />} />
      <Route path="detail2" element={<Detail2 />} />
      <Route path="navigation" element={<Navigation />} />
      <Route path="write" element={<Write />} />
      <Route path="payment" element={<Pay />} />
      <Route path="order" element={<Order />} />
    </Routes>
  </Router>
);