const accountSid = 'AC14244de6c907b0e77051282233d8bc9c';
const authToken = '5c5a9da36fa268d5a70516ada2ac1878';
const client = require('twilio')(accountSid, authToken);

const sendMessageWithTwilio = (text,number) => {

    client.messages
        .create({
            body: text,
            to: number
        })
        .then(message => console.log(message.sid))
        .done();

}

module.export = sendMessageWithTwilio