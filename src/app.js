const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const port = process.env.PORT || 3000;

const getForecast = require("./utils/getForecast");

console.log(path.join(__dirname, "../public"));
console.log(__dirname, __filename);

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Adithya Jayan",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather",
    name: "Adithya Jayan",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weather",
    name: "Adithya Jayan",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.search) {
    res.send("Need a search term");
  } else {
    getForecast(req.query.search, (error, resposne) => {
      if (error) {
        console.log(error);
      } else {
        console.log(resposne);
        res.send(resposne);
      }
    });
  }
  
});

app.get("*", (req, res) => {
  res.render("404");
});
app.listen(port, () => {
  console.log("server is up on port " + port);
});
