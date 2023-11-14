import React from 'react';
import { services } from '../../assets/data/services';
import ServicesCard from '../services/ServicesCard';

function ServicesList() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] gap-5 mt-[30px] lg:mt-[55px]'>
          {services.map((item,index)=><ServicesCard item={item} index={index} key={index}/>)
          }
      </div>
  )
}

export default ServicesList;