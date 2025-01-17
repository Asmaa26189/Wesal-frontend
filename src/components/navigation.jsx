//navigation.jsx
import React from "react";

export const Navigation = ({ userName, onLogout }) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
       
      {/* <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          وصال
          </a>{" "}
        </div> */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="https://docs.google.com/presentation/d/16GNRexTR2sU9sEnhCUBgoE5m4ZpKiR-3NSJdLZXx4uQ/edit?usp=sharing" className="page-scroll">
                lean canvas
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                تواصل معانا
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                اعرف عنا
              </a>
            </li>
            <li>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </li>
            <li>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  {" "}
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>{" "}
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                وصال
                </a>{" "}
              </div>
            </li>
            {/* <li>
              <a href="#clinics" className="page-scroll">
                Clinics
              </a>
            </li> */}
            {/* <li>
              <a href="#doctors" className="page-scroll">
                Doctors
              </a>
            </li> */}
            {/* <li>
              <a href="#patients" className="page-scroll">
                patients
              </a>
            </li> */}
            {/* <li>
              <a href="#appointments" className="page-scroll">
                Appointments
              </a>
            </li> */}
            {/* {userName && (
              <>
                <li>
                  <a href="#users" className="page-scroll" >Welcome, {userName}!</a>
                </li>
                <li>
                  <a onClick={onLogout} style={{ cursor: "pointer" }}>Logout</a>
                </li>
              </>
            )}               */}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};
