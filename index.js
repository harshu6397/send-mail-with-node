const express = require('express')
const sendMail = require('./sendMail')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/sendmail', async (req, res) => {
    const { to, subject, text } = req.body;
    await sendMail(to, subject, text);
    res.send('Mail sent!')
})   
 
 
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})