# Product Feedback App

## 👋 Welcome!

Imagine you've been hired as a freelance full-stack developer. You've just been hired by a startup called _My Company_. 

Your task: build a Product Feedback app where users can view and submit suggestions about the company's new product. 

## 🖼️ Live Demo

[View the live project demo here](https://product-feedback-app-demo.netlify.app/) ✨

![image](https://github.com/user-attachments/assets/5fabe48e-fb2b-4337-94cc-515e64a0bf66)


## 🎯 Project Requirements

**Your Goal:** Build a full-stack product feedback app where users can view, filter, and submit suggestions on how the company can improve its product.

You will build the 3 parts of a full-stack application:
- **Database** — PostgreSQL, deployed to Neon
- **Server/API** — Node and Express, deployed to Render
- **Frontend** — React, deployed to Netlify

The frontend should be responsive and include 2 pages:

### 🏠 Home Page
- View all suggestions 
- Filter suggestions by category
- Display a "There is no feedback" screen when there are no suggestions to show

### ➕ Add Feedback Page
- Submit a new suggestion via a form
- Display form validation errors 

## The Tech Stack

These are all the technologies you should use to build your full-stack application: 

| Component | Language | Framework | Deployment | Dev Tools |
|-----------|------------|----------------|------------|-------|
| Frontend  | HTML, CSS, JavaScript | React         | Netlify   |      |
| Server/API | Node.js     | Express       | Render    | Postman for API testing |
| Database  | PostgreSQL |               | Neon    |   |



## 🔗 Resources

- ** 🎨 [Figma Designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1)** 
- ** 📘 [Documentation Guides](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.0#heading=h.ykdbmvmlp0ag)** 

---

## 🚀 Roadmap: Step-by-step guide to building this project

---

### ⚙️ Review Instructions & Links
1. Read through this README from top to bottom
2. Review [Figma Designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1)
3. Explore the Demo link
4. Make sure you understand the flow of building this project: Database → API → Frontend → Deployment.

---

### ⚙️ Copy this Github repo template and clone to your local machine
1. Make a copy of this repo into your Github account via the "Use this template" button on the upper right corner of this page. 
2. Clone your repo into your `dev` folder. 

---

### 🎯 Milestone 1: Create SQL Database Schema

1. Review the [Figma designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1) and plan what data your app needs
2. Create a new DB Fiddle via [db-fiddle.com](https://www.db-fiddle.com).
    - By default, DB Fiddle uses MySQL, but in this class we are using PostgreSQL.
    - To switch, click the menu in the upper-left corner and select the latest version of PostgreSQL (18)

      ❌ Incorrect setup (MySQL selected):
      
        <img width="405" alt="Incorrect DB Fiddle setup (MySQL selected)" src="https://github.com/user-attachments/assets/9218e723-246f-402e-a475-38b4c77bfb95" />

    
      ✅ Correct setup (PostgreSQL selected):
      
        <img width="438" alt="Correct DB Fiddle setup (PostgreSQL selected)" src="https://github.com/user-attachments/assets/2b6a07ef-2d8c-4afd-8bca-7867d645673c" />

3. Write PostgreSQL code to create your `suggestions` table
4. Insert at least 3 rows of sample data into the table
5. Write the SQL queries for your API to:
     - Get all suggestions
     - Get suggestions by category
     - Add a suggestion
6. Bookmark the link to your DB Fiddle so you can find it later.
7. Submit the link to your DB Fiddle on Canvas.

✅ By the end of this milestone:
- Your `suggestions` table is created in DB Fiddle
- Your table contains at least 3 rows of sample data
- Your SQL queries for getting all suggestions, getting suggestions by category and adding a suggestion work
   
---

### 🎯 Milestone 2: Deploy SQL Database to Neon

1. Use Neon.tech to create a new Neon project called `suggestions`. Use this [Neon deployment guide](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/deploy-database-to-neon.md) to help you. 
2. Set up your database on Neon (create your table(s) and insert rows of sample data)
3. Submit a screenshot of your deployed database to Canvas.

✅ By the end of this milestone:
- Your `suggestions` table exists in Neon and contains at least 3 rows of data

---

### 🎯 Milestone 3: Write API Documentation

1. In the root folder of your `product-feedback-app` Github repo, you'll find an `api-documentation.md` file.
2. Your task is to fill in the blanks in this API documentation file using Markdown code. This is an important step in planning how your frontend and backend will communicate. Think of this document as a blueprint for the API endpoints your app will need.
3. For each API endpoint, you will need to write:
    - A description,
    - An example request URL
    - An example request body (if applicable)
    - An example response. 
4. Refer to the [Countries API Documentation](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/api-documentation.md) as an example of what a finished doc should look like.
5. Submit the Github link to your api-documentation.md file on Canvas.

✅ By the end of this milestone:
- Each API endpoint is documented with:
  -  a clear URL
  -  a method (GET or POST)
  - Request body (if needed)
  - Example response
- The Markdown is properly formatted and there are no errors

---

### ⚙️ Set up your project's folder structure

1. Open your `product-feedback-app` folder in VS Code. 
2. Inside `product-feedback-app`, create two folders:
   - `client` — for your frontend code
   - `server` — for your backend (API) code
  
✅ Check your setup:
- You have both `client` and `server` folders inside `product-feedback-app`

---

### 🎯 Milestone 4: Set Up the Backend Server/API

Now that your database is ready, you'll build a server to interact with it! 

Refer to this [Setting Up Your Backend guide](https://github.com/ac-backend/product-feedback-app/blob/main/set-up-backend.md) to set up your backend server/api from scratch in the `server` folder. 

✅ By the end of this milestone:
- Your server runs without errors (with `node --watch index.js`)

---

### 🎯 Milestone 5: Build the Backend Server/API

1. Build your API endpoints and helper functions:
  - `GET /get-all-suggestions`: Return all the suggestions data
  - `GET /get-suggestions-by-category/:category`: Return suggestions filtered by category 
  - `POST /add-one-suggestion`: Save submitted form data
2. Test _all_ your API endpoints in Postman to make sure they're working according to your API Documentation
3. Push your code to Github

✅ By the end of this milestone:
- All endpoints work in Postman according to your API Documentation
- You can:
  - Get all suggestions
  - Filter by category
  - Add a suggestion

---

### 🎯 Milestone 6: Set Up the Frontend

Now that your API is working, you'll build a frontend to display and interact with the data! 

Refer to this [Setting Up Your Frontend guide](https://github.com/ac-backend/product-feedback-app/blob/main/set-up-frontend.md) to set up your React app from scratch in the `client` folder. 

✅ By the end of this milestone:
- Your app runs with `npm run dev` without errors
- Your folder structure includes `components` and `pages`
- You added a `_redirects` and `vite.config.js` file
- You set up your routes with React Router

---

### 🎯 Milestone 7: Build the Frontend

1. Write your code to build the frontend, according to the [Figma designs](https://www.figma.com/design/vxjX8SdBOt21DCD14mrBM9/Product-Feedback-App-Design?node-id=0-1&t=OH1BSnaLrvNeWMlQ-1).
  - 💡 Note: In your frontend code, all API calls should start with `/api`, for example: `/api/get-all-suggestions`
  - 💡 Note: Use the icons and images included in the `assets` folder!    
2. Push your code to Github

✅ By the end of this milestone:
- You can see suggestions displayed on the page
- Filtering the suggestions works correctly
- Submitting the form adds a new suggestion
- The frontend is responsive to various screen sizes

---

### 🎯 Milestone 8: Deploy to Netlify and Render

1. Deploy your server/API code (in the `server` folder) to Render. Refer to this [Render deployment guide](https://github.com/ac-backend/countries-app-instructions/blob/main/version-4/deploy-server-to-render.md).
2. Update the Base API URL at the top of your API documentation.
3. Deploy your frontend code (in the `client` folder) to Netlify. Refer to this [Netlify deployment guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.jnwta4jrhylr#heading=h.scmsi7a6s9yz).

✅ By the end of this milestone:
- Your frontend is live on Netlify
- Your backend is live on Render
- Your API documentation's Base URL was updated with your deployed API's URL
- Your live app can:
  - Fetch and display suggestions from your deployed API
  - Filter suggestions by category
  - Submit new suggestions successfully

---

### ⚙️ Test everything again... and again! 
1. Now that your database, API, and frontend are all deployed to the internet, you can test all user flows:
   - Viewing all suggestions
   - Filtering the suggestions
   - Adding a suggestion
2. Check your database to make sure the data is updating correctly
3. No errors appear in the browser console

---

### ⚙️ Clean and Comment your code
1. Clean up your code to make it clean and modular
2. Remove unnecessary console.log() messages and unused blocks of commented-out code.
3. Comment complex logic to explain how it works

---

### 🎯 Milestone 9: Write README.md
1. In your project's README.md file, explain what your project is about, its tech stack, how to run it, etc. This is important if you intend to showcase this project on your resume or portfolio. Use this [README.md template](https://github.com/ac-backend/countries-app-instructions/blob/main/version-4/write-your-README.md) to help you write it!
2. Submit the Github link to your README.md file on Canvas. 

---

### 🎯 Final Milestone: App complete!
1. Push your code to Github
2. Submit your Github repo link and Netlify link to Canvas! You're done! 🎉

---

## 🌟 Stretch Goals (Optional)

Finished the main requirements? Here are some bonus challenges:

- 🏆 Upvote product suggestions
- 🏆 Add a hamburger menu in mobile view
- 🏆 Sort suggestions by most/least upvotes and most/least comments
- 🏆 Edit an existing suggestion
- 🏆 Delete an existing suggestion
- 🏆 Add comments to an existing suggestion
- 🏆 Implement multi-filtering
