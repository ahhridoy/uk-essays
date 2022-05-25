import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TopBar from "./components/Header/TopBar";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import LandingPage from "./pages/LandingPage/LandingPage";
import Offers from "./pages/Offers/Offers";
import Services from "./pages/ServicesPage/ServicesPage";
import AssignmentService from "./services/AssignmentService/AssignmentService";
import CourseworkService from "./services/CourseworkService/CourseworkService";
import EssayplanService from "./services/EssayplanService/EssayplanService";
import EssayService from "./services/EssayService/EssayService";
import ReflectiveService from "./services/ReflectiveService/ReflectiveService";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />

          <Route path="/essay-service" element={<EssayService />} />
          
          <Route path="/assignment-service" element={<AssignmentService />} />

          <Route path="/coursework-service" element={<CourseworkService />} />

          <Route path="/essayplan-service" element={<EssayplanService />} />

          <Route path="/reflective-service" element={<ReflectiveService />} />

          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
