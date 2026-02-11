import { useState } from 'react';
import './Profile.css';
import Modal1 from "../Modal/Modal1.jsx";
import Modal2 from "../Modal/Modal2.jsx";
import Modal3 from "../Modal/Modal3.jsx";
import Modal4 from "../Modal/Modal4.jsx";
import Modal5 from "../Modal/Modal5.jsx";
import Modal6 from "../Modal/Modal6.jsx";
import Modal7 from "../Modal/Modal7.jsx";
import Modal8 from "../Modal/Modal8.jsx";
import Modal9 from "../Modal/Modal9.jsx";
import Modal10 from "../Modal/Modal10.jsx";
import Modal11 from "../Modal/Modal11.jsx";
import Modal12 from "../Modal/Modal12.jsx";
import Modal13 from "../Modal/Modal13.jsx";

function Profile() {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);
  const [showModal13, setShowModal13] = useState(false);

  return (
    <>
      <main>
      <section className="section-cont font-600">
        
        {/* ------------------------- Personal Information ------------------------- */}
        <section className="personal-info">

          <div className="profile-view-info border-grey">
            <div className="profile-picture">
              <div className="profile-picture-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" fill="none"><path fill="#8C8594" d="M4.375 4.833V.458h2.917v4.375h4.375V7.75H7.292v4.375H4.375V7.75H0V4.833h4.375Zm4.375 8.75V9.208h4.375V4.833h10.208l2.67 2.917h4.622a2.925 2.925 0 0 1 2.917 2.917v17.5a2.925 2.925 0 0 1-2.917 2.916H7.292a2.925 2.925 0 0 1-2.917-2.916V13.583H8.75Zm10.208 13.125a7.294 7.294 0 0 0 7.292-7.291 7.294 7.294 0 0 0-7.292-7.292 7.294 7.294 0 0 0-7.291 7.292 7.294 7.294 0 0 0 7.291 7.291Zm-4.666-7.291a4.662 4.662 0 0 0 4.666 4.666 4.662 4.662 0 0 0 4.667-4.666 4.662 4.662 0 0 0-4.667-4.667 4.662 4.662 0 0 0-4.666 4.667Z"></path></svg>
              </div>
            </div>
            <div className="profile-view">
              <h1 id="name" className="heading textflow">Adityan Verma</h1>
              <div className="link-container">
                <a className="para link-url" href="http://" target="_blank" rel="noopener noreferrer">
                  <span className="link-text">https://apna.co/adityan-verma-akhh8mk</span>
                  <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1F8268" viewBox="0 0 16 16"><path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"></path><path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"></path></svg>
                </a>
              </div>
              <div className="container-2">
                <div className="college flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none"><path fill="#8C8594" d="M2.706 6.809v1.933c0 .502.28.97.73 1.21l3.507 1.878c.42.227.926.227 1.347 0l3.507-1.878c.45-.24.73-.708.73-1.21V6.809L8.29 9.079c-.421.227-.926.227-1.347 0l-4.237-2.27ZM6.943.165 1.029 3.33a.686.686 0 0 0 0 1.21l5.914 3.164c.42.227.926.227 1.347 0l5.64-3.02V8.75c0 .378.315.687.701.687.386 0 .702-.31.702-.687v-4.41a.69.69 0 0 0-.365-.604L8.29.165c-.421-.22-.926-.22-1.347 0Z"></path></svg>
                  <p className="para">Delhi Technical Campus, Greater Noida</p>
                </div>
                <div className="address flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="none"><path fill="#8C8594" d="M6 .333C3.05.333.665 2.477.665 5.127c0 2.856 3.368 6.793 4.754 8.293a.812.812 0 0 0 1.166 0c1.38-1.5 4.747-5.437 4.747-8.293 0-2.65-2.385-4.794-5.334-4.794ZM6 6.84c-1.052 0-1.905-.767-1.905-1.712s.853-1.712 1.904-1.712c1.052 0 1.905.767 1.905 1.712S7.051 6.839 6 6.839Z"></path></svg>
                  <p className="para">Gulabi Bagh, New Delhi, DL</p>
                </div>
                <div className="share flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="none"><path fill="#1F8268" d="M10 9.758c-.507 0-.96.2-1.307.515L3.94 7.495A2.2 2.2 0 0 0 4 7.027a2.2 2.2 0 0 0-.06-.469l4.7-2.75c.36.334.833.541 1.36.541 1.107 0 2-.897 2-2.008a2.001 2.001 0 0 0-2-2.008c-1.107 0-2 .897-2 2.008 0 .161.027.315.06.469l-4.7 2.75A1.987 1.987 0 0 0 2 5.02c-1.107 0-2 .897-2 2.008 0 1.11.893 2.008 2 2.008.527 0 1-.208 1.36-.542l4.747 2.784c-.034.14-.054.288-.054.435 0 1.078.874 1.955 1.947 1.955a1.953 1.953 0 0 0 1.947-1.955A1.953 1.953 0 0 0 10 9.758Z"></path></svg>
                  <a className="para" href="http://">Share profile</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info border-grey">
            <div className="email">
              <p className="head">Email ID</p>
              <p className="link">Add email id</p>
            </div>
            <div className="mobile">
              <p className="head">Mobile number</p>
              <p className="content">+91-9310860121</p>
            </div>
            <div className="dob">
              <p className="head">Date of birth</p>
              <p className="content">21st Mar 2004</p>
            </div>
            <div className="gender">
              <p className="head">Gender</p>
              <p className="content">Male</p>
            </div>
            <div className="location">
              <p className="head">Current Location</p>
              <p className="content">New Delhi</p>
            </div>
            <div className="hometown">
              <p className="head">Hometown</p>
              <p className="link">Add Hometown</p>
            </div>
          </div>

        </section>



        {/* ------------------------- Other Information ------------------------- */}
        <section className="other-info">

          {/* Work Experience */}
          <div className="work-exp">
            <h1 className="heading info-heading">Work Experience</h1>
            <div className="border-grey boxbox">
              <p className="placeholder">Total Years of experience:</p>
              <div className="add-info">
                <p className="placeholder-2">Fresher</p>
                <svg onClick={() => setShowModal1(true)} className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F8268"><path d="M8.355 6.316a.985.985 0 0 0 0 1.515l4.714 4.17-4.714 4.17a.985.985 0 0 0 0 1.515c.474.419 1.24.419 1.713 0l5.577-4.933a.985.985 0 0 0 0-1.515l-5.577-4.933c-.461-.408-1.239-.408-1.713.01Z"></path></svg>
                {showModal1 && <Modal1 onClose={() => setShowModal1(false)} />}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="education">
            <div className="flex info-heading">
              <h1 className="heading">Education</h1>
              <div className="flex-acjc">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M10.57 6.762H6.762v3.81a.764.764 0 0 1-.762.761.764.764 0 0 1-.762-.762v-3.81h-3.81A.764.764 0 0 1 .667 6c0-.42.343-.762.762-.762h3.81v-3.81c0-.419.342-.761.761-.761.42 0 .762.342.762.762v3.809h3.81c.419 0 .762.343.762.762s-.343.762-.762.762Z"></path></svg>
                <p onClick={() => setShowModal2(true)} className="link">Add</p>
                {showModal2 && <Modal2 onClose={() => setShowModal2(false)} />}
              </div>
            </div>

            <div className="border-grey boxbox">
              <p className="placeholder">Highest education:</p>
              <div className="add-info">
                <p className="placeholder-2">Graduate</p>
                <svg onClick={() => setShowModal3(true)} className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F8268"><path d="M8.355 6.316a.985.985 0 0 0 0 1.515l4.714 4.17-4.714 4.17a.985.985 0 0 0 0 1.515c.474.419 1.24.419 1.713 0l5.577-4.933a.985.985 0 0 0 0-1.515l-5.577-4.933c-.461-.408-1.239-.408-1.713.01Z"></path></svg>
                {showModal3 && <Modal3 onClose={() => setShowModal3(false)} />}
              </div>
            </div>

            <div id="study" className="flex border-grey boxbox-2">
              <div className="flex-acjc timestamp">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><rect width="39" height="39" x="0.5" y="0.5" fill="#F4F2F6" rx="7.5"></rect><path fill="#8C8594" d="M21.668 25.025c-.463.284-1.055.44-1.668.44-.614 0-1.206-.156-1.67-.44l-7.554-4.634s-.682-.418-.682.53V25.546c0 2.438 4.435 5.065 9.905 5.065s9.906-2.627 9.906-5.065V20.66c0-.76-.485-.388-.485-.388l-7.752 4.754Z"></path><path fill="#D1CED4" d="M32.565 16.705c.58-.356.58-.938 0-1.294l-11.51-5.756c-.58-.356-1.53-.356-2.11 0l-11.51 5.756c-.58.356-.58.938 0 1.294l11.51 7.059c.58.356 1.53.356 2.11 0"></path><path fill="#8C8594" d="M32.088 27.168v-7.796s.006-.369-.213-.247c-.176.098-.607.338-.759.47-.175.152-.136.494-.136.494v7.079c0 .1-.086.149-.127.173a1.345 1.345 0 0 0 .681 2.507 1.347 1.347 0 0 0 .677-2.51c-.04-.023-.123-.07-.123-.17Z"></path><rect width="39" height="39" x="0.5" y="0.5" stroke="#E8E7EA" rx="7.5"></rect></svg>
                <div className="std-line"></div>
                <div className="std-dot">·</div>
              </div>
              <div className="flex deg-cont">
                <div className="heading-edit">
                  <h1 className="heading heading-inside">BE/B.Tech , Computer Science</h1>
                  <div className="flex-acjc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M.75 9.185v1.773c0 .164.128.292.292.292h1.773c.076 0 .152-.03.204-.088l6.37-6.364-2.187-2.187L.838 8.975a.286.286 0 0 0-.088.21Zm10.33-6.078a.58.58 0 0 0 0-.823L9.717.92a.58.58 0 0 0-.823 0L7.826 1.987l2.187 2.187 1.068-1.067Z"></path></svg>
                    <p onClick={() => setShowModal4(true)} className="link">Edit</p>
                    {showModal4 && <Modal4 onClose={() => setShowModal4(false)} />}
                  </div>
                </div>
                <div className="content">
                  <span>Delhi Technical Campus, Greater Noida</span>
                  <span>&nbsp;•&nbsp;</span>
                  <span>Graduate</span>
                </div>
                <div className="skills-cont flex">
                  <span className="cont-cont flex-acjc">Batch of 2025</span>
                </div>
              </div>
            </div>

            <div id="skill" className="border-grey boxbox-2">
              <div className="heading-edit">
                <h1 className="heading heading-inside">Skills </h1>
                <div className="flex-acjc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M.75 9.185v1.773c0 .164.128.292.292.292h1.773c.076 0 .152-.03.204-.088l6.37-6.364-2.187-2.187L.838 8.975a.286.286 0 0 0-.088.21Zm10.33-6.078a.58.58 0 0 0 0-.823L9.717.92a.58.58 0 0 0-.823 0L7.826 1.987l2.187 2.187 1.068-1.067Z"></path></svg>
                  <p onClick={() => setShowModal5(true)} className="link">Edit</p>
                  {showModal5 && <Modal5 onClose={() => setShowModal5(false)} />}
                </div>
              </div>
              <div className="para-inside placeholder">
                <span className="count">0&nbsp;</span>
                <span>skill medals earned</span>
              </div>
              <div className="skills-cont flex">
                <span className="cont-cont flex-acjc">Computer Hardware</span>
                <span className="cont-cont flex-acjc">Web development</span>
                <span className="cont-cont flex-acjc">Programming language</span>
                <span className="cont-cont flex-acjc">Python</span>
                <span className="cont-cont flex-acjc">Java</span>
                <span className="cont-cont flex-acjc">JavaScript</span>
                <span className="cont-cont flex-acjc">C++/C</span>
                <span className="cont-cont flex-acjc">HTML/CSS</span>
              </div>
              <div className="para-inside placeholder flex-acjc">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#8C8594" d="M7.334 4.667h1.333V6H7.334V4.667Zm.667 6.666c.366 0 .666-.3.666-.666V8c0-.367-.3-.667-.666-.667-.367 0-.667.3-.667.667v2.667c0 .366.3.666.667.666Zm0-10A6.67 6.67 0 0 0 1.334 8a6.67 6.67 0 0 0 6.667 6.667A6.67 6.67 0 0 0 14.667 8a6.67 6.67 0 0 0-6.666-6.667Zm0 12A5.34 5.34 0 0 1 2.667 8a5.34 5.34 0 0 1 5.334-5.333A5.34 5.34 0 0 1 13.334 8a5.34 5.34 0 0 1-5.333 5.333Z"></path></svg>
                <span>&nbsp;Skills with the check mark have been verified by Apna</span>
              </div>
            </div>

            <div id="lang-known" className="border-grey boxbox-2">
              <div className="heading-edit">
                <h1 className="heading heading-inside">Languages known</h1>
                <div className="flex-acjc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M.75 9.185v1.773c0 .164.128.292.292.292h1.773c.076 0 .152-.03.204-.088l6.37-6.364-2.187-2.187L.838 8.975a.286.286 0 0 0-.088.21Zm10.33-6.078a.58.58 0 0 0 0-.823L9.717.92a.58.58 0 0 0-.823 0L7.826 1.987l2.187 2.187 1.068-1.067Z"></path></svg>
                  <p onClick={() => setShowModal6(true)} className="link">Edit</p>
                  {showModal6 && <Modal6 onClose={() => setShowModal6(false)} />}
                </div>
              </div>
              <div className="lang-known-lvl flex">
                <span className="cont-cont lang1">
                  <span>English</span>
                  <span className="lvl-cont flex-acjc">
                    <div className="lvl">
                      <div className="bar-dark"></div>
                      <div className="bar-dark"></div>
                      <div className="bar-light"></div>
                    </div>
                    Intermediate
                  </span>
                </span>
                <span className="cont-cont lang2">Hindi</span>
              </div>
            </div>

            <div id="spoken-eng" className="border-grey boxbox-2">
              <h1 className="heading heading-inside">Spoken English</h1>
              <div className="para-inside placeholder">Having the required level of English speaking proficiency will help you find job at top companies</div>
              <div onClick={() => setShowModal7(true)} className="green-adder-box para">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M10.57 6.762H6.762v3.81a.764.764 0 0 1-.762.761.764.764 0 0 1-.762-.762v-3.81h-3.81A.764.764 0 0 1 .667 6c0-.42.343-.762.762-.762h3.81v-3.81c0-.419.342-.761.761-.761.42 0 .762.342.762.762v3.809h3.81c.419 0 .762.343.762.762s-.343.762-.762.762Z"></path></svg>
                <p>Verify now</p>
              </div>
              {showModal7 && <Modal7 onClose={() => setShowModal7(false)} />}
            </div>
          </div>

          {/* Resume */}
          <div className="resume">
            <h1 className="heading info-heading">Resume</h1>
            <h1 className="para grey-txt">Only visible to HRs</h1>
            <div className="border-grey boxbox-2">
              <div className="para grey-txt">Uploading your resume helps HRs learn more about you</div>
              <div onClick={() => setShowModal8(true)} className="green-adder-box para">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M10.57 6.762H6.762v3.81a.764.764 0 0 1-.762.761.764.764 0 0 1-.762-.762v-3.81h-3.81A.764.764 0 0 1 .667 6c0-.42.343-.762.762-.762h3.81v-3.81c0-.419.342-.761.761-.761.42 0 .762.342.762.762v3.809h3.81c.419 0 .762.343.762.762s-.343.762-.762.762Z"></path></svg>
                <p>Add Resume</p>
              </div>
              {showModal8 && <Modal8 onClose={() => setShowModal8(false)} />}
            </div>
          </div>

          {/* Other Details */}
          <div className="other-details">
            <h1 className="heading info-heading">Other Details</h1>
            <h1 className="para grey-txt">Only visible to HRs</h1>
            <div className="border-grey boxbox-2">
              <div className="upload">
                <h1 className="heading heading-inside">Preferred job title/role</h1>
                <svg onClick={() => setShowModal9(true)} className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F8268"><path d="M8.355 6.316a.985.985 0 0 0 0 1.515l4.714 4.17-4.714 4.17a.985.985 0 0 0 0 1.515c.474.419 1.24.419 1.713 0l5.577-4.933a.985.985 0 0 0 0-1.515l-5.577-4.933c-.461-.408-1.239-.408-1.713.01Z"></path></svg>
                {showModal9 && <Modal9 onClose={() => setShowModal9(false)} />}
              </div>
              <div className="para-inside placeholder">Software Development • Website Development • Software Backend Development • Frontend Development</div>
            </div>
            <div className="border-grey boxbox-2">
              <div className="upload">
                <h1 className="heading heading-inside">Location</h1>
                <svg onClick={() => setShowModal10(true)} className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F8268"><path d="M8.355 6.316a.985.985 0 0 0 0 1.515l4.714 4.17-4.714 4.17a.985.985 0 0 0 0 1.515c.474.419 1.24.419 1.713 0l5.577-4.933a.985.985 0 0 0 0-1.515l-5.577-4.933c-.461-.408-1.239-.408-1.713.01Z"></path></svg>
                {showModal10 && <Modal10 onClose={() => setShowModal10(false)} />}
              </div>
              <div className="para-inside placeholder">
                <span className="input">
                  <sapn className="link">Add hometown</sapn>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span className="input">
                  <span>Current location</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span className="input">
                  <span>Preferred location</span>
                </span>
              </div>
            </div>
            <div className="border-grey boxbox-2">
              <div className="upload">
                <h1 className="heading heading-inside">Job preferences</h1>
                <svg onClick={() => setShowModal11(true)} className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F8268"><path d="M8.355 6.316a.985.985 0 0 0 0 1.515l4.714 4.17-4.714 4.17a.985.985 0 0 0 0 1.515c.474.419 1.24.419 1.713 0l5.577-4.933a.985.985 0 0 0 0-1.515l-5.577-4.933c-.461-.408-1.239-.408-1.713.01Z"></path></svg>
                {showModal11 && <Modal11 onClose={() => setShowModal11(false)} />}
              </div>
              <div className="para-inside placeholder">
                <span id="pet"className="input">
                  <span>Full Time</span>
                  <span>&nbsp;•&nbsp;</span>
                  <span>Part Time</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span id="pw"className="input">
                  <span>Work from Home</span>
                  <span>&nbsp;•&nbsp;</span>
                  <span>Work from Office</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span id="ps"className="input">
                  <span>Day Shift</span>
                </span>
              </div>
            </div>
            <div className="border-grey boxbox-2">
              <h1 className="heading heading-inside">Documents & assets</h1>
              <div className="para-inside grey-txt">Uploading your resume helps HRs learn more about you</div>
              <div onClick={() => setShowModal12(true)} className="green-adder-box para">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path fill="#1F8268" d="M10.57 6.762H6.762v3.81a.764.764 0 0 1-.762.761.764.764 0 0 1-.762-.762v-3.81h-3.81A.764.764 0 0 1 .667 6c0-.42.343-.762.762-.762h3.81v-3.81c0-.419.342-.761.761-.761.42 0 .762.342.762.762v3.809h3.81c.419 0 .762.343.762.762s-.343.762-.762.762Z"></path></svg>
                <p>Add Document & assets</p>
              </div>
              {showModal12 && <Modal12 onClose={() => setShowModal12(false)} />}
            </div>
            <div className="border-grey boxbox-2">
              <div className="upload">
                <h1 className="heading heading-inside">Basic details</h1>
                <svg onClick={() => setShowModal13(true)} className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1F8268"><path d="M8.355 6.316a.985.985 0 0 0 0 1.515l4.714 4.17-4.714 4.17a.985.985 0 0 0 0 1.515c.474.419 1.24.419 1.713 0l5.577-4.933a.985.985 0 0 0 0-1.515l-5.577-4.933c-.461-.408-1.239-.408-1.713.01Z"></path></svg>
                {showModal13 && <Modal13 onClose={() => setShowModal13(false)} />}
              </div>
              <div className="para-inside placeholder">
                <span className="input name">
                  <span className="content placeholder">Adityan Verma</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span className="input email">
                  <span className="link">Add email id</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span className="input mobile">
                  <span className="content placeholder">+91-9310860121</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span className="input gender">
                  <span className="content placeholder">male</span>
                  <span>&nbsp;•&nbsp;</span>
                </span>
                <span className="input dob">
                  <span className="content placeholder">21st Mar 2004</span>
                </span>
              </div>
            </div>
          </div>
          
        </section>

      </section>

      </main>
    </>
  );
}

export default Profile;
