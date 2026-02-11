import './Modal.css';

function Modal5({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit documents and assets</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
              <div className="flex modal-content-inside">
                {/* UPLOADS-SECTION */}
                <div className="width-100 flex flex-col uploads-section">
                  <lable className="modal-heading">Uploads</lable>
                  <div className="flex-acjc border-grey">
                    <span className="para placeholder-2 uploads-txt">Driving License</span>
                    <button className="flex-acjc upload-btn">
                      <svg width="14" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7142 11.3749H10.9523V16.1368C10.9523 16.6606 10.5237 17.0892 9.99992 17.0892C9.47611 17.0892 9.04754 16.6606 9.04754 16.1368V11.3749H4.28563C3.76182 11.3749 3.33325 10.9463 3.33325 10.4225C3.33325 9.89872 3.76182 9.47014 4.28563 9.47014H9.04754V4.70824C9.04754 4.18443 9.47611 3.75586 9.99992 3.75586C10.5237 3.75586 10.9523 4.18443 10.9523 4.70824V9.47014H15.7142C16.238 9.47014 16.6666 9.89872 16.6666 10.4225C16.6666 10.9463 16.238 11.3749 15.7142 11.3749Z" fill="#1F8268"></path></svg>
                      <span>Upload</span>
                    </button>
                  </div>
                  <div className="flex-acjc border-grey">
                    <span className="para placeholder-2 uploads-txt">Bike RC</span>
                    <button className="flex-acjc upload-btn">
                      <svg width="14" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7142 11.3749H10.9523V16.1368C10.9523 16.6606 10.5237 17.0892 9.99992 17.0892C9.47611 17.0892 9.04754 16.6606 9.04754 16.1368V11.3749H4.28563C3.76182 11.3749 3.33325 10.9463 3.33325 10.4225C3.33325 9.89872 3.76182 9.47014 4.28563 9.47014H9.04754V4.70824C9.04754 4.18443 9.47611 3.75586 9.99992 3.75586C10.5237 3.75586 10.9523 4.18443 10.9523 4.70824V9.47014H15.7142C16.238 9.47014 16.6666 9.89872 16.6666 10.4225C16.6666 10.9463 16.238 11.3749 15.7142 11.3749Z" fill="#1F8268"></path></svg>
                      <span>Upload</span>
                    </button>
                  </div>
                  <div className="flex-acjc border-grey">
                    <span className="para placeholder-2 uploads-txt">Pan Card</span>
                    <button className="flex-acjc upload-btn">
                      <svg width="14" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7142 11.3749H10.9523V16.1368C10.9523 16.6606 10.5237 17.0892 9.99992 17.0892C9.47611 17.0892 9.04754 16.6606 9.04754 16.1368V11.3749H4.28563C3.76182 11.3749 3.33325 10.9463 3.33325 10.4225C3.33325 9.89872 3.76182 9.47014 4.28563 9.47014H9.04754V4.70824C9.04754 4.18443 9.47611 3.75586 9.99992 3.75586C10.5237 3.75586 10.9523 4.18443 10.9523 4.70824V9.47014H15.7142C16.238 9.47014 16.6666 9.89872 16.6666 10.4225C16.6666 10.9463 16.238 11.3749 15.7142 11.3749Z" fill="#1F8268"></path></svg>
                      <span>Upload</span>
                    </button>
                  </div>
                </div>

                {/* ASSETS-SECTION */}
                <div className="width-100 assets-section">
                  <lable className="modal-heading">Assests</lable>
                  <div className="flex checkbox-50">
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Bike</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Bike" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Car</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Car" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Cycle</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="cycle" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Wifi</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Wifi" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Laptop</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Laptop" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Auto</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Auto" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DOCUMENTS-SECTION */}
                <div className="width-100 documents-section">
                  <lable className="modal-heading">Documents</lable>
                  <div className="flex checkbox-50">
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Aadhar Card</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Aadhar Card" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Driving License</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Driving License" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Pan Card</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Pan Card" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Bank Passbook</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Bank Passbook" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Bike RC</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Bike RC" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Car RC</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Car RC" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Passport</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" value="Passport" />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
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

export default Modal5;
