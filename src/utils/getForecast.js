const requests = require("request");

const getForecast = (address, callback) => {
  const url = `http://api.weatherstack.com/forecast?access_key=b1e7130bddc03953b8a040933bb9735c&query=${address}`;

  requests({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Network failure", undefined);
    } else if (response.body.error) {
      console.log(response.body.error);
      callback("Location mismatch", undefined);
    } else {
      console.log(response.body.forecast);
      callback(undefined, response.body);
      // `the response body is ${response.body}`);
    }
  });
};

module.exports = getForecast;
