import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../../config';
import DoctorCard from '../../components/doctors/DoctorCard';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

function Bookings() {
  const {data:appointmnets,loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errormessage={error} />}
      {!loading && !error && (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {appointmnets.map(doctors=><DoctorCard doctor={doctors} key={doctors._id}/>)}

        </div>
      )}
      {!loading && !error && appointmnets.length==0 &&(
        <h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>You did not book any doctor yet!</h2>
      )}
    </div>
  );
}

export default Bookings