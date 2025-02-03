import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="/upload-image" element={<ImageUploader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
