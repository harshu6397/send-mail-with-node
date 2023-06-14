require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendMail(to, subject, html) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // smtp.gmail.com
    port: "587",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    }, 
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"Foo Fed 👻" ${process.env.SENDER}`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  });
}

module.exports = sendMail;
