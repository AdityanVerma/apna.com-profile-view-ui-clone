import './Modal.css';

function Modal8({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <div className="heading-bunch">
                <h1 className="heading-modal">Upload resume</h1>
                <h2 className="sub-heading">Only visible to HRs</h2>
              </div>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
              <div className="flex modal-content-inside">
                <div className="resume-cont">
                  <div className="resume-upload">
                    <svg className="upload-img" width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.546875" width="48" height="48" rx="24" fill="#EAF8F4"></rect><g clipPath="url(#clip0_1587_389044)"><path d="M22 28.5466H26C26.55 28.5466 27 28.0966 27 27.5466V22.5466H28.59C29.48 22.5466 29.93 21.4666 29.3 20.8366L24.71 16.2466C24.32 15.8566 23.69 15.8566 23.3 16.2466L18.71 20.8366C18.08 21.4666 18.52 22.5466 19.41 22.5466H21V27.5466C21 28.0966 21.45 28.5466 22 28.5466ZM18 30.5466H30C30.55 30.5466 31 30.9966 31 31.5466C31 32.0966 30.55 32.5466 30 32.5466H18C17.45 32.5466 17 32.0966 17 31.5466C17 30.9966 17.45 30.5466 18 30.5466Z" fill="#1F8268"></path></g><defs><clipPath id="clip0_1587_389044"><rect width="24" height="24" fill="white" transform="translate(12 12.5469)"></rect></clipPath></defs></svg>
                    <div className="upload-txt">
                      Drag &amp; drop or 
                      <span className="link">&nbsp;select resume&nbsp;</span>
                      to upload
                    </div>
                  </div>
                  <div className="guidtxt para">Maximum file size 5MB - acceptable file types pdf, doc, and docx</div>
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

export default Modal8;
