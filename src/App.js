import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Shop from './pages/shop';
import Category from './pages/category';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Category category="mans" />} />
          <Route path='/Women' element={<Category category="Women" />} />
          <Route path='/Kids' element={<Category category="Kids" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
