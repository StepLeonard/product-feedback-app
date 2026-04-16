// we import express so we can make a server
import express from "express";

// we import our database connection
import pool from "./config.js";

// we create the app
const app = express();

// this is the port for our server
const PORT = 3000;

// this lets us read JSON from Postman and the frontend
app.use(express.json());


// =========================
// HELPER FUNCTIONS
// =========================

// this gets all suggestions from the database
const getAllSuggestions = async () => {
  const result = await pool.query(
    "SELECT * FROM suggestions ORDER BY suggestion_id;"
  );

  return result.rows;
};

// this gets suggestions by category
const getSuggestionsByCategory = async (category) => {
  const result = await pool.query(
    "SELECT * FROM suggestions WHERE category = $1 ORDER BY suggestion_id;",
    [category]
  );

  return result.rows;
};

// this adds one new suggestion into the database
const addOneSuggestion = async (title, category, description) => {
  const result = await pool.query(
    "INSERT INTO suggestions (title, category, description) VALUES ($1, $2, $3) RETURNING *;",
    [title, category, description]
  );

  return result.rows[0];
};


// =========================
// API ENDPOINTS
// =========================

// this endpoint gets all suggestions
app.get("/get-all-suggestions", async (req, res) => {
  try {
    const suggestions = await getAllSuggestions();
    res.json(suggestions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

// this endpoint gets suggestions by category
app.get("/get-suggestions-by-category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const suggestions = await getSuggestionsByCategory(category);
    res.json(suggestions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

// this endpoint adds one new suggestion
app.post("/add-one-suggestion", async (req, res) => {
  try {
    const { title, category, description } = req.body;

    // this makes sure all fields are filled in
    if (!title || !category || !description) {
      return res.status(400).send("All fields are required");
    }

    const newSuggestion = await addOneSuggestion(
      title,
      category,
      description
    );

    res.json(newSuggestion);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});



// START SERVER


// this starts the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});