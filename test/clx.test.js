const proxyquire = require('proxyquire'),
dbSave = require('./dbSave')

describe('TexTrade', function () {
	let stubs, err;
	beforeEach(function () {
		stubs = {};
		err = new Error('any error message');
	})

	describe('Server', () => {
		describe('biz - 业务', () => {
			const code = 'foo'
			const ID_NOT_EXIST = '5ce79b99da3537277c3f3b66'
			let schema, testTarget, toCreate;
			let id, __v;

			beforeEach(function (done) {
				__v = 0
				return clearDB(done);
			})

			describe('Customers - 客户', () => {
				const name = 'foo name',
					address = 'address',
					link = 'link',
					tags = 'tags'

				beforeEach(() => {
					toCreate = {code}
					schema = require('../db/Customer');
					testTarget = require('../server/biz/Customer');
				})

				it('code is required', () => {
					return testTarget.create({})
						.should.be.rejectedWith()
				})

				it('code must be unique', () => {
					return dbSave(schema, toCreate)
						.then(() => {
							return testTarget.create(toCreate)
						})
						.should.be.rejectedWith()
				})

				it('create', () => {
					return testTarget.create({code, name, address, link, tags})
						.then(doc => {
							return schema.findById(doc.id)
						})
						.then(doc => {
							doc = doc.toJSON()
							expect(doc.code).eql(code)
							expect(doc.name).eql(name)
							expect(doc.address).eql(address)
							expect(doc.link).eql(link)
							expect(doc.tags).eql(tags)
						})
				})
			})
		})

		it('a single test', () => {
			const foo = "foo"
			expect(foo).eql('foo')
		})
	})
})