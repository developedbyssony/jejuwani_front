const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const request = require("request");
exports.apicall = functions.https.onRequest((req, response) => {
  cors(req, response, () => {
    request("http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr", function(error, res, body) {
      return response.send(res);
    });
  });
});
