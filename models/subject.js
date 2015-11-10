var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'subject',
    connection: 'disk',
    attributes: {
        nev: {
            type: 'string',
            required: true
        },
        felev: {
            type: 'integer',
            required: true
        },
        kredit: {
            type: 'integer',
            required: true
        },
        user: {
            model: 'user'
        }
        
    }
});