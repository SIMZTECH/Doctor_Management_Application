/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import starIcon from '../../assets/images/Star.png';
import { BsArrowRight } from 'react-icons/bs';
export default function DoctorCard({doctor}) {
    const {id,name,specialization,avgRating,totalRating,photo,totalPatients,hospital}= doctor;
  return (
      <div className="b p-3 lg:p-2">
          <div>
              <img src={photo} alt="" className="b w-full" />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">{name}</h2>
          <div className="mt-2 lg:mt-4 flex items-center justify-between">
              <span className="bg-[#CCF0F3] text-primaryColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] 
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {specialization}
              </span>
              <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] 
                  leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                      <img src={starIcon} alt='' />
                      {avgRating}
                  </span>
                  <span className='flex items-center gap-[6px] text-[14px] 
                  leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>({totalRating})</span>
              </div>
          </div>
          <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
              <div>
                  <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>+{totalPatients} patients</h3>
                  <p className='text-[14px] leading-6 font-[400] text-textColor'>At {hospital}</p>
              </div>
              <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border-[#181A1E] border 
                border-solid flex items-center justify-center group hover:bg-primaryColor hover:border-none'
              >
                  <BsArrowRight className='b group-hover:text-white w-6 h-5' />
              </Link>


          </div>

      </div>
  )
}
