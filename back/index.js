const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routerItems = require("./routes/items.routes");
const path = require("path");
const morgan = require("morgan");
const { PORT } = require("./config");

const app = express();
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONT_END_PORT
        : "http://localhost:6600",
    credentials: true,
  })
);

// For static files (images, CSS, etc.)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/items", routerItems);

//
if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
} else {
  console.log("Unknown environment");
}

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
