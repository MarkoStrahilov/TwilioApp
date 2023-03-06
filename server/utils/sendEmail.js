const nodemailer = require('nodemailer')

const sendEmail = async options => {

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        auth: {
            user: 'mstrahilov@outlook.com',
            pass: "fjewut3iojkwe90i23op[ot9k3ijo4emk238j"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: 'mstrahilov@outlook.com',
        to: options.email,
        subject: options.subject,
        html: options.text
    }


    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log('Error while sending mail: ' + err)
        } else {
            console.log('verification link was sent to:', info.messageId);
        }
    })

}


module.exports = sendEmail;