import {useEffect, useRef,useContext} from 'react';
import Logo from '../../assets/images/logo.png';
import userImage from '../../assets/images/avatar-icon.png';
import {NavLink, Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import { authContext } from '../../context/authContext';

const navlinks = [
  {
    path:'/home',
    display:'Home',
  },
  {
    path:'/doctors',
    display:'Find a Doctor',
  },
  {
    path:'/services',
    display:'Services',
  },
  {
    path:'/contacts',
    display:'Contact',
  },

]

function Header() {
  const headRef = useRef(null);
  const menuRef = useRef(null);
  const {user,role,token} = useContext(authContext);
  // handleStick header
  const handleStickHeader = ()=>{
   window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headRef.current.classList.add('sticky_header');
    }else{
      headRef.current.classList.remove('sticky_header');
    }
   });
  };

  useEffect(()=>{
    handleStickHeader();

    return ()=>window.removeEventListener('scroll',handleStickHeader);
  });

  const toggleMenu = ()=>menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* we place the logo here  */}
          <div>
            <img src={Logo} alt='' />
          </div>
          {/* we place menu */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex gap-[2.7rem] items-center'>
              {navlinks.map((link, index) =>
                <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 
                  'text-primaryColor text-[16px] leading-7 font-[600]' : 
                  'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>
                    {link.display}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>
          {/* nav right */}
          <div className='flex items-center gap-[1.5rem]'>
            {token && user ?
              (<div>
                <Link to={`${role === "doctor" ? '/doctors/profile/me' : 'users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo} alt='' className='w-full rounded-full' />
                  </figure>
                </Link>
              </div>
              ) : (
                <Link to={'/login'}>
                  <button className='b text-white bg-primaryColor flex py-2 px-6 h-[35px] items-center justify-center rounded-[50px] font-[600]'>login</button>
                </Link>
              )
            }
            
            {/* Bi-menu selector */}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>

          
        </div>

      </div>
    </header>
  )
}

export default Header;