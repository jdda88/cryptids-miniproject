import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div >
      <footer className="text-center text-lg-start bg-body-tertiary text-muted bg-dark">
      

        <section className="bg-dark ">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto m-4">
                <h6 className="text-uppercase fw-bold m-4 text-danger">
                  <i className="fas fa-gem me-3 "></i>About Us
                </h6>
                <p>
                  Welcome to our cryptids website! We are Anna and JD, two
                  coding enthusiasts combining our love for cryptozoology with
                  our journey into programming. Join us as we explore the
                  world's most intriguing cryptids through our new website!
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto m-4">
                <h6 className="text-uppercase fw-bold m-4 text-danger">Useful links</h6>
                <p>
                <Link className="nav-link" to="/related-links"> 
                  <a href="#!" className="text-reset">
                    More Cryptids
                  </a></Link>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Action Figures
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help Me!!
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 m-4">
                <h6 className="text-uppercase fw-bold m-4 text-danger">Contact</h6>
                <p>
                  R'lyeh City Hall 666 Deep Sea Avenue Pacific Ocean, NP 00000
                </p>
                <p>cthulhu@cosmicterror.com</p>
                <p>+ 01 666 555-CTHU</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 bg-dark">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="">
            Cthulhu Inc.
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
