import React, { useState } from "react";
import { addPost } from "../../../services/posts.service";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('new post');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddPost = async () => {
    const newData = {
      title: title,
      image: image,
      content: content,
    };
onClose();
    try {
      await addPost(newData)
      
      navigate('/feed')
    } catch (error) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && <div className="modal-backdrop show z-3"></div>}
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
                Create a Post
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
                  <label className="form-label" htmlFor="img-inp">
                    add new photo here
                  </label>
                  <input id="img-inp" className="form-control" type="file" 
                  onChange={handleImageChange}/>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control "
                    name="textMessage"
                    placeholder="What would you like to say?"
                    id="textMessage"
                    rows="50"
                    onChange={(e) => setContent(e.target.value)} 
                  />
                  <label className="form-label" htmlFor="textMessage">
                    add description
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn text-light"
                style={{ backgroundColor: "#6936F5" }}
                onClick={handleAddPost}
              >
                Create
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

export default CreatePost;
