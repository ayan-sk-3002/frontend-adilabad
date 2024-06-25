import React from 'react'
import '../Card3/Card3.css'
const Card3 = ({image}) => {
    return (
      <div className="card-3">
   <div className="store-card">
          <div className="store-image">
            <img src={image} alt="Store" />
            <div className="store-verified">
              <span>✅ Verified 3-jan-2024</span>
            </div>
          </div>
          <div className="store-info">
            <h2 className="store-name">Quantum Brize Store</h2>
            <p className="store-location">📍 Ula, Howrah, Kolkata</p>
            <div className="store-rating">
              <span className="rating-score">4.9</span>
              <span className="rating-comments">6 Comments</span>
            </div>
            <div className="store-offers">
              <span className="offer-discount">✅ Discount offer up to 20%</span>
              <span className="offer-products">🛒 12 Products Available</span>
            </div>
           
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
        <div className="card-details">
          <p>624323 views</p>
          <p>20 calls</p>
          <p>18 chats</p>
          <p>12 orders</p>
          <p>12 enquiry</p>
        </div>
      </div>
     
      );
}

export default Card3