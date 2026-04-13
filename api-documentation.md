# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource         | Method | Endpoint                      | Description                              |
|------------------|--------|-------------------------------|------------------------------------------|
| `suggestions`    | GET    | /get-all-suggestions          |  Retrieves all product feedback suggestions             |
| `suggestions`    | GET    | /get-suggestions-by-category  | Retrieves suggestions filtered by category.              |
| `suggestions`    | POST   | /add-one-suggestion           | Adds a new feedback suggestion to the database.              |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all feedback suggestions from the database.

**Response:**

```
[
  {
    "suggestion_id": 1,
    "title": "Add dark mode",
    "category": "UI",
    "description": "It would be nice if users could switch to dark mode."
  },
  {
    "suggestion_id": 2,
    "title": "Allow sorting by newest",
    "category": "UX",
    "description": "Users should be able to sort feedback by newest first."
  },
  {
    "suggestion_id": 3,
    "title": "Add mobile improvements",
    "category": "Enhancement",
    "description": "The app should look better on mobile devices."
  }

```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Retrieves all feedback suggestions that match a specific category.

**Response:**

```
[
  {
    "suggestion_id": 1,
    "title": "Add dark mode",
    "category": "UI",
    "description": "It would be nice if users could switch to dark mode."
  }
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a new feedback suggestion to the database.

**Request Body:**

```
{
  "title": "Add search feature",
  "category": "Feature",
  "description": "Users should be able to search through suggestions."
}
```

**Response:**

```
Success! Suggestion has been added.
```
---

