import React from 'react';

import "./styles.css";

const Header = () => {
  return (
    <header className="header_area">
      <div className="top_menu row m0">
        <div className="container">
          <div className="float-left">
            <ul className="list header_social">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
            </ul>
          </div>
          <div className="float-right">
            <a className="dn_btn" href="tel:+4400123654896">+440 012 3654 896</a>
            <a className="dn_btn" href="mailto:support@colorlib.com">support@colorlib.com</a>
          </div>
        </div>
      </div>

      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logo.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li>
                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Courses</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="courses.html">Courses</a></li>
                    <li className="nav-item"><a className="nav-link" href="course-details.html">Course Details</a></li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
