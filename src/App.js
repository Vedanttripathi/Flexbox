import './App.css';
import Appbar from './Appbar/Appbar';
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <Appbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/work" exact element={<Work />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
