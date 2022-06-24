import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUK from "./about/AboutUK/AboutUK";
import BuyingGuide from "./about/BuyingGuide/BuyingGuide";
import Contact from "./about/Contact/Contact";
import FairUse from "./about/FairUse/FairUse";
import Guarantees from "./about/Guarantees/Guarantees";
import OurExpert from "./about/OurExpert/OurExpert";
import Quality from "./about/Quality/Quality";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TopBar from "./components/Header/TopBar";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Offers from "./pages/Offers/Offers";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import PlaceOrder2 from "./pages/PlaceOrder/PlaceOrder2";
import PlaceOrder3 from "./pages/PlaceOrder/PlaceOrder3";
import Register from "./pages/Register/Register";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import Samples from "./pages/Samples/Samples";
import Services from "./pages/ServicesPage/ServicesPage";
import AcademicService from "./services/AcademicService/AcademicService";
import AssignmentService from "./services/AssignmentService/AssignmentService";
import CasestudyService from "./services/CasestudyService/CasestudyService";
import CourseworkService from "./services/CourseworkService/CourseworkService";
import CVWritingService from "./services/CVWritingService/CVWritingService";
import DissertationServices from "./services/DissertationService/DissertationServices";
import EditingService from "./services/EditingService/EditingService";
import EssayplanService from "./services/EssayplanService/EssayplanService";
import EssayService from "./services/EssayService/EssayService";
import ExamService from "./services/ExamService/ExamService";
import MarkingService from "./services/MarkingService/MarkingService";
import PowerpointService from "./services/PowerpointService/PowerpointService";
import ReflectiveService from "./services/ReflectiveService/ReflectiveService";
import ReportService from "./services/ReportService/ReportService";
import ResearchService from "./services/ResearchService/ResearchService";
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
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* --------------------- */}

          <Route path="/essay-service" element={<EssayService />} />
          <Route path="/assignment-service" element={<AssignmentService />} />
          <Route path="/coursework-service" element={<CourseworkService />} />
          <Route path="/essayplan-service" element={<EssayplanService />} />
          <Route path="/reflective-service" element={<ReflectiveService />} />
          <Route path="/research-service" element={<ResearchService />} />
          <Route
            path="/dissertation-service"
            element={<DissertationServices />}
          />
          <Route path="/report-service" element={<ReportService />} />
          <Route path="/case-study-service" element={<CasestudyService />} />
          <Route path="/powerpoint-service" element={<PowerpointService />} />
          <Route path="/marking-service" element={<MarkingService />} />
          <Route path="/editing-service" element={<EditingService />} />
          <Route path="/exam-service" element={<ExamService />} />
          <Route path="/academic-service" element={<AcademicService />} />
          <Route path="/cv-service" element={<CVWritingService />} />

          {/* ------------------------ */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUK />} />
          <Route path="/expert-writers" element={<OurExpert />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/buying-guide" element={<BuyingGuide />} />
          <Route path="/fair-use" element={<FairUse />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/upgrades" element={<PlaceOrder2 />} />
          <Route path="/questions" element={<PlaceOrder3 />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          {/* ------------------------- */}

          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
