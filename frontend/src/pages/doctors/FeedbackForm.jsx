import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

function FeedbackForm() {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const [reviewText,setReviewText] = useState("");

    const handleSubmitReviews = async(e)=>{
        e.preventDefault();

        // later will our API

        console.log("pressed");

    };

  return (
      <form action=''>
          <div>
              <div>
                  <h3 className='b text-headingColor text-[16px leading-6 font-semibold mb-4 mt-0'>
                      How would you rate the overall experience?*
                  </h3>
                  <div>
                      {[...Array(5).keys()].map((item, index) => {
                          index += 1;
                          return (
                              <button
                                  onClick={() => {
                                      setRating(index)
                                      console.log(index);
                                  }}
                                  onMouseEnter={() => setHover(index)}
                                  onMouseLeave={() => setHover(rating)}
                                  onDoubleClick={() => {
                                      setHover(0);
                                      setRating(0);
                                  }}
                                  className={`${index <= ((rating && hover) || hover)
                                          ? 'text-yellowColor'
                                          : 'text-gray-400'
                                      } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                  key={index}
                                  type='button'>
                                  <span><AiFillStar /></span>
                              </button>
                          )
                      })}
                  </div>
              </div>
              <div className='mt-[30px]'>
                  <h3 className='b text-headingColor text-[16px leading-6 font-semibold mb-4 mt-0'>
                      Share your feedback or suggestions?*
                  </h3>
                  <textarea
                    className='border border-solid border-[#0066ff43] focus:outline outline-primaryColor w-full
                    px-4 py-5 rounded-md'
                    rows={5}
                    placeholder='Write your message'
                    onChange={e=>setReviewText(e.target.value)}
                  >
                  </textarea>
              </div>
          </div>
        <button 
            className='btn'
            type='submit'
            onClick={handleSubmitReviews}
        >
            Submit feedback
        </button>
      </form>
  )
}

export default FeedbackForm;