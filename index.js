// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

const accountSid = "AC14244de6c907b0e77051282233d8bc9c";
const authToken = "429b0275183acefb07716faa508e9076";
const client = require("twilio")(accountSid, authToken);

const sendMessage = () => {

    client.messages
        .create({
            body: "Congratulations on your successful credit purchase! Your transaction of 10.000 $ has been processed. Thank you for choosing our service. If you have any questions or concerns, please don't hesitate to contact us.",
            messagingServiceSid: 'MG410b41f0082f3ae5e19dea019645bb54',
            to: '+38978700202'
        })
        .then(message => console.log(message.sid))
        .done();

}

sendMessage()