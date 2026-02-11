import './Modal.css';

function Modal11({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit job preferences</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
              <div className="flex modal-content-inside">

                {/* Preferred employment type */}
                <div className="width-100 employment-section">
                  <lable className="modal-heading">Preferred employment type</lable>
                  <div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Full Time</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" checked />
                          <span className="checkmark"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Part Time</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" checked />
                          <span className="checkmark"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preferred wrokspace */}
                <div className="width-100 workplaces-section">
                  <lable className="modal-heading">Preferred workplaces</lable>
                  <div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Field Job</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" />
                          <span className="checkmark"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Work from Office</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" checked />
                          <span className="checkmark"></span>
                        </label>
                      </span>
                    </div>
                  </div><div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Work from Home</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" checked />
                          <span className="checkmark"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prefered Shift */}
                <div className="width-100 shift-section">
                  <lable className="modal-heading">Preferred shift</lable>
                  <div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Day Shift</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" checked />
                          <span className="checkmark"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="border-box">
                    <div className="flex-acjc choice-cont">
                      <span className="choice">Night Shift</span>
                      <span className="check">
                        <label className="checkBox-cont flex-acjc width-100">
                          <input className="checkBox" type="checkbox" name="hindi" value="Hindi" />
                          <span className="checkmark"></span>
                        </label>
                      </span>
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

export default Modal11;
