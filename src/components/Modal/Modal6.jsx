import './Modal.css';

function Modal6({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit skills</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="cursor-pointer"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
                <div className="flex modal-content-inside">
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">English</span>
                        <span className="check">
                          <label className="checkBox-cont flex-acjc width-100">
                            <input className="checkBox" type="checkbox" name="english" value="English" checked />
                            <span className="checkmark"></span>
                          </label>
                        </span>
                      </div>

                      <div className="choice-lvl">
                        
                      </div>

                    </div>
                    <div className="border-box">
                      <div className="flex-acjc choice-cont">
                        <span className="choice">Hindi</span>
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
                        <span className="choice">Telugu</span>
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
                        <span className="choice">Bengali</span>
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
                        <span className="choice">Kannada</span>
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
                        <span className="choice">Marathi</span>
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
                        <span className="choice">Tamil</span>
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
                        <span className="choice">Oriya</span>
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
                        <span className="choice">Gujrati</span>
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
                        <span className="choice">Malayalam</span>
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
                        <span className="choice">Urdu</span>
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
                        <span className="choice">Punjabi</span>
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
                        <span className="choice">Assamese</span>
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
                        <span className="choice">Nepali</span>
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
                        <span className="choice">Kashmiri</span>
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
                        <span className="choice">Maithili</span>
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
                        <span className="choice">Rajasthani</span>
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
                        <span className="choice">Haryanvi</span>
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
                        <span className="choice">French</span>
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
                        <span className="choice">German</span>
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
                        <span className="choice">Spanish</span>
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
                        <span className="choice">Japanese</span>
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
                        <span className="choice">Mandrin</span>
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

            <div className="save-section">
              <button type="submit" disabled className="greenBtn heading">Save</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Modal6;
