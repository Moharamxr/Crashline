import React from "react";

const EditProfile = ({ isOpen, onClose }) => {
    
  return (
    <>
      {isOpen && (
        <div className="modal-backdrop show z-3"></div>
      )}
      <div
        key="createPostModal"
        className={`modal fade${isOpen ? " show d-block" : ""}`}
        tabIndex="-1"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit your profile info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <div className="form-group">
                  <label className="form-label" htmlFor="img-inp">Add new profile photo</label>
                  <input id="img-inp" className="form-control" type="file" />
                </div>

                <div className="form-floating">
                  
                  <input
                    className="form-control mt-1"
                    type="text"
                    name="textMessage"
                    placeholder="What would you like to say?"
                    id="textMessage"
                    rows="50"
                  /><label className="form-label" htmlFor="textMessage">update firstname</label>
                </div>
                <div className="form-floating">
                  
                  <input
                    className="form-control mt-1"
                    name="textMessage"
                    type="text"
                    placeholder="What would you like to say?"
                    id="textMessage"
                    rows="50"
                  /><label className="form-label" htmlFor="textMessage">update lastname</label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn text-light"
              style={{ backgroundColor: "#6936F5" }}>
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;