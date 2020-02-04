const createCollection = require('@finelets/hyper-rest/db/mongoDb/CreateCollection')

const dbModel = createCollection({
    name: 'Customer',
    schema: {
        code: {type: String, required: true, unique: true, index: true},
        // code: {type: String, required: true},
        name: String,
        address: String,
        link: String,
        tags: String
    }
})

module.exports = dbModel