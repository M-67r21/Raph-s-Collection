import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../public/Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../public/Components/Homepage';
import Man from '../public/Components/Man';
import Women from '../public/Components/Women';
import Kids from '../public/Components/Kids';
import New from '../public/Components/New';
import Cart from '../public/Components/Cart';
import Login from '../public/Components/Login';
import Footer from '../public/Components/Footer';
import Pants from '../public/Components/Men/Pants';
import Shirts from '../public/Components/Men/Shirts';
import Tees from '../public/Components/Men/Tees';
import Jackets from '../public/Components/Men/Jackets';
import Hoodies from '../public/Components/Men/Hoodies';
import WomenTops from '../public/Components/Women/WomenTops';
import WomenPants from '../public/Components/Women/WomenPants';
import WomenJackets from '../public/Components/Women/WomenJackets';
import WomenShirts from '../public/Components/Women/WomenShirts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/men" element={<Man />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/new" element={<New />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menpants" element={<Pants />} />
          <Route path="/menshirts" element={<Shirts />} />
          <Route path="/mentshirts" element={<Tees />} />
          <Route path="/menjackets" element={<Jackets />} />
          <Route path="/menhoodies" element={<Hoodies />} />
          <Route path="/womenjackets" element={<WomenJackets />} />
          <Route path="/womenshirts" element={<WomenShirts />} />
          <Route path="/womentops" element={<WomenTops />} />
          <Route path="/womenpants" element={<WomenPants />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
