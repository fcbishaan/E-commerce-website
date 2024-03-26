
import './App.css';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './styles.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
import Cart from './Pages/Cart';
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
<Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
     <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
     <Route path='/kids' element={<ShopCategory banner={kid_banner}category="kid"/>}/>
     <Route path="product" element={<Product/>}>
     <Route path=':productId' element={<Product/>}/>
     </Route>      
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/login" element={<LoginSignup/>}/>     
</Routes>
<Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;