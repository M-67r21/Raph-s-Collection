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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
