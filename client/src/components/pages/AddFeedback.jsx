// we import useState so we can store form data
import { useState } from "react";

// we import useNavigate so we can go back and go home
import { useNavigate } from "react-router-dom";

// we import the icons for this page
import iconArrowLeft from "../../assets/icons/icon-arrow-left.svg";
import iconNewFeedback from "../../assets/icons/icon-new-feedback.svg";

// this is the add feedback page
function AddFeedback() {
  // this helps us move between pages
  const go = useNavigate();

  // this stores the form data
  const [kidForm, setKidForm] = useState({
    title: "",
    category: "Feature",
    description: "",
  });

  // this changes the form when the user types
  const changeForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setKidForm({
      ...kidForm,
      [name]: value,
    });
  };

  // this sends the form to the backend
  const sendForm = async (event) => {
    event.preventDefault();

    // this makes sure feedback detail is not empty
    if (!kidForm.description.trim()) {
      alert("Feedback detail cannot be empty.");
      return;
    }

    try {
      const res = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(kidForm),
      });

      if (!res.ok) {
        throw new Error("Could not add feedback");
      }

      go("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-page">
      <div className="add-wrap">
        <button className="back-btn" onClick={() => go(-1)}>
          <img src={iconArrowLeft} alt="back arrow" />
          <span>Go Back</span>
        </button>

        <div className="form-box">
          <img
            src={iconNewFeedback}
            alt="new feedback icon"
            className="form-top-icon"
          />

          <h1>Create New Feedback</h1>

          <form onSubmit={sendForm} className="kid-form">
            <label htmlFor="title">Feedback Title</label>
            <p className="small-text">Add a short, descriptive headline</p>
            <input
              id="title"
              name="title"
              type="text"
              value={kidForm.title}
              onChange={changeForm}
              required
            />

            <label htmlFor="category">Category</label>
            <p className="small-text">Choose a category for your feedback</p>
            <select
              id="category"
              name="category"
              value={kidForm.category}
              onChange={changeForm}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>

            <label htmlFor="description">Feedback Detail</label>
            <p className="small-text">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              id="description"
              name="description"
              value={kidForm.description}
              onChange={changeForm}
              rows="5"
              required
            ></textarea>

            <div className="form-btns">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => go("/")}
              >
                Cancel
              </button>

              <button type="submit" className="submit-btn">
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFeedback;