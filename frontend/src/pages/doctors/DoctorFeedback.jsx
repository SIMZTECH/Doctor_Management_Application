import React, { useState } from 'react';
import avator from '../../assets/images/avatar-icon.png';
import {formateDate} from '../../util/formatDate';
import {AiFillStar} from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

function DoctorFeedback() {
  const [showFeedbackForm,setShowFeebackForm] = useState(false);
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews (272)</h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <fgure className='w-10 h-10 rounded-full'>
              <img className='w-full' src={avator} alt='' />
            </fgure>
            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Mwansa Mukonka
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formateDate('02-12-2023')}
              </p>
              <p className='text_para mt-3 font-medium text-[15px]'>
                Good Services, highly recommend 👍
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(5).keys()].map((item,index) => (
              <AiFillStar key={index} color='#0067ff' /> 
          ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm &&
        <div className='text-center'>
          <button
            onClick={() => setShowFeebackForm(true)}
            className='btn'>
            Give Feedback
          </button>
        </div>
      }

      {
        showFeedbackForm && <FeedbackForm />
      }
      
    </div>
  )
}

export default DoctorFeedback