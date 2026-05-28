const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.post("/", (req, res) => {
  const { user_id, job_id } = req.body;

  const sql =
    "INSERT INTO applications (user_id, job_id) VALUES (?, ?)";

  db.query(
    sql,
    [user_id, job_id],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Application Failed",
        });
      }

      res.status(201).json({
        message: "Applied Successfully",
      });
    }
  );
});

router.get("/", (req, res) => {
  const sql = `
    SELECT applications.id,
           users.name,
           users.email,
           jobs.title,
           jobs.company,
           applications.status
    FROM applications
    JOIN users
    ON applications.user_id = users.id
    JOIN jobs
    ON applications.job_id = jobs.id
  `;

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

module.exports = router;