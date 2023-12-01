const express = require("express");
const multer = require("multer");
const contentDetect = require("./detect");

const app = express();

// multer configuration
const storage = multer.memoryStorage(); // store the image file in memeory as buffers
const upload = multer({ storage: storage });

app.post("/", upload.single("image"), (req, res) => {
  // access the image file through req.file.buffer as a readable stream
  const imageFileBuffer = req.file.buffer;
  const originalFileName = req.file.originalname;
  // detect if the imagefile contains inappropriate content
  contentDetect(imageFileBuffer, originalFileName).then((data) => {
    if ((data.status = "success")) {
      data_to_return = {
        status: "success",
        nudity: {
          sexual_activity: data.nudity.sexual_activity,
          sexual_display: data.nudity.sexual_display,
          erotica: data.nudity.erotica,
          sextoy: data.nudity.sextoy,
          suggestive: data.nudity.suggestive,
          safety: data.nudity.none,
        },
      };
      console.log(data_to_return);
      return res.json(data_to_return);
    } else {
      return;
    }
  });
});

module.exports = app;
