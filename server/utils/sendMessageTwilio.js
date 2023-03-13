require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessageWithTwilio = async({text,number}) => {

    await client.messages
    .create({
        body: text,  
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,      
        to: number
    })
    .then(message => console.log(message.sid))
    .done();

}

module.export = sendMessageWithTwilio