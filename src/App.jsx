import Sidebar from "./components/sidebar";
import Header from "./components/portfolioHeader";
import PhotoGrid from "./components/PhotoGrid";

import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Header />
        <PhotoGrid />
        <AboutMe />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
