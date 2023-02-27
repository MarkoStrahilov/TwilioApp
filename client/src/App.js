import { Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ApiDocumentation from "./pages/ApiDocumentation";
import SendMessages from "./components/Dashboard";
import PricingPlans from "./components/PricingPlans";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings"
import VerifyAccount from "./components/VerifyAccount";
import ErrorPage from "./components/ErrorPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<ApiDocumentation />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/dashboard" element={<SendMessages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/verify/account" element={<VerifyAccount />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
