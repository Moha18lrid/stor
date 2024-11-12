import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Shop from './pages/shop';
import Category from './pages/category';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import men_banner from './components/asset/banner_mens.png'
import women_banner from './components/asset/banner_women.png'
import kids_banner from './components/asset/banner_kids.png'
import Footer from './components/footer/footer';
import Loginsingup from './pages/Loginsingup';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Category banner={men_banner} category="men" />} />
          <Route path='/Women' element={<Category banner={women_banner} category="women" />} />
          <Route path='/Kids' element={<Category banner={kids_banner} category="kid" />} />
          <Route path='/LoginSingup' element={<Loginsingup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
