import React from 'react'
import '../StoreDetail/StoreDetail.css'
import Slider from 'react-slick'
import { IoMdArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../Components/Assets/Images/card1.png'
import image2 from '../../Components/Assets/Images/card2.png'
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaLocationPin } from 'react-icons/fa6';
import { CiShare2 } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

const StoreDetail = () => {
    const navigate = useNavigate();
  const goBack = ()=>{
    navigate(-1);
  }
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
            <IoMdArrowBack onClick={()=>goBack()} className='arrow'/>
        </div>
        {/* head */}
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
{/* actions */}
            <div className="store-actions">
              <div className="details">
              <p> <FaEye/> 40,000 views &#8226; 2000Days▼ </p>
              </div>
              <div className="actions">
                <CiShare2/>
                <FaHeart className='heart'/>
              </div>
            </div>
            {/* detail */}
            <div className="store-detail-des">
              <h2>Quantum Brize Store<MdVerifiedUser className='verified-icon'/> </h2>
              <div className="description">
                <p>Short Description of the store Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text View More ▼</p>
               <p className='location'><FaLocationPin className='location-icon'/> Hyderabad, India</p>
              </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default StoreDetail