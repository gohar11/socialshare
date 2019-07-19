module.exports = (app) => {
    users = require('../controllers/users.controller')
    events = require('../controllers/events.controller')



    //== create users
    app.post('/users', users.create)

    //== create events
    app.post('/events', events.create)
}