import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageUploader from './Components/ImageUploader/ImageUploader';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import TextEditor from './Components/TextEditor/TextEditor';
import AddItem from './Pages/AddItem/AddItem';
import AddBlogs from './Pages/AddBlogs/AddBlogs';
import AddSlider from './Pages/AddSlider/AddSlider';
import AddServices from './Pages/AddServices/AddServices';
import AddCategory from './Pages/AddCategory/AddCategory';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/add-product' element={<AddItem />} />
        <Route path='/add-blog' element={<AddBlogs />} />
        <Route path='/edit-slider' element={<AddSlider />} />
        <Route path='/edit-services' element={<AddServices />} />
        <Route path='/add-category' element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
