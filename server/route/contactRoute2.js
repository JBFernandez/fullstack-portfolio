const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const sendgridTransport = require('nodemailer-sendgrid-transport');

 


router.post('/contact', (req, res) => {


    let data = req.body
    let name = "";
    let email = "";
    let message = "";

    name = data.name;
    email = data.email;
    message = data.message;

    if ( name.length === 0 || email.length === 0 || message.length === 0 ) {
        return res.json({
            msg: "Please fill al the fields"            
        })
    }

    let transporter = nodemailer.createTransport(sendgridTransport({
        auth: {
            api_key: process.env.API_KEY
        },
    }))
        
    //     {
    //     service: "gmail",
    //     auth: {
    //       user: process.env.EMAIL_USERNAME, // generated ethereal user
    //       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    //     },
    //   });

        transporter.sendMail({
            from: process.env.EMAIL_USERNAME, // sender address
            to: "bernardo.fersan@gmail.com", // list of receivers
            subject: `message from ${name}`, // Subject line
            text: "Hello world?", // plain text body
            html: 
                `
                    <h3> Information </h3>
                    <ul>
                        <li> Name: ${name} </li>
                        <li> Email: ${email} </li>
                    </ul>
                    <h3> Message </h3>
                    <p> ${message} </p>            
                `
          }, (error) => {
            try {
                if (error) return res.status(400).json(error);
                res.status(200).json({ msg: "Thank you for contacting Jose!" });
                
            } catch (error) {
                if (error) return res.status(500).json({ msg: "Server error" });
                console.log(error);
            }
        } );

    
})

module.exports = router;