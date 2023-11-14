/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ServicesCard({item, index}) {
    const {name,desc,bgColor,textColor} = item;
  return (
      <div className='b py-[30px] px-3 lg:px-5'>
          <h2 className='b text-[26px] leading-9 text-headingColor font-[700]'>{name}</h2>
          <p className='b text-[16px] leading-7 font-[400] text-textColor mt-4'>{desc}</p>
          <div className='b flex items-center justify-between mt-[30px]'>
              <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border-[#181A1E] border 
                border-solid flex items-center justify-center group hover:bg-primaryColor hover:border-none'
              >
                  <BsArrowRight className='b group-hover:text-white w-6 h-5' />
              </Link>
              <span className='b w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
              style={{background:`${bgColor}`,borderRadius:'6px 0 0 6px', textColor:`${textColor}`}}
              >
                {index+1}
              </span>

          </div>
      </div>
  );
}

export default ServicesCard;