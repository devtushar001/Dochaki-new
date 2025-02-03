import React from "react";
import ImageSlider from "../../Component/ImageSlider/ImageSlider";
import CategoryBox from "../../Component/CategoryBox/CategoryBox";
import './Home.css';

const Home = () => {
     return (
        <div className="home">
        <ImageSlider/>
        <CategoryBox/>
        </div>
     )
}
export default Home;