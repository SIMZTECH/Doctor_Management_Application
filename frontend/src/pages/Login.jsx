import { useState, useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import { authContext } from '../context/authContext';
import HashLoader from 'react-spinners/HashLoader';

function Login() {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(authContext);

  const [formData,setFormData] = useState({
    email:'',
    password:''
  });

  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  // submit handler
  const submitHandler = async(event)=>{
    event.preventDefault();

    setLoading(true);
    // register user
    try {
      const res = await fetch(
        `${BASE_URL}/auth/login`,
        {
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        }
      );

      const result = await res.json();

      if(!res.ok){
        throw new Error(result.msg);

      }else{
        // dispatch data
        dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:result.data,
            token:result.token,
            role:result.role
          }
        });

        console.log(result,"login data");


        setLoading(false);
        toast.success(result.msg);
        navigate("/home");
      }
      
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    
  };




  return (
    <section>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='b text-textColor text-[22px] leading-9 font-bold mb-10'>
          Hello!
          <span className=' text-primaryColor'> Welcome </span>
          Back 🎉
        </h3>

        <form onSubmit={submitHandler} className=' py-4 md:py-0'>
          <div className=' mb-5'>
            <input
              type='email'
              required
              placeholder='Enter Your Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
               placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>

          <div className=' mb-5'>
            <input
              type='password'
              required
              placeholder='Enter Your Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
               placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className=' mt-7'>
            <button
              type='submit'
              className=' bg-primaryColor w-full rounded-lg py-3 px-4 text-white text-[18px] leading-[30px]'
            >
              {loading?<HashLoader size={35} color='#fff'/>:`Login`}
            </button>
          </div>

          <p className='mt-5 text-textColor text-center'>
            Don&apos;t have an account?
            <Link
              to={'/register'}
              className='ml-1 text-primaryColor'
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;