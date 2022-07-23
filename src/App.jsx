import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Modal from "./components/Modal/Modal";
import Projects from "./components/Projects/Projects";
import Toolkit from "./components/Toolkit/Toolkit";
import Me from "./components/Me/Me";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SidebarHeader from "./components/SidebarHeader/SidebarHeader";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Intro />
      <Sidebar />
      <SidebarHeader />
      <Navbar />
      <Me />
      <Projects />
      <Modal />
      <Toolkit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
