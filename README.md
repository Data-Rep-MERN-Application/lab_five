


# Lab 5: Node/Express Data             Representation and Querying

This lab will guide you through the basics of Node.js and Express.js, teaching you how to set up a web server, handle routes, and work with query parameters and JSON data. You will also learn how to integrate forms using GET and POST methods.

## Exercise 1: Setting up Git Repository

We will start by setting up version control for your project using Git.

### Steps:
1. **Create a Git Repository:**
    First, create a folder for your project, initialize it as a Git repository using `git init`. This will allow you to track changes to your project.

    ```bash
    git init
    ```

2. **Stage and Commit Files:**
    Stage all files and create your first commit:
    
    ```bash
    git add .
    git commit -m "Initial commit"
    ```

3. **Rename the Default Branch:**
    Rename the default branch to `main` (since this is the new standard for Git):
    
    ```bash
    git branch -M main
    ```

4. **Push to GitHub:**
    Link the repository to a remote GitHub repository:
    
    ```bash
    git remote add origin <your-github-repo-url>
    git push -u origin main
    ```

5. **Commit Regularly:**
    After each exercise, make sure to commit your changes to track progress.

---

## Exercise 2: What is Express?

### Task:
Add a brief explanation of what Express.js is in the `README.md` file of your repository.
You can find more details in the [official Express documentation](https://expressjs.com/).

---

## Exercise 3: Building a Simple Express Server

### Task:
Create a basic Express server that listens on `localhost:3000` and responds with "Welcome to Data Representation & Querying" when accessed.

### Instructions:
1. **Initialize the project:**
   Start by creating a `package.json` file and install Express:
   ```bash
   npm init -y
   npm install express
   ```

2. **Create `server.js`:**
   Create a `server.js` file with the following code:
   
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       res.send('Hello World');
   });

   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Running the server:**
   Run the server using:
   ```bash
   node server.js
   ```

4. **Test:**
   Open a browser and navigate to `http://localhost:3000` to see the welcome message.

5. **Change welcome message:**
   Change welcome message from 'Hello World' to 'Welcome to Data Respresentation & Querying'.


### Improvements:
- **Error handling:** You can add error-handling middleware to catch any server errors:
   ```javascript
   app.use((err, req, res, next) => {
       console.error(err.stack);
       res.status(500).send('Something went wrong!');
   });
   ```

---

## Exercise 4: Route with URL Parameters

### Task:
Add a route that accepts a name parameter in the URL and returns "Hello [name]".

### Instructions:
1. **Add a route with URL parameter:**
   Modify your `server.js` to include this route:
   
   ```javascript
   app.get('/hello/:name', (req, res) => {
       const name = req.params.name;
       res.send(`Hello ${name}`);
   });
   ```

2. **Test:**
   Access `http://localhost:3000/hello/John` in your browser. It should display "Hello John".

3. **Add second URL paramater for surname:**
   Access `http://localhost:3000/hello/John/Doe` in your browser. It should display "Hello John Doe".
---

## Exercise 5: Return JSON Data

### Task:
Create a route `/api/movies` that returns a list of movie objects in JSON format.

### Instructions:
1. **Add the movies route:**
   Modify your `server.js` to include this route:
   
   ```javascript
   app.get('/api/movies', (req, res) => {
       const movies = [
           {
               "Title": "Avengers: Infinity War",
               "Year": "2018",
               "imdbID": "tt4154756",
               "Type": "movie",
               "Poster": "https://example.com/poster1.jpg"
           },
           {
               "Title": "Captain America: Civil War",
               "Year": "2016",
               "imdbID": "tt3498820",
               "Type": "movie",
               "Poster": "https://example.com/poster2.jpg"
           },
           {
               "Title": "World War Z",
               "Year": "2013",
               "imdbID": "tt0816711",
               "Type": "movie",
               "Poster": "https://example.com/poster3.jpg"
           }
       ];
       res.json({ movies });
   });
   ```

2. **Test:**
   Use `curl` or your browser to access `http://localhost:3000/api/movies` to see the JSON response.

3. **Add status code to the resposnse:**
To add a status code to a HTTP response res.status(201).json({ movies });

4. **Return JSON response:** Modify the route handler to return the movies as a JSON response, but rename the array to myMovies:
---

## Exercise 6: Serving Static HTML

### Task:
Add a route `/index` that serves an `index.html` file.

### Instructions:
1. **Create `index.html`:**
   Add an `index.html` file in your project directory:
   
   ```html
   <html>
   <body>
       <h1>Hello World</h1>
   </body>
   </html>
   ```

2. **Serve the HTML file:**
   In your `server.js`, use the `path` module to serve the file:
   
   ```javascript
   const path = require('path');

   app.get('/index', (req, res) => {
       res.sendFile(path.join(__dirname, 'index.html'));
   });
   ```

3. **Test:**
   Access `http://localhost:3000/index` to view the HTML file.

### Improvements:
- **Serve static assets:** Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.

   ```javascript
   app.use(express.static('public'));
   ```

---

## Exercise 7: Handling GET Form Submission

### Task:
Add a form to `index.html` with text fields for `firstname` and `lastname` using the GET method, and handle the form submission.

### Instructions:
1. **Create the form in `index.html`:**
   ```html
   <form action="/name" method="GET">
       First name: <input type="text" name="firstname"><br>
       Last name: <input type="text" name="lastname"><br>
       <input type="submit" value="Submit">
   </form>
   ```

2. **Handle the GET request:**
   In `server.js`, handle the GET request for `/name`:
   
   ```javascript
   app.get('/name', (req, res) => {
       const firstname = req.query.firstname;
       const lastname = req.query.lastname;
       res.send(`Hello ${firstname} ${lastname}`);
   });
   ```

3. **Test:**
   Fill in the form on `http://localhost:3000/index` and submit it. You should see the greeting with your name.

---

## Exercise 8: Handling POST Form Submission

### Task:
Add another form using the POST method and handle the data submission on the server.

### Instructions:
1. **Install `body-parser`:**
   To handle POST requests, install `body-parser`:
   
   ```bash
   npm install body-parser
   ```

2. **Update `server.js`:**
   Add body-parser middleware:
   
   ```javascript
   const bodyParser = require('body-parser');
   app.use(bodyParser.urlencoded({ extended: true }));
   ```

3. **Create the POST form:**
   Modify `index.html` to include a POST form:
   
   ```html
   <form action="/name" method="POST">
       First name: <input type="text" name="firstname"><br>
       Last name: <input type="text" name="lastname"><br>
       <input type="submit" value="Submit">
   </form>
   ```

4. **Handle POST request:**
   In `server.js`, handle the POST request for `/name`:
   
   ```javascript
   app.post('/name', (req, res) => {
       const firstname = req.body.firstname;
       const lastname = req.body.lastname;
       res.send(`Hello ${firstname} ${lastname}`);
   });
   ```

5. **Test:**
   Fill in the form and test both GET and POST submissions.

---

## Conclusion: What You've Learned

By completing this lab, you have gained hands-on experience with the following concepts:

- **Working with Express.js:** You now understand how to create a basic Express server, handle routes, and use URL parameters.
- **Handling JSON data:** You learned how to return structured JSON data through an API endpoint.
- **Serving static files:** You have served static HTML files and set up routes to deliver content.
- **Processing form data:** You built forms that send data using both GET and POST methods, and you learned how to handle those requests on the server.

These foundational skills in Node.js and Express.js form the backbone of server-side web development, and you are now equipped to build and deploy basic web applications with dynamic content handling.
