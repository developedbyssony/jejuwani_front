const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const request = require("request");
const admin = require("firebase-admin");
admin.initializeApp();

const url = "http://api.visitjeju.net/vsjApi/contents/searchList?" +
  "apiKey=rwai4urhns253zsg&" +
  "locale=kr";

exports.apicall = functions.https.onRequest((req, response) => {
  cors(req, response, () => {
    request(url, function(error, res, body) {
      response.status(200).json(res);
    });
  });
});
