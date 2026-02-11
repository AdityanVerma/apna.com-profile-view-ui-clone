import './Modal.css';

function Modal13({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit basic details</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section">
              <div className="flex modal-content-inside modal13">

                <form className="entry-form">
                  <div className="form-group">
                      <label className="modal-heading" htmlFor="name">Name</label>
                      <input type="text" id="name" placeholder="Name" />
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="gender">Gender</label>
                      <select className="form-dropdown" id="gender">
                          <option value="male" selected>Male</option>
                          <option value="female">Female</option>
                      </select>
                  </div>
                  
                  <div className="form-group">
                      <label className="modal-heading" htmlFor="dob">Date of birth</label>
                      <input type="date" id="dob" />
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="mobile">Mobile number</label>
                      <input type="tel" id="mobile" placeholder="e.g. +91 0123456789" />
                  </div>

                  <div className="form-group">
                      <label className="modal-heading" htmlFor="email">Email Id</label>
                      <input type="email" id="email" placeholder="e.g. amansingh123@gmail.com" />
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

export default Modal13;
