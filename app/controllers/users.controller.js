const users = require('../models/users.model')


exports.create = (req, res) => {
    const user_create = new users({
        name: req.body.name,
        phone: req.body.phone
    });

    user_create.save().then(result => {
        res.send(result)
    }).catch(err => {
        res.status(500).send({
            message: err
        })
    })
}