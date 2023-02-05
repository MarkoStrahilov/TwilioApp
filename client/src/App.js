import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'
import Home from './pages/Home';
import SendMessages from './components/SendMessages';
import PricingPlans from './components/PricingPlans';
import Contact from './pages/Contact'
import ErrorPage from './components/ErrorPage';

import { useContext } from 'react';
import { AuthContext } from './hooks/AuthContext';

import { Outlet,useNavigate } from 'react-router-dom';

function App() {

  // const authContext = useContext(AuthContext);
  // const navigate = useNavigate()

  // if (authContext.isAuthenticated === null) {
  //  return navigate("/sign-in")
  // }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/pricing-plans' element={<PricingPlans />}/> 
        <Route path='/dashboard' element={<SendMessages />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
  
}

export default App;
