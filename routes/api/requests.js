const express = require("express");
const router = express.Router();
//const cors = require('cors');
const auth = require("../../middleware/auth");
const Request = require("../../models/Request");
//const Job = require('../../models/Worker');
//Get all worker

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  Request.find()
    .sort({ name: -1 })
    .then((workers) => res.json(workers));
});

//Show one worker
router.get("/:id", (req, res) => {
  Request.findById(req.params.id)
    .then((worker) => res.json(worker))
    .catch((err) =>
      res.status(404).json({
        success: false,
      })
    );
});

//New worker Route
router.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const NewRequest = new Request(req.body);
  //console.log(Newworker.courses[0])
  console.log(NewRequest);
  NewRequest.save().then((request) => res.json(request));
});




//Delete worker Route
router.delete("/:id", (req, res) => {
  Request.findById(req.params.id)
    .then((request) => request.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
