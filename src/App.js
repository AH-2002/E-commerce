import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import AddtoCart from './AddtoCart';
import ProdContextProvider from './Store';


function App() {


  const goToProductsPage = (navigate) => {
    navigate('/products');
  };


  return (
    <div className="App w-100">
      <ProdContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home goToProductsPage={goToProductsPage} />} />
          <Route path='/home' element={<Home goToProductsPage={goToProductsPage} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetails' element={<ProductDetails />} >
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<AddtoCart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ProdContextProvider>
    </div>
  );
}

export default App;
