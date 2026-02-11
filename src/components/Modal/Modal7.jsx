import { useState, useRef, useEffect } from 'react';
import './Modal.css';

function Modal7({onClose}) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const progressPickerRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressBarClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlePickerDrag = (e) => {
    e.preventDefault();
    const rect = progressRef.current.getBoundingClientRect();
    const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const newTime = (offsetX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = (currentTime / duration) * 100;

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <div className="heading-bunch">
                <h1 className="heading-modal">Spoken English</h1>
                <h2 className="sub-heading">We recommend jobs based on your spoken English</h2>
              </div>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
              <div className="flex modal-content-inside">
                <div className="flex flex-col spoken-eng-sec1">
                  <h2 className="modal-heading">Introduce yourself in English. Please mention the following:</h2>
                  <div className="flex things">
                    <span className="flex-acjc border-grey para">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.425C8.87 3.425 9.575 4.13 9.575 5C9.575 5.87 8.87 6.575 8 6.575C7.13 6.575 6.425 5.87 6.425 5C6.425 4.13 7.13 3.425 8 3.425ZM8 10.175C10.2275 10.175 12.575 11.27 12.575 11.75V12.575H3.425V11.75C3.425 11.27 5.7725 10.175 8 10.175ZM8 2C6.3425 2 5 3.3425 5 5C5 6.6575 6.3425 8 8 8C9.6575 8 11 6.6575 11 5C11 3.3425 9.6575 2 8 2ZM8 8.75C5.9975 8.75 2 9.755 2 11.75V13.25C2 13.6625 2.3375 14 2.75 14H13.25C13.6625 14 14 13.6625 14 13.25V11.75C14 9.755 10.0025 8.75 8 8.75Z" fill="#190A28"></path></svg>
                      <span className="spoken-text">Name</span>
                    </span>
                    <span className="flex-acjc border-grey para">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.23914 2.1306C8.0899 2.04919 7.90953 2.04919 7.76029 2.1306L2.27653 5.12174C1.58152 5.50083 1.5817 6.49885 2.27684 6.8777L3.07232 7.31124C3.23304 7.39883 3.33305 7.56723 3.33305 7.75027V10.8598C3.33305 11.2257 3.53286 11.5624 3.85402 11.7376L7.52069 13.7386C7.81926 13.9015 8.18017 13.9015 8.47874 13.7386L12.1454 11.7376C12.4666 11.5624 12.6664 11.2257 12.6664 10.8598V7.45333L13.9997 6.72667V10.6667C13.9997 11.0349 14.2982 11.3333 14.6664 11.3333C15.0346 11.3333 15.333 11.0349 15.333 10.6667V6.15374C15.333 6.05897 15.2813 5.97176 15.1981 5.92638L8.23914 2.1306ZM12.5464 6L8.23914 8.3494C8.0899 8.43081 7.90953 8.43081 7.76029 8.3494L3.45305 6L7.76029 3.6506C7.90953 3.56919 8.0899 3.56919 8.23914 3.6506L12.5464 6ZM11.333 10.6667L7.99972 12.48L4.66638 10.6667V8.18L7.52049 9.73835C7.81917 9.90142 8.18027 9.90142 8.47894 9.73835L11.333 8.18V10.6667Z" fill="#190A28"></path></svg>
                      <span className="spoken-text">Education</span>
                    </span>
                    <span className="flex-acjc border-grey para">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.00002 5.08138C7.24811 5.08138 6.76192 5.615 6.76192 6.12675C6.76192 6.63849 7.24811 7.17212 8.00002 7.17212C8.75193 7.17212 9.23811 6.63849 9.23811 6.12675C9.23811 5.615 8.75193 5.08138 8.00002 5.08138ZM5.42859 6.12675C5.42859 4.74841 6.64907 3.74805 8.00002 3.74805C9.35096 3.74805 10.5714 4.74841 10.5714 6.12675C10.5714 7.50509 9.35096 8.50545 8.00002 8.50545C6.64907 8.50545 5.42859 7.50509 5.42859 6.12675Z" fill="#190A28"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.99996 2.66732C5.65042 2.66732 3.99996 4.34405 3.99996 6.12768C3.99996 7.12806 4.633 8.53696 5.63451 10.0451C6.42368 11.2335 7.33196 12.3243 8.00284 13.0779C8.67193 12.3234 9.57814 11.2332 10.366 10.0456C11.3668 8.53708 12 7.12819 12 6.12768C12 4.34405 10.3495 2.66732 7.99996 2.66732ZM7.42091 14.4208C7.72567 14.7495 8.28186 14.7495 8.58663 14.4208C9.96567 12.921 13.3333 8.98336 13.3333 6.12768C13.3333 3.47745 10.9485 1.33398 7.99996 1.33398C5.05139 1.33398 2.66663 3.47745 2.66663 6.12768C2.66663 8.98336 6.03425 12.921 7.42091 14.4208Z" fill="#190A28"></path></svg>
                      <span className="spoken-text">Location</span>
                    </span>
                    <span className="flex-acjc border-grey para">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.425C8.87 3.425 9.575 4.13 9.575 5C9.575 5.87 8.87 6.575 8 6.575C7.13 6.575 6.425 5.87 6.425 5C6.425 4.13 7.13 3.425 8 3.425ZM8 10.175C10.2275 10.175 12.575 11.27 12.575 11.75V12.575H3.425V11.75C3.425 11.27 5.7725 10.175 8 10.175ZM8 2C6.3425 2 5 3.3425 5 5C5 6.6575 6.3425 8 8 8C9.6575 8 11 6.6575 11 5C11 3.3425 9.6575 2 8 2ZM8 8.75C5.9975 8.75 2 9.755 2 11.75V13.25C2 13.6625 2.3375 14 2.75 14H13.25C13.6625 14 14 13.6625 14 13.25V11.75C14 9.755 10.0025 8.75 8 8.75Z" fill="#190A28"></path></svg>
                      <span className="spoken-text">Experience</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col spoken-eng-sec2"></div>
                <div className="audio">
                  <p className="flex para">Play sample audio</p>
                  <div className="audio-player-cont border-grey">
                    <div className="width-100 audio-player-wrapper">
                      <audio controls="" hidden="hidden"><source src="https://cdn.apna.co/cloudinary/android_assets/english_audio_intro_sample.m4a" type="audio/mp3" /></audio>
                      {/* AUDIO-PLAYER */}
                      <div className="flex-acjc audio-player">
                        <button className="play-button" onClick={togglePlayPause}>
                          {isPlaying ? (
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9997 3.33398C10.7997 3.33398 3.33301 10.8007 3.33301 20.0007C3.33301 29.2007 10.7997 36.6673 19.9997 36.6673C29.1997 36.6673 36.6663 29.2007 36.6663 20.0007C36.6663 10.8007 29.1997 3.33398 19.9997 3.33398ZM16.6663 26.6673C15.7497 26.6673 14.9997 25.9173 14.9997 25.0007V15.0007C14.9997 14.084 15.7497 13.334 16.6663 13.334C17.583 13.334 18.333 14.084 18.333 15.0007V25.0007C18.333 25.9173 17.583 26.6673 16.6663 26.6673ZM23.333 26.6673C22.4163 26.6673 21.6663 25.9173 21.6663 25.0007V15.0007C21.6663 14.084 22.4163 13.334 23.333 13.334C24.2497 13.334 24.9997 14.084 24.9997 15.0007V25.0007C24.9997 25.9173 24.2497 26.6673 23.333 26.6673Z" fill="#1F8268"></path></svg>
                          ) : (
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9997 3.33398C10.7997 3.33398 3.33301 10.8007 3.33301 20.0007C3.33301 29.2007 10.7997 36.6673 19.9997 36.6673C29.1997 36.6673 36.6663 29.2007 36.6663 20.0007C36.6663 10.8007 29.1997 3.33398 19.9997 3.33398ZM16.6663 25.834V14.1673C16.6663 13.484 17.4497 13.084 17.9997 13.5007L25.783 19.334C26.233 19.6673 26.233 20.334 25.783 20.6673L17.9997 26.5007C17.4497 26.9173 16.6663 26.5173 16.6663 25.834Z" fill="#1F8268"></path></svg>
                          )}
                        </button>
                        <div className="flex-acjc progress-bar-time">
                          <div
                            className="progress-bar"
                            ref={progressRef}
                            onClick={handleProgressBarClick}
                          >
                            <div className="progress" style={{ width: `${progressPercent}%` }}></div>
                            <div
                              className="progress-picker"
                              ref={progressPickerRef}
                              style={{ left: `${progressPercent}%` }}
                              draggable="true"
                              onDrag={handlePickerDrag}
                            ></div>
                          </div>
                          <span className="para time">
                            <span className="current">{formatTime(currentTime)}/</span>
                            <span className="duration">{formatTime(duration)}</span>
                          </span>
                          <audio ref={audioRef} src="https://cdn.apna.co/cloudinary/android_assets/english_audio_intro_sample.m4a"></audio>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tips Dropdown */}
                  <div className="flex-acjc flex-col dropdown border-grey">
                    <div className="flex-acjc dropdown-head">
                      <span className="flex-acjc placeholder font-600 dropdown-txt">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#8C8594"></path></svg>
                        <span>Tips for better results</span>
                      </span>
                      <button
                        className={`flex-acjc dropdown-toggle ${showDropdown ? 'rotated' : ''}`}
                        onClick={toggleDropdown}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.1611 8.35535L11.9946 13.0691L7.82819 8.35535C7.4094 7.88155 6.73289 7.88155 6.31409 8.35535C5.8953 8.82916 5.8953 9.59453 6.31409 10.0683L11.243 15.6446C11.6617 16.1185 12.3383 16.1185 12.757 15.6446L17.6859 10.0683C18.1047 9.59453 18.1047 8.82916 17.6859 8.35535C17.2671 7.8937 16.5799 7.88155 16.1611 8.35535Z" fill="#1F8268"></path></svg>
                      </button>
                    </div>
                    {showDropdown && (
                      <div className="tips-section">
                        <hr />
                        <ul>
                          <li className="flex">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="12" fill="#F4F2F6"></rect><path d="M26.6663 20.0057C26.6663 18.2148 25.6589 16.6769 24.1972 15.9282V24.0731C25.6589 23.3345 26.6663 21.7966 26.6663 20.0057ZM13.333 17.9821V22.0293C13.333 22.5858 13.7775 23.0411 14.3207 23.0411H17.2836L20.533 26.3698C21.1552 27.0073 22.2219 26.552 22.2219 25.6515V14.3498C22.2219 13.4493 21.1552 12.994 20.533 13.6315L17.2836 16.9704H14.3207C13.7775 16.9704 13.333 17.4257 13.333 17.9821Z" fill="#8C8594"></path></svg>
                            <div className="flex flex-col tips-dropdown-txt">
                              <span className="maintxt">Ensure you are in a silent place</span>
                              <span className="subtxt">Check your surroundings</span>
                            </div>
                          </li>
                          <li className="flex">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="12" fill="#F4F2F6"></rect><path d="M20.6233 13.6392L16.9865 17.45C16.7436 17.7045 16.6058 18.0553 16.6058 18.4199V25.2916C16.6058 26.0482 17.1966 26.6673 17.9187 26.6673H23.8269C24.352 26.6673 24.8247 26.3371 25.0347 25.835L27.1748 20.6004C27.7262 19.2384 26.7744 17.7251 25.363 17.7251H21.654L22.2776 14.5747C22.3432 14.2308 22.2448 13.88 22.0085 13.6323C21.6211 13.2334 21.0041 13.2334 20.6233 13.6392ZM13.9799 26.6673C14.702 26.6673 15.2928 26.0482 15.2928 25.2916V19.7887C15.2928 19.0321 14.702 18.413 13.9799 18.413C13.2578 18.413 12.667 19.0321 12.667 19.7887V25.2916C12.667 26.0482 13.2578 26.6673 13.9799 26.6673Z" fill="#8C8594"></path></svg>
                            <div className="flex flex-col tips-dropdown-txt">
                              <span className="maintxt">Review recording before submitting</span>
                              <span className="subtxt">Re-record if required</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex-acjc record-audio">
                    <span className="flex-acjc record">
                      <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="83" height="83" rx="41.5" fill="#1F8268"></rect><path d="M41.998 45.5081C44.5561 45.5081 46.621 43.6274 46.621 41.2976V32.8765C46.621 30.5467 44.5561 28.666 41.998 28.666C39.44 28.666 37.3751 30.5467 37.3751 32.8765V41.2976C37.3751 43.6274 39.44 45.5081 41.998 45.5081ZM51.1053 41.2976C50.3502 41.2976 49.7184 41.8029 49.5951 42.4906C48.9633 45.7888 45.8043 48.3151 41.998 48.3151C38.1918 48.3151 35.0328 45.7888 34.4009 42.4906C34.2777 41.8029 33.6459 41.2976 32.8908 41.2976C31.9508 41.2976 31.2111 42.0555 31.3498 42.8976C32.1049 47.1081 35.8032 50.4064 40.457 51.0099V53.9292C40.457 54.7011 41.1505 55.3327 41.998 55.3327C42.8456 55.3327 43.539 54.7011 43.539 53.9292V51.0099C48.1928 50.4064 51.8912 47.1081 52.6463 42.8976C52.8004 42.0555 52.0453 41.2976 51.1053 41.2976Z" fill="white"></path><rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="#1F8268"></rect></svg>
                      <span className="record-txt">Record audio</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="save-section">
              <button type="submit" disabled className="flex-acjc greenBtn heading">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.92857 17.1785H15.0714C15.7786 17.1785 16.3571 16.6361 16.3571 15.9732V9.94636H18.4014C19.5457 9.94636 20.1243 8.64457 19.3143 7.88519L13.4129 2.35257C12.9114 1.88248 12.1014 1.88248 11.6 2.35257L5.69857 7.88519C4.88857 8.64457 5.45429 9.94636 6.59857 9.94636H8.64286V15.9732C8.64286 16.6361 9.22143 17.1785 9.92857 17.1785ZM4.78571 19.5893H20.2143C20.9214 19.5893 21.5 20.1317 21.5 20.7946C21.5 21.4576 20.9214 22 20.2143 22H4.78571C4.07857 22 3.5 21.4576 3.5 20.7946C3.5 20.1317 4.07857 19.5893 4.78571 19.5893Z" fill="#FFF"></path></svg>
                Upload
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Modal7;
