# 🛠️ Setting Up Your Frontend

This guide will walk you through how to set up a frontend in your `client` folder with React. 

---

## ⚙️ Initialize React project with Vite

This step creates your React app inside the `client` folder.

1. In the terminal, use `cd` to navigate into your `client` folder.
2. Run this command inside the client folder. The `.` tells Vite to use the current folder rather than creating a new folder:

    ```
    npm create vite@latest .
    ``` 
  
3. Follow Vite's prompts: 

      - **Select a framework:** React
      - **Select a variant:** Javascript
      - **Install with npm and start now?** No

---

## ⚙️ Install dependencies

1. In the `client` folder in the terminal, run this command to install all the dependencies listed in `package.json`:

    ```
    npm install
    ```
    Once you've run this, you should see a `node_modules` folder was generated inside your `client` folder. 

---

## ⚙️ Create `components` and `pages` folder in `src`

1. Inside of the `client/src` folder, create  a `components` folder
2. Inside of the `client/src` folder, create  a `pages` folder.
3. Inside of the `client/src/pages` folder, create 2 files:
    - `Home.jsx` (where you can view all suggestions) 
    - `AddFeedback.jsx` page (which has the form to submit a new suggestion).

---

## ⚙️ Set up your `_redirects` file 

1. Locate the `client/public` folder. Inside the `public` folder, create a file named `_redirects`. Don't forget the underscore `_` at the beginning of the file name!
2. Copy & paste this code into your `_redirects` file:

    ```
    /api/* http://localhost:3000/:splat 200
    /* /index.html 200
    ```

You might wonder, what does code do? Let's break it down line by line:

1. `/api/* http://localhost:3000/:splat 200`
    
    This means any request starting with `/api/` (like `/api/get-all-suggestions`) gets sent to your Express server running on port 3000
    
2. `/* /index.html 200`
    
    This ensures React Router works when you refresh or visit a page directly (like `/add-feedback`)

This is what you should be seeing in VS Code now: 
    
<img width="600" alt="Screenshot of _redirects with red squiggly line errors" src="https://github.com/user-attachments/assets/fcffee20-c9a8-4e3a-9127-cad389252f5d" />

If you're seeing errors and red squiggly lines in this file, don't fret! It's probably because VS Code thinks this is a CSS file instead of a Plain Text file. It will still work even with the red squiggles, but if they bother you, the next step shows you how to fix it.

---

## ⚙️ Fix the file type of `_redirects` in VS Code

Why does this error happen? VS Code doesn’t recognize `_redirects` as a special file, so it tries to guess the language — and sometimes guesses wrong. In this case, it guessed CSS when it should be Plain Text. 

1. Look at the bottom bar of VS Code. You should see something like “CSS” or another language label, as marked in this screenshot:

    <img width="800" alt="_redirects file with an arrow pointing to the CSS language label" src="https://github.com/user-attachments/assets/e3750885-65f5-4b64-885a-8afb03f363f7" />

2. Click on that CSS label. A menu will pop up at the top of the screen, where you can choose a programming language.
3. Choose “Plain Text”
4. The errors should disappear ✅

---

## ⚙️ Set up your `vite.config.js` file

💡 You just set up `_redirects` for when your app is deployed.

Next, you'll set up `vite.config.js` to do something similar for local development. Both of these make `/api` requests work correctly.

1. Locate the `vite.config.js` file in your `client` folder. This allows your React app to send requests to `/api` (like `/api/get-all-suggestions`) and have them forwarded to your Express server running on port 3000.

    ```
    // vite.config.js
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    
    // https://vite.dev/config/
    export default defineConfig({
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:3000/",
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
      plugins: [react()],
    });
    
    ```

---

## ⚙️ Update the page title

1. In VS Code, open the `index.html` file in your client folder
2. Find the `<title>` tag in the HTML code
3. Change the title to the name of your app (for example: Product Feedback App). When you open your React app in the browser, this title will show up in the name of the browser tab.
4. (Optional) You can also update the favicon (the icon in the browser tab) to make your app feel more polished and professional. You can use an emoji or any SVG of your choice. Try googling "how to change the favicon of a React app" or "how to use emoji as favicon in React App".

---

## ⚙️ Set Up Routes with React Router 

Refer to this [react-router guide](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.hbxxe6vmm0fq#heading=h.snu4ai1ffrgi) to help you.

---

## ✅ Test your setup

Test your setup by running `npm run dev` to see your app in the browser. 

This is what your `client` folder structure could look like at this point: 

<img width="358" height="621" alt="Client folder structure" src="https://github.com/user-attachments/assets/5535d58e-1164-430f-949c-5b4876835c62" />


