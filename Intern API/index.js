import express from "express";
import mongoose from "mongoose";
import routes from "./routes/userRoute.js";

const app = express();
app.use(express.json());

app.use("/api", routes);

mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("failed to connect to MongoDB", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
}
);

