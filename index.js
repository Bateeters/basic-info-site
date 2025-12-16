const express = require("express"); // import express
const path = require('path'); // used to send the html files as responses
const app = express(); // calling the application

// we specify what the route we are defining is
// in this case it's "localhost:8080/"
app.get("/", (req, res) => {
    // sendFile is used to send the html files
    // path.join() is adding what we define at the end of the path
    // we pass __dirname for the directory and the name of the file to say which file in the directory we display
    res.sendFile(path.join(__dirname, 'index.html'));
});

// localhost:8080/about
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// localhost:8080/contact
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// app.use is what we can use to create a default display
// can be used for the 404 error page
app.use((req, res, next) => {
    // setting the status to display when the 404 error is thrown.
    res.status(404).sendFile(path.join(__dirname, '404.html'));   
})


const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`app listening on port ${PORT}`);
});