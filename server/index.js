const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
const connectDB =require('./lib/db')


const cors = require('cors');
const Data=require('./model/data.model')
const sendEmail =require('./lib/nodemailer')
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
}))



app.post ('/data', async (req, res) => {
    let body = req.body.form;
    console.log('Received data:', body);


    try { 


    const newdata= new Data(body)
    newdata.save()


     await sendEmail(`Name: ${body.name}
    Email: ${body.email}
    Phone: ${body.phone}
    Message: ${body.message}`)


    res.status(200).json({ message: 'Data saved and email sent successfully' });
   
     } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }


})

    connectDB()


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

