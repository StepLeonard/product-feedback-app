// we import useState so we can store form data
import { useState } from "react";

// we import useNavigate so we can move between pages
import { useNavigate } from "react-router-dom";

// we import the icons for this page
import iconArrowLeft from "../../assets/icons/icon-arrow-left.svg";
import iconNewFeedback from "../../assets/icons/icon-new-feedback.svg";

// this is the add feedback page
function AddFeedback() {
  // =========================
  // STATE
  // =========================

  // this stores everything the user types in the form
  const [feedbackForm, setFeedbackForm] = useState({
    title: "",
    category: "Feature",
    description: "",
  });

  // this lets us move between pages
  const goToPage = useNavigate();

  // =========================
  // HELPER FUNCTIONS
  // =========================

  // this updates the form when the user types
  const updateForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFeedbackForm({
      ...feedbackForm,
      [name]: value,
    });
  };

  // this runs when the form is submitted
  const submitForm = async (event) => {
    event.preventDefault();

    // this makes sure the detail box is not empty
    if (!feedbackForm.description.trim()) {
      alert("Feedback detail cannot be empty.");
      return;
    }

    try {
      const res = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackForm),
      });

      if (!res.ok) {
        throw new Error("Could not add feedback");
      }

      // after submit, go back home
      goToPage("/");
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // API ENDPOINTS USED
  // =========================
  // POST /api/add-one-suggestion

  // =========================
  // RETURN
  // =========================

  return (
    <div className="addPage">
      <div className="formContainer">
        {/* this is the go back button */}
        <button className="backButton" onClick={() => goToPage(-1)}>
          <img src={iconArrowLeft} alt="back arrow" />
          <span>Go Back</span>
        </button>

        {/* this is the form box */}
        <div className="formBox">
          {/* this is the icon at the top */}
          <img
            src={iconNewFeedback}
            alt="new feedback icon"
            className="formIcon"
          />

          {/* this is the title */}
          <h1>Create New Feedback</h1>

          {/* this is the form */}
          <form onSubmit={submitForm} className="formLayout">
            {/* this is the title field */}
            <label htmlFor="title">Feedback Title</label>
            <p className="smallText">Add a short, descriptive headline</p>
            <input
              id="title"
              name="title"
              type="text"
              value={feedbackForm.title}
              onChange={updateForm}
              required
            />

            {/* this is the category field */}
            <label htmlFor="category">Category</label>
            <p className="smallText">Choose a category for your feedback</p>
            <select
              id="category"
              name="category"
              value={feedbackForm.category}
              onChange={updateForm}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>

            {/* this is the detail field */}
            <label htmlFor="description">Feedback Detail</label>
            <p className="smallText">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              id="description"
              name="description"
              value={feedbackForm.description}
              onChange={updateForm}
              rows="5"
              required
            ></textarea>

            {/* this is the button row */}
            <div className="buttonRow">
              <button
                type="button"
                className="cancelButton"
                onClick={() => goToPage("/")}
              >
                Cancel
              </button>

              <button type="submit" className="submitButton">
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// we export the page
export default AddFeedback;