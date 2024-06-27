import React from 'react'
import '../Profile/Profile.css'
import Header from '../../Components/Header/Header'
import image from '../../Components/Assets/Images/card2.png'
import Footer from '../../Components/Footer/Footer'
const Profile = () => {
  return (
    <div className='profile'>
        <Header title={"Profile"}/>
       <div className="body-profile">
       <div className="profile-card">
            <div className="detail">
            <p>Name = Adilabad</p>
            <p>Phone = 12234124</p>
            <p>Address = Hyderabad</p>
            </div>
            <div className="profile-pic">
            <img src={image} alt="" />
            </div>

        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Profile