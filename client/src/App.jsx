import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './App.css';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
