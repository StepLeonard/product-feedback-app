// we import useEffect so code can run when the page loads
// we import useState so we can store data
import { useEffect, useState } from "react";

// we import useNavigate so we can move to another page
import { useNavigate } from "react-router-dom";

// we import the images and icons
import iconSuggestions from "../../assets/suggestions/icon-suggestions.svg";
import iconComments from "../../assets/icons/icon-comments.svg";
import iconPlus from "../../assets/icons/icon-plus.svg";
import illustrationEmpty from "../../assets/suggestions/illustration-empty.svg";

// this is the home page
function Home() {
  // this stores all the suggestions
  const [list, setList] = useState([]);

  // this stores which category is picked
  const [pick, setPick] = useState("All");

  // this helps us go to another page
  const go = useNavigate();

  // this runs when the page first opens
  useEffect(() => {
    getAll();
  }, []);

  // this gets all suggestions
  const getAll = async () => {
    try {
      const res = await fetch("/api/get-all-suggestions");
      const data = await res.json();
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // this gets suggestions by category
  const getByType = async (type) => {
    try {
      if (type === "All") {
        getAll();
        return;
      }

      const res = await fetch(`/api/get-suggestions-by-category/${type}`);
      const data = await res.json();
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // this runs when a filter button is clicked
  const clickType = (type) => {
    setPick(type);
    getByType(type);
  };

  return (
    <div className="page">
      {/* this is the top color area */}
      <div className="top-bg"></div>

      {/* this is the main layout */}
      <div className="wrap">
        {/* this is the left side */}
        <div className="left-side">
          {/* this is the title card */}
          <div className="title-box">
            <div>
              <h1>My Company</h1>
              <p>Feedback Board</p>
            </div>
          </div>

          {/* this is the filter card */}
          <div className="filter-box">
            <button
              className={pick === "All" ? "type-btn on" : "type-btn"}
              onClick={() => clickType("All")}
            >
              All
            </button>

            <button
              className={pick === "UI" ? "type-btn on" : "type-btn"}
              onClick={() => clickType("UI")}
            >
              UI
            </button>

            <button
              className={pick === "UX" ? "type-btn on" : "type-btn"}
              onClick={() => clickType("UX")}
            >
              UX
            </button>

            <button
              className={pick === "Enhancement" ? "type-btn on" : "type-btn"}
              onClick={() => clickType("Enhancement")}
            >
              Enhancement
            </button>

            <button
              className={pick === "Feature" ? "type-btn on" : "type-btn"}
              onClick={() => clickType("Feature")}
            >
              Feature
            </button>

            <button
              className={pick === "Bug" ? "type-btn on" : "type-btn"}
              onClick={() => clickType("Bug")}
            >
              Bug
            </button>
          </div>
        </div>

        {/* this is the right side */}
        <div className="right-side">
          {/* this is the top bar */}
          <div className="bar">
            <div className="bar-left">
              <img src={iconSuggestions} alt="suggestions icon" />
              <h2>{list.length} Suggestions</h2>
            </div>

            <button className="add-btn" onClick={() => go("/add-feedback")}>
              <img src={iconPlus} alt="plus icon" />
              <span>Add Feedback</span>
            </button>
          </div>

          {/* this shows empty state if there are no suggestions */}
          {list.length === 0 ? (
            <div className="empty-box">
              <img src={illustrationEmpty} alt="empty" className="empty-pic" />
              <h3>There is no feedback yet.</h3>
              <p>
                Got a suggestion? Found a bug that needs to be fixed? Let us
                know.
              </p>

              <button className="add-btn" onClick={() => go("/add-feedback")}>
                <img src={iconPlus} alt="plus icon" />
                <span>Add Feedback</span>
              </button>
            </div>
          ) : (
            <div className="card-list">
  {list.map((oneItem) => (
    <div key={oneItem.suggestion_id} className="card">
      <div className="up-box">
        <span>▲</span>
        <span>0</span>
      </div>

      <div className="card-middle">
        <h3>{oneItem.title}</h3>
        <p>{oneItem.description}</p>
        <span className="tag">{oneItem.category}</span>
      </div>

      <div className="comment-box">
        <img src={iconComments} alt="comments icon" />
        <span>0</span>
      </div>
    </div>
  ))}
</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;