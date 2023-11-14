import { services } from '../assets/data/services';
import ServicesCard from '../components/services/ServicesCard';

function Services() {
  return (
    <section>
    <div className='container'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] gap-5'>
          {services.map((item,index)=><ServicesCard item={item} index={index} key={index}/>)
          }
      </div>
    </div>
    </section>
  )
}

export default Services;