import './Modal.css';

function Modal2({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Add education</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="cursor-pointer"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
              <div className="flex modal-content-inside">

                <h2 className="modal-heading">Your current or highest completed level of education</h2>
                <form className="selection">
                  <input type="radio" id="diploma" name="highest-edu" value="Diploma" />
                  <label htmlFor="diploma">Diploma</label>

                  <input type="radio" id="iti" name="highest-edu" value="ITI" />
                  <label htmlFor="iti">ITI</label>
                  
                  <input type="radio" id="grad" name="highest-edu" value="Graduate" checked="checked" />
                  <label htmlFor="grad">Graduate</label>

                  <input type="radio" id="post-grad" name="highest-edu" value="Post Graduate" />
                  <label htmlFor="post-grad">Post Graduate</label>
                </form>

                <form className="entry-form">
                  <div className="form-group">
                      <label className="modal-heading" htmlFor="college-name">College name</label>
                      <input type="text" id="college-name" placeholder="e.g. St. Stephens" />
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="degree">Degree</label>
                      <select id="degree">
                          <option value="" disabled selected>Select an option</option>
                          {/* <!-- Add degree options here --> */}
                      </select>
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="specialisation">Specialisation</label>
                      <select id="specialisation">
                          <option value="" disabled selected>Select an option</option>
                          {/* <!-- Add specialisation options here --> */}
                      </select>
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="start-date">Start date</label>
                      <div className="date-inputs">
                          <select id="start-month">
                              <option value="" disabled selected>Month</option>
                              {/* <!-- Add month options here --> */}
                          </select>
                          <select id="start-year">
                              <option value="" disabled selected>Year</option>
                              {/* <!-- Add year options here --> */}
                          </select>
                      </div>
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="end-date">End date (or expected)</label>
                      <div className="date-inputs">
                          <select id="end-month">
                              <option value="" disabled selected>Month</option>
                              {/* <!-- Add month options here --> */}
                          </select>
                          <select id="end-year">
                              <option value="" disabled selected>Year</option>
                              {/* <!-- Add year options here --> */}
                          </select>
                      </div>
                  </div>
                </form>

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

export default Modal2;
