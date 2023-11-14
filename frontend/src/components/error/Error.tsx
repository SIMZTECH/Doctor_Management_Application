import React from 'react';

function Error({errormessage}) {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <h3 className='text-[20px] text-headingColor leading-[30px] font-semibold'>{errormessage}</h3>
    </div>
  )
}

export default Error;