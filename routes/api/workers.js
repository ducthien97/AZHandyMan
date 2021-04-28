const express = require("express");
const router = express.Router();
//const cors = require('cors');
const auth = require("../../middleware/auth");
const WorkerS = require("../../models/Worker");

//Get all worker

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  WorkerS.find()
    .sort({ name: -1 })
    .then((workers) => res.json(workers));
});

//Show one worker
router.get("/:id", (req, res) => {
  WorkerS.findById(req.params.id)
    .then((worker) => res.json(worker))
    .catch((err) =>
      res.status(404).json({
        success: false,
      })
    );
});

//New worker Route
router.post("/", auth, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const NewWorker = new WorkerS(req.body);
  //console.log(Newworker.courses[0])
  console.log(NewWorker);
  NewWorker.save().then((worker) => res.json(worker));
});

//New Course Route
router.post("/:id", (req, res) => {
  var newJob = {
    jobName: req.body.jobName,
    score: req.body.score,
    customer: req.body.customer,
    jobDescription: req.body.jobDescription,
  };
  WorkerS.findById(req.params.id, function (err, worker) {
    if (worker.experience.length === 0) {
      worker.grade = newJob.score;
    } else {
      worker.experience.push(newJob);
      let sum = 0;
      worker.experience.forEach((element) => {
        sum = sum + element.score;
      });
      worker.grade = Math.round(sum / worker.experience.length);
    }

    worker.save();
    res.json(worker);
  });
});
router.put("/:id", auth, (req, res, nex) => {
  let id = {
    _id: req.params.id,
  };
  const updatedData = req.body;
  console.log(req.body);
  WorkerS.update({ _id: id }, { $set: updatedData }, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json({
      msg: result,
      update: "success",
    });
  });
});

//Delete worker Route
router.delete("/:id", auth, (req, res) => {
  WorkerS.findById(req.params.id)
    .then((worker) => worker.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
