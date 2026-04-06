# 🛠️Setting Up Your Backend 

This guide will walk you through how to set up a backend server/API in your `server` folder with Node & Express. 

---

## ⚙️ Initialize your Node project's `package.json` file

This step creates your `package.json` file inside the `server` folder.

1. In VS Code, open the terminal and `cd` into your `server` folder
2. In the `server` folder, run `npm init -y` to generate a `package.json` file.
3. Add `"type": "module"` as an object property in `package.json`.

--- 

## ⚙️ Install dependencies

1. In the `server` folder, install the `express` and `pg` packages by running these commands in the terminal:
    - `npm install express`
    - `npm install pg`
2. Check these to confirm the packages installed successfully:
    - `express` and `pg` appear in `package.json` under `dependencies`
    - A `node_modules` folder was created

---

## ⚙️ Create `.gitignore` to tell Git which files not to track

In the `server` folder, create a `.gitignore` file. In this file, list `node_modules` and `config.js`, like this:

<img width="300" alt="Screenshot of a .gitignore file" src="https://github.com/user-attachments/assets/2907cf5e-00c0-472a-8f49-2debd521a91b" />

⚠️ Do NOT commit your database URL to GitHub. Make sure config.js is in .gitignore.

---

## ⚙️ Create `src` folder, `index.js`, `config.js`

1. In the `server` folder, create a `src` folder.
2. Inside the `src` folder, create 2 files: `index.js` file and `config.js`.

---

## ⚙️ Add `config.js` file to connect your database

1. In `config.js`, add the following code:

  ```js
  const config = {
    databaseUrl:
      "REPLACE_ME",
  };
  
  export default config;
  ```
2. Replace `REPLACE_ME` with your Neon database connection string:

    <img width="700"  alt="Your server's config.js file" src="https://github.com/user-attachments/assets/f34900f3-eb69-47e2-8cb0-2e28d81c2d2f" />

3. If you get stuck, use this guide:

   [How to connect your Neon Database to your Local Express server](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/connect-neon-database-to-express-server.md)

--- 

## ✅ Check your backend server setup

This is what your `server` folder should look like:

<img width="300" alt="Sreenshot of server folder structure" src="https://github.com/user-attachments/assets/9785ecfd-7634-4669-9b91-10d68e074f6d" />

Your `server` folder now includes these files: 
- `package.json` — lists project info and dependencies  
- `.gitignore` — list of files Git should ignore  
- `src/` — your app's custom code lives in this folder
- `src/index.js` — your server/API code  
- `src/config.js` — your database configuration & password
- `node_modules/` — installed project dependencies (auto-generated)  
- `package-lock.json` — lists the locked dependency versions (auto-generated)


