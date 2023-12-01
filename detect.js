// this example uses axios and form-data
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const detect = async (imageFileBuffer, originalFileName) => {
  data = new FormData();
  data.append("media", imageFileBuffer, { filename: originalFileName });
  data.append("models", "nudity-2.0");
  data.append("api_user", "1628561492");
  data.append("api_secret", "evGtZGh6Yv8JjuEV7kN4arWLYN");

  const response = await axios({
    method: "post",
    url: "https://api.sightengine.com/1.0/check.json",
    data: data,
    headers: data.getHeaders(),
  });

  return response.data;
};

module.exports = detect;
