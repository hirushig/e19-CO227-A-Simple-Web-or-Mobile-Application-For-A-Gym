import { React, useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-router-dom';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" >
        <img src={Logo} alt='Logo' className="logo" />

        {(menuOpened=== false && mobile===true)? (
          <div style={{ padding: '0.75rem', paddingBottom: '0.5rem', borderRadius: '5px', marginRight: '-3.5rem'}}><img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} 
          onClick={() => setMenuOpened(true)}
          /></div>

        ) : <ul className='header-menu'>
        <li onClick={() => setMenuOpened(false)}><Link to='/' className="no-underline">HOME</Link></li>
        <li onClick={() => setMenuOpened(false)}><Link to='/trainercard' className="no-underline">ABOUT</Link></li>
        <li onClick={() => setMenuOpened(false)}>GALLERY</li>
        
        <li><Link to='/login' className="no-underline">LOGIN</Link></li>

        <li><Link to='/register' className="no-underline">REGISTER</Link></li>
        <li>BMI</li>
      </ul>
      }

        
    </div>
  )
}

export default Header