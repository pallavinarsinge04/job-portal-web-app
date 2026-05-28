const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.post("/", (req, res) => {
  const {
    title,
    company,
    location,
    salary,
    description,
    recruiter_id,
  } = req.body;

  const sql =
    "INSERT INTO jobs (title, company, location, salary, description, recruiter_id) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      title,
      company,
      location,
      salary,
      description,
      recruiter_id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Database Error",
        });
      }

      res.status(201).json({
        message: "Job Posted Successfully",
      });
    }
  );
});

router.get("/", (req, res) => {
  const sql = "SELECT * FROM jobs ORDER BY created_at DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Database Error",
      });
    }

    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM jobs WHERE id=?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    res.json(result[0]);
  });
});

module.exports = router;