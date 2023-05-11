import './App.css';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Videos from './Components/Pages/Videos/Videos';
import VideoSlider from './Components/Pages/VideosSlider/VideoSlider';
import FeedBack from './Components/Pages/FeedBack/FeedBack';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Pages/Contact/Contact';
import SingleVideo from './Components/Pages/Singlevideo/SingleVideo';
import Detailspage from './Components/Pages/Detailspage/Detailspage';
import Home from './Components/Pages/Home/Home';
import Admin from './Components/Pages/Admin/Admin';
import AdminVideo from './Components/Pages/Admin/Video/AdminVideo';
import Categories from './Components/Pages/Admin/Category/Categories';
import SubCategories from './Components/Pages/Admin/SubCatory/SubCategories';
import User from './Components/Pages/Admin/User/User'
import Registration from './Components/Pages/Admin/Registration';
import Login from './Components/Pages/Admin/Login';
import PrivateRoute from './Components/Pages/Admin/PrivateRoute ';
import MainRoute from './Components/Header/MainRoute';
import Notfound from './Components/Pages/NotFound/Notfound';
import ToggleButton from './Components/Pages/Admin/Pannel';

function App() {
  return (
    <div>
      <MainRoute>
        <Header />
      </MainRoute>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/video' element={<Videos />} />
        <Route path="/singlecategory/:id" element={<SingleVideo />} />
        <Route path="/videodetail/:id" element={<Detailspage />} />
        <Route path='/categories' element={<VideoSlider />} />
        <Route path='/feedBack' element={<FeedBack />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<PrivateRoute>
          <Admin />
        </PrivateRoute>} />
        <Route path='/adminvideo' element={<AdminVideo />} />
        <Route path='/Admincategories' element={<Categories />} />
        <Route path='/subCategories' element={<SubCategories />} />
        <Route path='/user' element={<User />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/panel' element={<ToggleButton />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
