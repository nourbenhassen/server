const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req,res) => {
        res.send('Thanks for voting !');
    });
   
    app.post('/api/surveys', requireLogin, async (req, res) => {

        const survey = new Survey({
            title: req.body.title,
            subject: req.body.subject,
            body: req.body.body,
            recipients: req.body.recipients
                        .split(',')
                        .map(email => ({ email })),
            _user: req.user.id, //id generated by mongo
            dateCreated: Date.now()
        });

        //Great place to send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        
        try {
        await mailer.send();
        await survey.save();
        } catch (err) {
            res.status(422).send(err);
        }
    });
};



