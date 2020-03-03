const schema = require('../../db/Orderhjm'),
	createEntity = require('@finelets/hyper-rest/db/mongoDb/DbEntity'),
	__ = require('underscore')

const config = {
	schema
}

const addIn = {
}

module.exports = createEntity(config, addIn)