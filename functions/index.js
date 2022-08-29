const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const request = require("request");
const app = express();

app.use(cors({origin: true}));


exports.apicall = functions.https.onRequest((req, response) => {
  cors(req, response, () => {
    request("http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr", function(error, res, body) {
      response.send(res);
    });
  });
});
