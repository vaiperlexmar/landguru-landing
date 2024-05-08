import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer__hr" />
      <div className="footer__container">
        <div className="footer__col">
          <h4 className="heading-fourth">About Us</h4>

          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Support Center
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Customer Support
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                About Us
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Copyright
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Popular Campaign
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="heading-fourth">Our Information</h4>

          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Return Policy
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Terms & Conditions
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Site Map
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Store Hours
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="heading-fourth">My Account</h4>

          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Press inquiries
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Social media
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Directories
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Images & B-roll
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Permissions
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="heading-fourth">Policy</h4>

          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Application security
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Software principles
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Unwanted software policy
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link link link_dark" href="#">
                Responsible supply chain
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
