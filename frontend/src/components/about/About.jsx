import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutImgCard from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <div className='container'>
                <div className='b flex justify-between flex-col gap-[50px] xl:gap-0 lg:flex-row lg:gap-[130px]'>
                    {/* image picture */}
                    <div className='b relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                        <img src={aboutImg} alt='' />
                        <div className='b absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                            <img src={aboutImgCard} alt=' ' />
                        </div>
                    </div>
                    {/* about content */}
                    <div className='b w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                        <h2 className='b heading'>Proud to be one of the nations best</h2>
                        <p className='text_para'>
                            For 30 years in a row, U.S. news & World Report has recognized us as one of the best
                            publics hospitals in the Nation and #1 in Texas, Lorem Ipsum dolor sit amet concetetur, 
                            adipiscing elit. Quas, nemo?
                        </p>
                        <p className='text_para'>
                            Our best is something we strive for each day, caring for our patients-not 
                            looking back at what we acomplished but towards what we can do tomorrow. 
                            Providing the best, Lorem Ipsum dolor sit amet concetetur, 
                            adipiscing elit. Quas, nemo?
                        </p>
                        <Link to={'/'}><button className='b btn'>Learn more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;