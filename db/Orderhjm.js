const createCollection = require('@finelets/hyper-rest/db/mongoDb/CreateCollection')

const dbModel = createCollection({
    name: 'Orderhjm',
    schema: {
        code: {type: String, required: true, unique: true, index: true},
        // code: {type: NumString, required: true},
       // orderCode: String,
      
        orderNum: parseInt,//parseFloat, //>0
       // orderDetail:Object,
        link: String,
        tags: String
    }
})

module.exports = dbModel