Как запускать (Running the Project)
Run the server:

You can start the server using:

bash
npm start
Access the API endpoints:

Weather API: http://localhost:5000/api/weather
Books API: http://localhost:5000/api/books
The server will listen on the port specified in your .env file (default is 5000).

Troubleshooting
MongoDB Connection:
Ensure the MONGO_URI in the .env file is correct and your MongoDB service is running.

Dependencies:
Verify that all dependencies are installed correctly by checking the output of npm install.

Environment Variables:
If the server fails to start, double-check your .env file for typos or missing values.