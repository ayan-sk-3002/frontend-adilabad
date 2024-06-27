import React from 'react'
import '../StoreDetail/StoreDetail.css'
import Slider from 'react-slick'
import { IoMdArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../Components/Assets/Images/card1.png'
import image2 from '../../Components/Assets/Images/card2.png'
import Footer from '../../Components/Footer/Footer';

const StoreDetail = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='store-detail'>
        <div className="slider">
            <Slider {...settings}>
                <div className="image">
                <img src={image1} alt="" />
                </div>
                <div className="image">
                <img src={image2} alt="" />
                </div>
                <div className="image">
                <img src={image1} alt="" />
                </div>
            </Slider>
            <IoMdArrowBack className='arrow'/>
        </div>
        <div className="store-info">
            <div className="head">
                <div className="head-detail">
                <img src={image2} className='profile-pic' />
                <div className="name-detail">
                    <h4>Quantum Brize</h4>
                    <p>3000 Followers</p>
                </div>
                </div>
                <button className='follow-btn'>Follow</button>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default StoreDetail