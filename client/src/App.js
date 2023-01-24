import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SendMessages from './components/SendMessages';
import PricingPlans from './components/PricingPlans';
import Contact from './pages/Contact'
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<SendMessages />}/>
        <Route path='/pricing-plans' element={<PricingPlans />}/> 
        <Route path='/contact' element={<Contact />}/>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
  
}

export default App;
