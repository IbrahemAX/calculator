const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/style.css");
});
app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let buttonName = req.body.submit;
  if (buttonName == "add") {
    let result = 0;
    result = num1 + num2;
    res.send("The result is " + result);
    return result;
  } else if (buttonName == "multi") {
    let result = num1 * num2;
    res.send("The result is " + result);
  } else if (buttonName == "minus") {
    let result = num1 - num2;
    res.send("The result is " + result);
  } else if (buttonName == "divi") {
    let result = num1 / num2;
    res.send("The result is " + result);
  }
});

app.listen(3000, function () {
  console.log("we love you my friend!!");
});
