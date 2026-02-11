import { useState } from 'react';
import './Modal.css';

function Modal10({onClose}) {

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit skills</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
              <div className="flex modal-content-inside">
                <div className="width-100 prefered-job-city-section">
                  <lable className="modal-heading">Prefered job city</lable>

                  <div className="width-100 selector-cont">
                    {/* ------ SELECTOR-1 ------ */}
                    <div className="width-100 custom-select-btn-cont">
                      <div onClick={() => toggleDropdown(1)} className="custom-select-btn">
                          <label className="placeholder">Select city from here</label>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1611 8.35535L11.9946 13.0691L7.82819 8.35535C7.4094 7.88155 6.73289 7.88155 6.31409 8.35535C5.8953 8.82916 5.8953 9.59453 6.31409 10.0683L11.243 15.6446C11.6617 16.1185 12.3383 16.1185 12.757 15.6446L17.6859 10.0683C18.1047 9.59453 18.1047 8.82916 17.6859 8.35535C17.2671 7.8937 16.5799 7.88155 16.1611 8.35535Z" fill="#1F8268"></path></svg>
                      </div>
                      {activeDropdown === 1 && (
                        <div className="job-city-content border-grey">
                          <div className="placeholder search-box">Select a job city</div>
                          <div className="job-city-item">
                            <div className="city">Ahemdabad Region, GJ</div>
                            <div className="city">Ajmer Region, RJ</div>
                            <div className="city">Aligarh Region, UP</div>
                            <div className="city">Amritsar Region, UP</div>
                            <div className="city">Asansol Region, WB</div>
                            <div className="city">Aurangabad, MH Region, MH</div>
                            <div className="city">Bareilly Region, UP</div>
                            <div className="city">Belagavi Region, CG</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ------ SELECTOR-2 ------ */}
                    <div className="width-100 custom-select-btn-cont">
                      <div onClick={() => toggleDropdown(2)} className="custom-select-btn">
                          <label className="placeholder">Select city from here</label>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1611 8.35535L11.9946 13.0691L7.82819 8.35535C7.4094 7.88155 6.73289 7.88155 6.31409 8.35535C5.8953 8.82916 5.8953 9.59453 6.31409 10.0683L11.243 15.6446C11.6617 16.1185 12.3383 16.1185 12.757 15.6446L17.6859 10.0683C18.1047 9.59453 18.1047 8.82916 17.6859 8.35535C17.2671 7.8937 16.5799 7.88155 16.1611 8.35535Z" fill="#1F8268"></path></svg>
                      </div>
                      {activeDropdown === 2 && (
                        <div className="job-city-content border-grey">
                          <div className="placeholder search-box">Select a job city</div>
                          <div className="job-city-item">
                            <div className="city">Ahemdabad Region, GJ</div>
                            <div className="city">Ajmer Region, RJ</div>
                            <div className="city">Aligarh Region, UP</div>
                            <div className="city">Amritsar Region, UP</div>
                            <div className="city">Asansol Region, WB</div>
                            <div className="city">Aurangabad, MH Region, MH</div>
                            <div className="city">Bareilly Region, UP</div>
                            <div className="city">Belagavi Region, CG</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ------ SELECTOR-3 ------ */}
                    <div className="width-100 custom-select-btn-cont">
                      <div onClick={() => toggleDropdown(3)} className="custom-select-btn">
                          <label className="placeholder">Select city from here</label>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1611 8.35535L11.9946 13.0691L7.82819 8.35535C7.4094 7.88155 6.73289 7.88155 6.31409 8.35535C5.8953 8.82916 5.8953 9.59453 6.31409 10.0683L11.243 15.6446C11.6617 16.1185 12.3383 16.1185 12.757 15.6446L17.6859 10.0683C18.1047 9.59453 18.1047 8.82916 17.6859 8.35535C17.2671 7.8937 16.5799 7.88155 16.1611 8.35535Z" fill="#1F8268"></path></svg>
                      </div>
                      {activeDropdown === 3 && (
                        <div className="job-city-content border-grey">
                          <div className="placeholder search-box">Select a job city</div>
                          <div className="job-city-item">
                            <div className="city">Ahemdabad Region, GJ</div>
                            <div className="city">Ajmer Region, RJ</div>
                            <div className="city">Aligarh Region, UP</div>
                            <div className="city">Amritsar Region, UP</div>
                            <div className="city">Asansol Region, WB</div>
                            <div className="city">Aurangabad, MH Region, MH</div>
                            <div className="city">Bareilly Region, UP</div>
                            <div className="city">Belagavi Region, CG</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ------ SELECTOR-4 ------ */}
                    <div className="width-100 custom-select-btn-cont">
                      <div onClick={() => toggleDropdown(4)} className="custom-select-btn">
                          <label className="placeholder">Select city from here</label>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1611 8.35535L11.9946 13.0691L7.82819 8.35535C7.4094 7.88155 6.73289 7.88155 6.31409 8.35535C5.8953 8.82916 5.8953 9.59453 6.31409 10.0683L11.243 15.6446C11.6617 16.1185 12.3383 16.1185 12.757 15.6446L17.6859 10.0683C18.1047 9.59453 18.1047 8.82916 17.6859 8.35535C17.2671 7.8937 16.5799 7.88155 16.1611 8.35535Z" fill="#1F8268"></path></svg>
                      </div>
                      {activeDropdown === 4 && (
                        <div className="job-city-content border-grey">
                          <div className="placeholder search-box">Select a job city</div>
                          <div className="job-city-item">
                            <div className="city">Ahemdabad Region, GJ</div>
                            <div className="city">Ajmer Region, RJ</div>
                            <div className="city">Aligarh Region, UP</div>
                            <div className="city">Amritsar Region, UP</div>
                            <div className="city">Asansol Region, WB</div>
                            <div className="city">Aurangabad, MH Region, MH</div>
                            <div className="city">Bareilly Region, UP</div>
                            <div className="city">Belagavi Region, CG</div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                <div className="width-100 current-location-section">
                  <lable className="flex-acjc modal-heading">
                    <span className="current-loc-txt">Current location</span>
                    <span className="flex-acjc current-loc-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1972_14258)"><path d="M7.00001 4.66683C5.71084 4.66683 4.66668 5.711 4.66668 7.00016C4.66668 8.28933 5.71084 9.3335 7.00001 9.3335C8.28918 9.3335 9.33334 8.28933 9.33334 7.00016C9.33334 5.711 8.28918 4.66683 7.00001 4.66683ZM12.215 6.41683C11.9467 3.98433 10.0158 2.0535 7.58334 1.78516V1.16683C7.58334 0.845996 7.32084 0.583496 7.00001 0.583496C6.67918 0.583496 6.41668 0.845996 6.41668 1.16683V1.78516C3.98418 2.0535 2.05334 3.98433 1.78501 6.41683H1.16668C0.845844 6.41683 0.583344 6.67933 0.583344 7.00016C0.583344 7.321 0.845844 7.5835 1.16668 7.5835H1.78501C2.05334 10.016 3.98418 11.9468 6.41668 12.2152V12.8335C6.41668 13.1543 6.67918 13.4168 7.00001 13.4168C7.32084 13.4168 7.58334 13.1543 7.58334 12.8335V12.2152C10.0158 11.9468 11.9467 10.016 12.215 7.5835H12.8333C13.1542 7.5835 13.4167 7.321 13.4167 7.00016C13.4167 6.67933 13.1542 6.41683 12.8333 6.41683H12.215ZM7.00001 11.0835C4.74251 11.0835 2.91668 9.25766 2.91668 7.00016C2.91668 4.74266 4.74251 2.91683 7.00001 2.91683C9.25751 2.91683 11.0833 4.74266 11.0833 7.00016C11.0833 9.25766 9.25751 11.0835 7.00001 11.0835Z" fill="#1F8268"></path></g><defs><clipPath id="clip0_1972_14258"><rect width="14" height="14" fill="white"></rect></clipPath></defs></svg>
                      <span className="link">Pick current location</span>
                    </span>
                  </lable>
                  <div className="width-100 selector-cont">
                  <div className="width-100 custom-select-btn-cont">
                      <div onClick={() => toggleDropdown(5)} className="custom-select-btn">
                          <label className="placeholder">Please select your city</label>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1611 8.35535L11.9946 13.0691L7.82819 8.35535C7.4094 7.88155 6.73289 7.88155 6.31409 8.35535C5.8953 8.82916 5.8953 9.59453 6.31409 10.0683L11.243 15.6446C11.6617 16.1185 12.3383 16.1185 12.757 15.6446L17.6859 10.0683C18.1047 9.59453 18.1047 8.82916 17.6859 8.35535C17.2671 7.8937 16.5799 7.88155 16.1611 8.35535Z" fill="#1F8268"></path></svg>
                      </div>
                      {activeDropdown === 5 && (
                        <div className="job-city-content border-grey">
                          <div className="job-city-item">
                            <div className="city">Ahemdabad Region, GJ</div>
                            <div className="city">Ajmer Region, RJ</div>
                            <div className="city">Aligarh Region, UP</div>
                            <div className="city">Amritsar Region, UP</div>
                            <div className="city">Asansol Region, WB</div>
                            <div className="city">Aurangabad, MH Region, MH</div>
                            <div className="city">Bareilly Region, UP</div>
                            <div className="city">Belagavi Region, CG</div>
                          </div>
                        </div>
                      )}
                    </div>
                    </div>
                </div>

                <div className="width-100 hometown-section">
                  <form className="entry-form">
                    <div className="form-group">
                        <label className="modal-heading" htmlFor="Hometown">Hometown</label>
                        <input type="text" id="homwtown" placeholder="Select your hometown here" />
                    </div>
                  </form>
                </div>

              </div>
            </div>

            <div className="save-section">
              <button type="submit" disabled className="greenBtn heading">Save</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Modal10;
