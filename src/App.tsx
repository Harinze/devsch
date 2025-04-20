import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Footer from './components/Footer';


const toastStyle = {
  success: {
    background: 'rgb(255, 223, 0)', 
    color: 'black',
  },
  error: {
    background: 'rgb(156, 163, 175)', 
    color: 'red',
  },
};

const App = () => (
  <Router>
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        success: {
          style: toastStyle.success,
        },
        error: {
          style: toastStyle.error,
        },
      }}
    />
  </Router>
);

export default App;
