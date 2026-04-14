// we import useEffect so code can run when the page loads
// we import useState so we can store data
import { useEffect, useState } from "react";

// we import useNavigate so we can move to another page
import { useNavigate } from "react-router-dom";

// we import the images and icons
import iconSuggestions from "../../assets/suggestions/icon-suggestions.svg";
import iconPlus from "../../assets/icons/icon-plus.svg";
import illustrationEmpty from "../../assets/suggestions/illustration-empty.svg";

// this is the home page
function Home() {
  // =========================
  // STATE
  // =========================

  // this stores all the feedback from the database
  const [feedbackList, setFeedbackList] = useState([]);

  // this stores which category is picked
  const [selectedCategory, setSelectedCategory] = useState("All");

  // this helps us go to another page
  const goToPage = useNavigate();

  // =========================
  // HELPER FUNCTIONS
  // =========================

  // this runs one time when the page first loads
  useEffect(() => {
    getAllFeedback();
  }, []);

  // this gets all feedback from the backend
  const getAllFeedback = async () => {
    try {
      const res = await fetch("/api/get-all-suggestions");
      const data = await res.json();
      setFeedbackList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // this gets feedback based on category
  const getFeedbackByCategory = async (category) => {
    try {
      if (category === "All") {
        getAllFeedback();
        return;
      }

      const res = await fetch(`/api/get-suggestions-by-category/${category}`);
      const data = await res.json();
      setFeedbackList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // this runs when a filter button is clicked
  const clickCategory = (category) => {
    setSelectedCategory(category);
    getFeedbackByCategory(category);
  };

  // =========================
  // API ENDPOINTS USED
  // =========================
  // GET /api/get-all-suggestions
  // GET /api/get-suggestions-by-category/:category

  // =========================
  // RETURN
  // =========================

  return (
    <div className="page">
      {/* this is the top color background */}
      <div className="topBackground"></div>

      {/* this is the main layout */}
      <div className="mainLayout">
        {/* this is the left side */}
        <div className="leftPanel">
          {/* this is the title box */}
          <div className="titleBox">
            <div>
              <h1>My Company</h1>
              <p>Feedback Board</p>
            </div>
          </div>

          {/* this is the filter button box */}
          <div className="filterBox">
            <button
              className={
                selectedCategory === "All"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => clickCategory("All")}
            >
              All
            </button>

            <button
              className={
                selectedCategory === "UI"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => clickCategory("UI")}
            >
              UI
            </button>

            <button
              className={
                selectedCategory === "UX"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => clickCategory("UX")}
            >
              UX
            </button>

            <button
              className={
                selectedCategory === "Enhancement"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => clickCategory("Enhancement")}
            >
              Enhancement
            </button>

            <button
              className={
                selectedCategory === "Feature"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => clickCategory("Feature")}
            >
              Feature
            </button>

            <button
              className={
                selectedCategory === "Bug"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => clickCategory("Bug")}
            >
              Bug
            </button>
          </div>
        </div>

        {/* this is the right side */}
        <div className="rightPanel">
          {/* this is the top bar */}
          <div className="topBar">
            <div className="topBarLeft">
              <img src={iconSuggestions} alt="suggestions icon" />
              <h2>{feedbackList.length} Suggestions</h2>
            </div>

            {/* this button goes to the add feedback page */}
            <button
              className="addButton"
              onClick={() => goToPage("/add-feedback")}
            >
              <img src={iconPlus} alt="plus icon" />
              <span>Add Feedback</span>
            </button>
          </div>

          {/* if there is no feedback, show empty state */}
          {feedbackList.length === 0 ? (
            <div className="emptyState">
              <img
                src={illustrationEmpty}
                alt="empty"
                className="emptyImage"
              />
              <h3>There is no feedback yet.</h3>
              <p>
                Got a suggestion? Found a bug that needs to be fixed? Let us
                know.
              </p>

              <button
                className="addButton"
                onClick={() => goToPage("/add-feedback")}
              >
                <img src={iconPlus} alt="plus icon" />
                <span>Add Feedback</span>
              </button>
            </div>
          ) : (
            /* if we do have feedback, show the list */
            <div className="feedbackListBox">
              {feedbackList.map((feedback) => (
                <div key={feedback.suggestion_id} className="feedbackCard">
                  <h3>{feedback.title}</h3>
                  <p>{feedback.description}</p>
                  <span className="categoryTag">{feedback.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// we export the page
export default Home;