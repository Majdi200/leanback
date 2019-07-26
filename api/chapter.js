const express = require("express");
const router = new express.Router();
const chapterModel = require("../models/chapter");

router.post("/create-new-chapter", (req, res) => {
  console.log("ici", req.body);
  const newChapter = new chapterModel({
    chapter_name: req.body.chapter_name,
    chapter_number: req.body.chapter_number,
    responses: [
      req.body.response_1,
      req.body.response_2,
      req.body.response_3,
      req.body.response_4,
      req.body.response_5
    ]
  });

  newChapter
    .save()
    .then(chpt => {
      console.log("chapter créé !!!", chpt);
      res.send({ status: "ok", chapter: chpt });
    })
    .catch(error => {
      console.log(error);
      res.send({ status: "error", details: error });
    });
  //   chapterModel.
});

router.get("/", (req, res) => {
  chapterModel
    .find()
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

const getOne = id => chapterModel.findById(id);

router.get("/:id", (req, res) => {
  // utilise mongoose model pour trouver un chapitre par son id !!!
  getOne(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

//   .findById()
//   .then()
//   res.send("todo : find chapter by id");
// });
// router.get("/:id", (req, res) => {
//   getOne(req.params.id)
//     .then(user => {
//       res.status(200).send(user);
//     })
//     .catch(error => res.status(500).send("Something went wrong"));
// });

module.exports = {
  router,
  //   getAll,
  getOne
  //   deleteOne,
  //   updateOne,
  //   create
};

// router.delete("/:id", (req, res) => {
//   deleteOne(req.params.id)
//     .then(deletedUser => {
//       res.status(200).send(deletedUser);
//     })
//     .catch(error => res.status(500).send("Something went wrong"));
// });

// router.patch("/:id", (req, res) => {
//   updateOne(req.params.id, req.body).then(updatedUser =>
//     res.status(200).send(updatedUser)
//   );
// });

// //TODO Validation ??
