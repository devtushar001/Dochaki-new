import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './App.css';
import Footer from './Component/Footer/Footer';
import NavbarOption from './Component/NavOption/NavbarOption';
import { useContext } from 'react';
import { DochakiContext } from './Context/DochakiContext';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import Shop from './Pages/Shop/Shop';
import Services from './Pages/Services/Services';
import SingleBlog from './Component/SingleBlog/SingleBlog';
import SingleProject from './Component/SingleProject/SingleProject';
import ProjectView from './Component/ProjectView/ProjectView';

function App() {
  const { navbar } = useContext(DochakiContext);
  return (
    <>
      <Navbar />
      {navbar ? <NavbarOption /> : ""}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects-view/:viewId' element={<ProjectView/>} />
        <Route path='/projects/:projectId' element={<SingleProject/>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogId' element={<SingleBlog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
