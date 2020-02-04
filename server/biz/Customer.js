const schema = require('../../db/Customer'),
	createEntity = require('@finelets/hyper-rest/db/mongoDb/DbEntity'),
	__ = require('underscore')

const config = {
	schema
}

const addIn = {
}

module.exports = createEntity(config, addIn)