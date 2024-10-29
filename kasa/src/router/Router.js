import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import Home from '../pages/home/Home';
import Rental from '../pages/rental/Rental';
import Error from '../pages/error/Error';
import Footer from '../components/footer/Footer';
import About from '../pages/about/About';

/**
 * Composant Router
 * 
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/accommodations/:id' element={<Rental />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};



// * Le composant Router est exporté par défaut pour pouvoir être importé et utilisé dans d'autres parties de l'application.

export default Router;
