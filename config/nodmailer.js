const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-result", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "GMAIL",
    auth: {
      user: process.env.MAIL_ADRESS,
      pass: process.env.MAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter
    .sendMail({
      from: transporter.options.auth.user,
      to: transporter.options.auth.user,
      subject: "Recape d'audit",
      html: JSON.stringify(req.body)
    })
    .then(dbRes => res.status(200).send("Email envoyé"))
    .catch(dbErr => {
      console.log(dbErr),
        res.status(500).send("Il y a eu une erreur lors de l'envoie");
    });
});

module.exports = router;
