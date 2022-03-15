require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");
const seedProfilesRouter = require("./routes/seed-profiles.js");
const seedNumerologyRouter = require("./routes/seed-numerology.js");
const profileRouter = require("./routes/profile.js");
const profilesRouter = require("./routes/profiles.js");
const numerologyRouter = require("./routes/numerology.js");

// set up mongodb connection
const mongoDB = process.env.DB
mongoose.connect('mongodb+srv://smccu726:admin@masterofthesecondveil.j8irh.mongodb.net/react-numerology?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});



// set up express server
const app = express();
// Serve static files from the React app


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.


const PORT = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send("Hello-world");
});


app.get("/test", (_, res) => {
  res.send("test request received");
});

// set endpoints for seeding
app.use("/seed/profiles", seedProfilesRouter);
app.use("/seed/numerology", seedNumerologyRouter);

// set endpoint for app functionality
app.use("/profile", profileRouter);
app.use("/profiles", profilesRouter);
app.use("/numerology", numerologyRouter);

// set up express server listening
app.listen(PORT, () => console.log(`listening on ${PORT}`));
