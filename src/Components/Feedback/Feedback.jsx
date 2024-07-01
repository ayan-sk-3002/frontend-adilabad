import React from 'react'
import './Feedback.css'
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'
const Feedback = ({feedbackOn,setFeedbackOn}) => {

  const toogleFeedback = ()=>{
    setFeedbackOn(prevfeedbackOn => !prevfeedbackOn);
        }

  return (
    <div className={`feedback ${feedbackOn?"active":""} `}>
      <div onClick={()=>toogleFeedback()} className="close-btn">
      <RxCross1 className='cross-icosn' /></div>
            <div  className="feedback-text shadow">
                        Your Feedback Matters
                    </div>
                    <div className="feedback-stars">
                    <FaStar className='feedbackstar-icon shadow'/>
                    <FaStar className='feedbackstar-icon shadow'/>
                    <FaStar className='feedbackstar-icon shadow'/>
                    <FaStar className='feedbackstar-icon shadow'/>
                    <FaStar className='feedbackstar-icon shadow'/>
                    </div>
                    <form >
                        <input type="text"  placeholder='Comment...'/>
                        <button>Submit</button>
                    </form>
                    <div className="feedback-store-rating">
              <span className="feedback-rating-score">4.9 <FaStar/> </span>
              <span className="feedback-rating-comments">6 Comments</span>
            </div>
    </div>
  )
}

export default Feedback