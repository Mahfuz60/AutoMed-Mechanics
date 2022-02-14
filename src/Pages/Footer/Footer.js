import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAddressBook, faEnvelope, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_div pt-3">
      <div className=" container ">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className=" about pt-3">About Us</h3>
                </div>
                <p className="footer_para">
                  Some say we’re Nashville, TN’s best kept secret for Automobile Repair, Service, and Maintenance. We’re proud of the work we do, and
                  would love the opportunity to be your “neighborhood mechanic.” We’ve got the experience, expertise, the latest tools and technology
                  to properly diagnose and repair most automobile makes and models.
                </p>
              </div>
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className="mx-4 pt-3">Contact Us</h3>
                  <div>
                    <ul>
                      <li>
                        <FontAwesomeIcon className="footer_icon" icon={faPhone} />
                        +8801625808629
                      </li>
                      <li>
                        <FontAwesomeIcon className="footer_icon" icon={faEnvelope} />
                        info@automed.com
                      </li>

                      <li>
                        <FontAwesomeIcon className="footer_icon" icon={faAddressBook} />
                       Automed Auto Service 1820 21st Ave S, Nashville, TN 00212
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className="mx-4 pt-3">Services</h3>
                  <div className="service_list">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} /> ENGINE DIAGNOSTIC
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} /> WHEEL ALIGNMENT
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        OIL CHANGING
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        BRAKE REPARING
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        WASH AND GLASSING
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        COMPLETE ANALYSIS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className="mx-2 pt-3">More Info</h3>
                  <div className="service_list">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Privacy Policy
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Refund and Return
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Terms and Conditions
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Wishlist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pt-3 copy_right">© COPYRIGHT {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
