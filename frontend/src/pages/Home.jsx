import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png';
import faqImg from '../assets/images/faq-img.png';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/about/About';
import ServicesList from '../components/services/ServicesList';
import DoctorsList from '../components/doctors/DoctorsList';
import FaqList from '../components/faq/FaqList';
import Testmonies from '../components/testmonies/Testmonies';


function Home() {
  return (
    <>
      {/* hero section start here*/}
      <section className='hero_section 2xl:h-[800px] pt-[60px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* hero content */}
            <div>
              <div className='b lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]'>
                  We help Patients live a healthy, longer life.
                </h1>
                <p className='text_para'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>
              {/* hero counter */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='b w-[100px] h-2 bg-yellowColor rounded-full mt-[-14px] block'></span>
                  <p className='text_para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='b w-[100px] h-2 bg-purpleColor rounded-full mt-[-14px] block'></span>
                  <p className='text_para'>Clinic Location</p>
                </div>

                <div>
                  <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='b w-[100px] h-2 bg-primaryColor rounded-full mt-[-14px] block'></span>
                  <p className='text_para'>Patient Satisfactory</p>
                </div>

              </div>
            </div>
            {/* hero content */}
            <div className='b flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt='' className='b w-full' />
              </div>
              <div className='b mt-[30px]'>
                <img src={heroImg02} alt='' className='w-full mb-[30px]' />
                <img src={heroImg03} alt='' className='w-full' />
              </div>

            </div>
          </div>
        </div>
      </section>
       {/* hero section end here*/}
      <section>
        <div className='container'>
          <div className='lg:w-[460px] mx-auto'>
            <h1 className='heading text-center'>Providing the best medical services</h1>
            <p className='text_para text-center'>
              World-class care for everyone. Our healthy system offers unmatched, expert health care. 
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon1} alt='' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center' >Find a Doctor</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health System offers unmatched,
                  expert health care. From the lab to the clinic
                </p>
                <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border-[#181A1E] border 
                border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='b group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon2} alt='' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center' >Find a Location</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health System offers unmatched,
                  expert health care. From the lab to the clinic
                </p>
                <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border-[#181A1E] border 
                border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='b group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon3} alt='' />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center' >Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class care for everyone. Our health System offers unmatched,
                  expert health care. From the lab to the clinic
                </p>
                <Link to={'/doctors'} className='w-[44px] h-[44px] rounded-full border-[#181A1E] border 
                border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='b group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* About section starts here */}
      <About />
      {/* About section ends here */}
      {/* services section starts here*/}
      <section>
        <div className='b container'>
          <div className='b xl:w-[470px] mx-auto'>
            <h2 className='b heading text-center'>Our medical services</h2>
            <p className='text_para text-center'>
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <ServicesList />
        </div>

      </section>
      {/* services section ends here*/}
      {/* features starts here */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='heading'>Get virtual treatment <br />anytime</h2>
              <ul className='pl-4'>
                <li className='text_para'>
                  1. Schedule the appointment directly
                </li>
                <li className='text_para'>
                  2. Search for your physician here, and contact their office.
                </li>
                <li className='text_para'>
                  3. View our physicians who are accepting new patients, use the online scheduling too to select an appointment time.
                </li>
              </ul>
              <Link to={'/'}><button className='btn'>Learn More</button></Link>
            </div>
            {/* feature image */}
            <div className='b z-10 relative xl:w-[770px] mt-[50px] lg:mt-0 flex justify-end'>
              <img src={featureImg} className='b w-3/4'/>
              <div className='b w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:[x-4 lg:pb-[26px] rounded-[10px]'>
                <div className='b flex items-center justify-between'>
                  <div className='b flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue, 24</p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>10:00AM</p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center 
                  justify-center bg-yellowColor rounded py-1 px=[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt=''/>
                  </span>

                </div>
                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[10px] text-[8px] leading-[8px] lg:text-[12px]
                lg:leading-4 text-primaryColor font-[500 mt-2] lg:mt-4 rounded-full'>
                  Consultation
                </div> 
                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Wayne Collins</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* features ends here */}

       {/* our great doctors starts here */}
      <section>
        <div className='container'>
          <div className='b xl:w-[470px] mx-auto'>
            <h2 className='b heading text-center'>Our great doctors</h2>
            <p className='text_para text-center'>
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>
       {/* our great doctors ends here */}
       {/* faq starts here */}
       <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt='' />
            </div>
            <div className='md:w-1/2 w-full'>
              <h2 className='heading'>Most questions by our beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
       </section>
       {/* faq ends here */}

       {/* testimonials starts here*/}
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
       {/* testmonials ends here */}
    </>
  )
}

export default Home;