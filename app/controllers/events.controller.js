const events = require('../models/events.model')
const membersObj = require('../models/members.model')


exports.create = (req, res) => {
    let { members, event_title, event_img, author } = req.body;
    let event_id = false;


    const event = new events({
        event_title: event_title,
        event_img: event_img,
        author: author,
    });

    event.save(function(err) {
            if (err)
                res.status(500).send({ message: err })

            members.forEach(function(ele, index) {
                const members_obj = new membersObj({
                    member_name: ele.name,
                    event: event._id,
                    status: 0,
                });
                members_obj.save(function(err) {
                    if (err)
                        res.status(500).send({ messagesss: err })
                        // res.send(members_obj)
                })
            })
            res.send("data is saved!")
        }

    )



}