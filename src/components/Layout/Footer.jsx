import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <>
      <footer className={isAuthorized ? "footerShow" : "footerHide"}>
        <div>&copy; ALL RIGHT RESERVED BY WIZARD</div>
        <div>
          <Link to={"/"} target="_blank"><FaFacebookF></FaFacebookF></Link>
          <Link to={"/"} target="_blank"><FaYoutube></FaYoutube></Link>
          <Link to={"/"} target="_blank"><FaLinkedin></FaLinkedin></Link>
          <Link to={"/"} target="_blank"><RiInstagramFill></RiInstagramFill></Link>
        </div>
      </footer>
    </ >
  )
}

export default Footer