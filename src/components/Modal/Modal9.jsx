import './Modal.css';

function Modal9({onClose}) {

  return (
    <>
      <main>
        <div className="overlay" onClick={onClose}>
          <div className="modal-content font-600" onClick={(e) => e.stopPropagation()}>

            <div className="heading-section font-600">
              <h1 className="heading-modal">Edit preferred title/role</h1>
              <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#5E6C84" d="M13.37.634a1.007 1.007 0 0 0-1.426 0L6.999 5.569 2.054.624A1.007 1.007 0 1 0 .628 2.05l4.945 4.945L.628 11.94a1.007 1.007 0 1 0 1.426 1.426L6.999 8.42l4.945 4.945a1.007 1.007 0 1 0 1.426-1.426L8.425 6.995 13.37 2.05a1.014 1.014 0 0 0 0-1.416Z"></path></svg>
            </div>
            
            <div className="content-section pb0">
                <div className="flex modal-content-inside">
                    <div className="skills-section">
                        <label className="flex skills">What job title/role are you looking for?</label>
                        <p className="modal-sub-heading">You can select up to 5 title/role</p>
                        <input type="text" id="skills" placeholder="Search by job title/role"/>
                        <div className="skills-container">
                            <span className="skill-tag">
                                <span className="skill-name">Software Development </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Website Development </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Software Backend Development </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Frontend Development </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">DevOps </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
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

export default Modal9;
