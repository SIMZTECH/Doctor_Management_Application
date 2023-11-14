import { useState} from 'react';
import signupImg from '../assets/images/signup.gif';
import { Link,useNavigate} from 'react-router-dom';
import uploadCloudinary from '../util/uploadCloudinary';
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';



function Signup() {
  const [selectedFile,setSelectedFile] = useState(null);
  const [previewURL,setPreviewURL] = useState("");
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:selectedFile,
    gender:'',
    role:'patient'
  });

  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleFileInputChange = async(event)=>{
    const file = event.target.files[0];
    console.log(file);
    // upload file to cloudinary
    const data = await uploadCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({...formData,photo:data.url});

  };

  const submitHandler = async(event)=>{
    event.preventDefault();

    setLoading(true);
    // register user
    try {
      const res = await fetch(
        `${BASE_URL}/auth/register`,
        {
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        }
      );

      const {message} = await res.json();

      if(!res.ok){
        throw new Error(message);

      }else{
        setLoading(false);
        toast.success(message);
        navigate("/login");
      }
      
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    
  };


  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg h-full'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg h-full' />
            </figure>
          </div>
          <div className=' rounded-l-lg lg:pl-16 py-10'>
            <h3 className=' text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className=' text-primaryColor'>account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className=' mb-5'>
                <input
                  required
                  type='text'
                  placeholder='Enter Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer'
                />
              </div>
              <div className=' mb-5'>
                <input
                  required
                  type='text'
                  placeholder='Enter Your Email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer'
                />
              </div>
              <div className=' mb-5'>
                <input
                  required
                  type='password'
                  placeholder='Enter Your password'
                  name='password'
                  
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer'
                />
              </div>

              <div className=' mb-5 flex items-center justify-between'>
                <label
                  className=' text-headingColor font-bold tex-[16px] leading-7'
                >
                  Are you:
                  <select
                    name='role'
                    value={formData.role}
                    onChange={handleInputChange}
                    className=' text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value={'patient'}>Patient</option>
                    <option value={'doctor'}>Doctor</option>
                  </select>
                </label>

                <label
                  className=' text-headingColor font-bold tex-[16px] leading-7'
                >
                  Gender:
                  <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleInputChange}
                    className=' text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value={''}>Select </option>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                    <option value={'other'}>Other</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid 
              border-primaryColor flex items-center justify-center'
                >
                  <img src={previewURL} alt='' className='w-full h-full rounded-full' />
                </figure>}
                <div className='relative w-[130px] h-[50px]'>
                  <input
                    required
                    type='file'
                    name='photo'
                    id='customFile'
                    accept='.jpg, .png'
                    onChange={handleFileInputChange}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label
                    htmlFor='customFile'
                    className='absolute top-0 left-0 w-full h-full flex items-center p-[0.75rem] 
                     bg-[#0066ff46] text-headingColor text-[15px] leading-6 overflow-hidden
                      font-semibold rounded-lg truncate cursor-pointer'
                  >
                    Upload photo
                  </label>
                </div>
              </div>

              <div className=' mt-7'>
                <button
                  type='submit'
                  className=' bg-primaryColor w-full rounded-lg py-3 px-4 text-white text-[18px] leading-[30px]'
                >
                  {loading?<HashLoader size={35} color='#fff'/>:`Sign up`}
                </button>
              </div>

              <p className='mt-5 text-textColor text-center'>
                Already have an account?
                <Link
                  to={'/login'}
                  className='ml-1 text-primaryColor'
                >
                  Login
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;