// this component shows one feedback card
function SuggestionCard({ feedback }) {
  return (
    <div className="feedbackCard">
      <h3>{feedback.title}</h3>
      <p>{feedback.description}</p>
      <span className="categoryTag">{feedback.category}</span>
    </div>
  );
}

// we export the component
export default SuggestionCard;