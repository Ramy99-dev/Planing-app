import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom'

function Navbar()
{
  const navigate = useNavigate()

  return (<div className="navbar">
     <div className="logo">
        <img className='navbar-logo' src={logo} />
     </div>
     <div className="item">
         <FontAwesomeIcon icon={faSignIn}  />
         <span onClick={()=>{
            navigate('/login')
         }}>Login</span>
        
     </div>
     
  </div>)
}
export default Navbar;
