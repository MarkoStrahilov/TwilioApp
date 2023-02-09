import { Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SendMessages from "./components/SendMessages";
import PricingPlans from "./components/PricingPlans";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings"
import ErrorPage from "./components/ErrorPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/dashboard" element={<SendMessages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
