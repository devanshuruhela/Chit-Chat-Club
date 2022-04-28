import React from 'react'
import './navigation.styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../../images/logo.png'
import { logout } from '../../../Http/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import {setAuth} from '../../../store/authSlice'
import logoutlogo from '../../../images/logout.png'
const Navigation = () => {
  const dispatch  = useDispatch();
  const {isAuth , user} = useSelector((state) => state.auth)
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
      <div className="navRight">
        <h3>{user.name}</h3>
        <Link to='/'>
          <img src={user.avatar} className='avatar' width="40" height="40" alt="avatar" />
        </Link>
        <button className='logoutbtn' onClick = {logoutUser}>
          <img src={logoutlogo} alt="logout button" />
        </button>
      </div>
      
    </nav>
  )
}

export default Navigation;