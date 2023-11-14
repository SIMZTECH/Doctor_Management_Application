import DoctorCard from '../../components/doctors/DoctorCard';
import {doctors} from '../../assets/data/doctors';
import Testmonies from '../../components/testmonies/Testmonies';

function Doctors() {
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center'>
            <input
              type='search'
              className='w-full py-4 pl-4 pr-2 bg-transparent focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search Doctor'
            />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-[10px]'>
            {doctors.map((doctor, index) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading'>What our patients say</h2>
            <p className='text_para text-center'>
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testmonies />
        </div>
      </section>
    </>
    
  )
}

export default Doctors;