const express = require('express')// Importing the Express library/module
const app = express()// Creating an instance of the Express application
const connectDB = require('./config/database') // Importing database connection function from a file

// Importing route handlers for home and todos
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})// Loading environment variables from a configuration file

// Connecting to the database
 connectDB()

// Setting the view engine for rendering dynamic content using EJS
app.set('view engine', 'ejs')

// Serving static files from the 'public' directory
app.use(express.static('public'))

// Parsing incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }))

// Parsing incoming requests with JSON payloads
app.use(express.json())

// Attaching the homeRoutes handler for requests at '/'
app.use('/', homeRoutes)

// Attaching the todoRoutes handler for requests at '/todos'
app.use('/todos', todoRoutes)

// Starting the server to listen for incoming requests on the specified port
app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})
