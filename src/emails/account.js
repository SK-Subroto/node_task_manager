const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'subroto35-1734@diu.edu.bd',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'subroto35-1734@diu.edu.bd',
        subject: 'Thanks for being with us!',
        text: `Good bye, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}