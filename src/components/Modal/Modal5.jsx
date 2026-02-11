import './Modal.css';

function Modal5({onClose}) {

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
                    <div className="skills-section">
                        <label htmlFor="flex skills">What skills do you have?</label>
                        <p className="modal-sub-heading">Get noticed for the right job by adding your skills</p>
                        <input type="text" id="skills" placeholder="Search Skills"/>
                        <div className="skills-container">
                            <span className="skill-tag">
                                <span className="skill-name">Computer Hardware </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Web development </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Programming language </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Python </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                            <span className="skill-tag">
                                <span className="skill-name">Java </span>
                                <svg className="remove-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" size="12"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" fill="#fff"></path></svg>
                            </span>
                        </div>
                        <div className="view-more border-grey">
                            <svg className="plus-icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7142 11.3749H10.9523V16.1368C10.9523 16.6606 10.5237 17.0892 9.99992 17.0892C9.47611 17.0892 9.04754 16.6606 9.04754 16.1368V11.3749H4.28563C3.76182 11.3749 3.33325 10.9463 3.33325 10.4225C3.33325 9.89872 3.76182 9.47014 4.28563 9.47014H9.04754V4.70824C9.04754 4.18443 9.47611 3.75586 9.99992 3.75586C10.5237 3.75586 10.9523 4.18443 10.9523 4.70824V9.47014H15.7142C16.238 9.47014 16.6666 9.89872 16.6666 10.4225C16.6666 10.9463 16.238 11.3749 15.7142 11.3749Z" fill="#8C8594"></path></svg>
                            <span className="view-more-number">3</span>
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
