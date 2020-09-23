import React from "react";
import logo_white from '../pictures/logo_white.svg'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <img src={logo_white} alt="logo" />

          <div class="flex align-start">
            <ul>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>

            <ul>
              <li>Career</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>

            <ul class="social-media">
              <li>
                <a class="circle" href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a class="circle" href="/">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="circle" href="/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
