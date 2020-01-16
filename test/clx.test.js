var proxyquire = require('proxyquire')

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

			it('a single test', () => {
				const foo = "foo"
				expect(foo).eql('foo')
			})
		})

		it('a single test', () => {
			const foo = "foo"
			expect(foo).eql('foo')
		})
	})
})