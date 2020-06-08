const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Signup Route
app.post("/signup", (req, res) => {
  const { email } = req.body;
  res.send("yuh");
  //make sure fields are filled
  if (!email) {
    res.redirect("/homepage");
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: "https://us5.api.mailchimp.com/3.0/lists/ecc227a5eb",
    method: "POST",
    headers: {
      Authorization: "auth f1dd257cf2d5115a8f8eab0e47c0f63b-us5"
    },
    body: postData
  };
  request(options, (err, response, body) => {
    if (err) {
      res.redirect("/fail.html");
    } else {
      if (response.statusCode === 200) {
        res.redirect("/src/pages/homepage/homepage.jsx");
      } else {
        res.redirect("/fail.html");
      }
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
