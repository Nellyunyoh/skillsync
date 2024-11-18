import express from "express";
import mongoose from "mongoose";
import internRoutes from "./routes/internRoute.js";
import mentorRoutes from "./routes/mentorRoute.js";

const app = express();
app.use(express.json());

app.use("/api/interns", internRoutes);
app.use("/api/mentors", mentorRoutes);

mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("failed to connect to MongoDB", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
}
);



// Base URL:  http://localhost:5000/api
// List of mentors: http://localhost:5000/api/mentors              ---- Method: GET
// Add a mentor: http://localhost:5000/api/mentors                 ---- Method: POST
// Update a mentor: http://localhost:5000/api/mentors/:id          ---- Method: PUT
// Delete a mentor: http://localhost:5000/api/mentors/:id          ---- Method: DELETE



// List of interns: http://localhost:5000/api/interns              ---- Method: GET
// Add a intern: http://localhost:5000/api/interns                 ---- Method: POST
// Update a intern: http://localhost:5000/api/interns/:id          ---- Method: PUT
// Delete a intern: http://localhost:5000/api/interns/:id          ---- Method: DELETE