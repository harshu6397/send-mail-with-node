require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendMail(to, subject, html) {

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, 
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
