import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Footer.css'
import '../bootstrap/css/bootstrap.css'
import { ReactComponent as Logo } from '../pics/logo.svg'
import { IoLogoYoutube } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram, GrTwitter } from 'react-icons/gr'

const Footer = () => {
  return (
    <>
      <footer className="index-footer d-flex flex-md-row flex-wrap align-items-center text-white">
        <div className=" col-4  text-center">
          <Logo
            className="footer-logo"
            src="./image/logo.svg"
            alt=""
          />
        </div>
        <div className="col-4 text-center">
          <small>
            ALL RIGHTS RESERVED. ARTDDICT @ 2021
          </small>
        </div>
        {/* <!-- Grid container --> */}
        <div className=" col-4 p-4 pb-0 text-center">
          {/* <!-- Section: Social media --> */}
          <section>
            {/* <!-- Facebook --> */}
            <Link
              className="footer-icon btn btn-floating m-1"
              to="#!"
              role="button"
            >
              <FaFacebookF />
            </Link>

            {/* <!-- Twitter --> */}
            <Link
              className=" footer-icon btn btn-floating m-1"
              to="#!"
              role="button"
            >
              <GrTwitter />
            </Link>
            {/* <!-- Instagram --> */}
            <Link
              className="footer-icon btn btn-floating m-1"
              to="#!"
              role="button"
            >
              <GrInstagram />
            </Link>

            {/* <!-- Linkedin --> */}
            <Link
              className="footer-icon btn btn-floating m-1"
              to="#!"
              role="button"
            >
              <IoLogoYoutube />
            </Link>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer
