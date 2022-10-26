# Book-Commerce-Application
Book E-Commerce Application

<h4>Introduction</h4>
<p>This is an Ecommerce Application built with MEVN (MongoDB, Express, Vue and Node) Stack.</p>
<p>The app has two(2) part named frontend and backend named respectively.</p>
<p>The frontend is the Vue Js application and the backend is the combination of Node Js, Express and a connection to the MongoDB database (cloud)</p>
<br />

<h4>Requirements for running this application</h4>
<p>1. You need to install node to be able to use npm in the command line.</p>
<p>2. Clone or download and extract the zipped application on your machine or PC</p>
<p>3. Frontend</p>
<p><ul>
    <li>Navigate to the ../frontend  directory in your command line or right click on frontend if you are using VS Code and select open in integrated terminal</li>
    <li>Type (npm install or npm i) this is to install the packages needed to run the frontend application.</li>
    <li>Type (npm run serve) this will start the applicaton on port 3000, you may open http://localhost:3000 on your browser to view the frontend.
    </ul>
</p>
<br />

<p>4. Backend</p>
<p><ul>
    <li>Navigate to the ../backend  directory in your command line or right click on backend if you are using VS Code and select open in integrated terminal</li>
    <li>Type (npm install or npm i) this is to install the packages needed to run the backend application.</li>
    </ul>
</p>
<p>4. MongoDB Connection</p>
<p><ul>
    <li>Create a MongoDB database</li>
    <li>Copy the connection string</li>
    <li>navigate to ..\backend\app.js file, on line 36 and replace the sting inbetween the '...' and then type your details including mongodb password to connect 
      the application to your mongodb database
    </li>
    <li>Type (npm start) this will start the backend applicaton on port 6080, at this point, frontend and backend applications are able to interact with each other.</li>
    </ul>
</p>
