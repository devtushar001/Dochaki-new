import React from "react";
import './MainPage.css'
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <Link to='/add-product' className="no-style"><button>Add Product</button></Link>
        <Link to='/add-blog' className="no-style"><button>Add Blog</button></Link>
        <Link to='/edit-slider' className="no-style"><button>Edit Slider</button></Link>
        <Link to='/edit-services' className="no-style"><button>Edit Services</button></Link>
        <Link to='/add-category' className="no-style"><button>Add category</button></Link>
      </div>
    </>
  )
}

export default MainPage;