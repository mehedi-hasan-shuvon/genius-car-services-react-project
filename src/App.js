
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Chekout from './Pages/Chekout/Chekout/Chekout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Chekout></Chekout>
          </RequireAuth>
        }></Route>

        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>


        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>

        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
