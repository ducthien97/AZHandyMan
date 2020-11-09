const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const WorkerS = require("../../models/Worker");
//const Job = require("../../models/Worker");
//Get all worker
router.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
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
    jobDescription: req.body.jobDescription
  };
  WorkerS.findById(req.params.id, function (err, worker) {
    if (worker.experience.length === 0){
      worker.grade = newJob.score;
    }
    else{
      worker.experience.push(newJob);
      let sum = 0;
      worker.experience.forEach(element => {
        sum = sum + element.score;
      });
      worker.grade = Math.round(sum / worker.experience.length);
    }
    
    worker.save();
    res.json(worker);
  });
});

//Edit worker Route
// router.put("/:id", (req, res) => {
//   var newData = req.body;
//   var sumCourses = 0;
//   var courses = [...newData.courses];
//   for (var j = 0; j < newData.courses.length; j++) {
//     var scores = [...newData.courses[j].scores];
//     var sum = 0;
//     //console.log(scores)
//     for (var i = 0; i < scores.length; i++) {
//       sum += scores[i];
//     }
//     //console.log("sum: " + sum)
//     var average = sum / scores.length;
//     //console.log("average:" + average)
//     newData.courses[j].courseAverage = Math.round(average.toFixed(2)); //console.log(Newworker.courses[j].courseAverage)

//     sumCourses += newData.courses[j].courseAverage;
//   }
//   //console.log(sumCourses);
//   var gpa = sumCourses / courses.length;
//   newData.semesterGPA = (gpa / 100) * 4;
//   worker.findOneAndUpdate(req.params.id, { $set: newData }, function (
//     err,
//     worker
//   ) {
//     if (err) {
//       res.status(500).json({ err: err });
//     } else {
//       res.json({ update: "Success" });
//     }
//   });
// });

//Delete worker Route
router.delete("/:id", auth, (req, res) => {
  WorkerS.findById(req.params.id)
    .then((worker) => worker.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
