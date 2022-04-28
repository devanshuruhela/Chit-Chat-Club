import React from 'react'
import './navigation.styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../../images/logo.png'
import { logout } from '../../../Http/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import {setAuth} from '../../../store/authSlice'
const Navigation = () => {
  const dispatch  = useDispatch();
  const {isAuth} = useSelector((state) => state.auth)
  async function logoutUser()
  {
    try {
      const {data} = await logout();
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav className=' navbar container'>
      <Link className='linkstyle' to='/'>
        <img src={Logo} alt="logo" className='navbar'/>
        <span className='linkheading'>Chit-Chat Club</span>
      </Link>
      {isAuth && <button onClick = {logoutUser}>Logout</button>}
    </nav>
  )
}

export default Navigation;