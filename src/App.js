import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsofService from "./components/TermsofService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'
            element={
              <>
                <Header backgroundColor='#ffc700' />
                <Shop />
                <Footer />
              </>
            } />
          <Route exact path='/about'
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            } />
          <Route exact path='/login'
            element={
              <>
                <Header />
                <LoginPage />
                <Footer />
              </>
            } />
          <Route exact path='/cart'
            element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            } />
          <Route exact path='/faqs'
            element={
              <>
                <Header />
                <FAQs />
                <Footer />
              </>
            } />
          <Route exact path='/contact-us'
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            } />
          <Route exact path='/privacy-policy'
            element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            } />
          <Route exact path='/terms-of-service'
            element={
              <>
                <Header />
                <TermsofService />
                <Footer />
              </>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
