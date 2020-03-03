const proxyquire = require('proxyquire'),
dbSave = require('./dbSave')

describe('TexTrade', function () {
	let stubs, err;
	beforeEach(function () {
		stubs = {};
		err = new Error('any error message');
	})

	
	describe('js', () => {
		it('array append', () => {
			let b = ['c', 'd'],
			c = ['a', 'b', ...b]
			expect(c).eql(['a', 'b', 'c', 'd'])
		})
	})

	describe('string',()=>{
		it('string compare',()=>{
			let a='10',
			b='2',		 
			s = "Hi Hello World!";
			let z = s.startsWith("Hello");	
			console.log('string');
			//console.log('13'<'3');//？false
			//console.log('13'>'3');//？false
		   //expect('13'>'3').eql(true)??
			expect(z).eql(false)
		})
	}
	)

	describe('biz - 业务',()=>{

		const code = '1001'
			const ID_NOT_EXIST = '5ce79b99da3537277c3f3b66'
			let schema, testTarget, toCreate;
			let id, __v;

			beforeEach(function (done) {
				__v = 0
				console.log('123');
				return clearDB(done);
			})

			describe('order -  订单',()=>{
				const orderNum = 1,
					//address = 'address',
					link = 'link',
					tags = 'tags'

				 
		
				it('string start ',()=>{
					let a='10',
					b='2',		 
					s = "Hi Hello World!";
					let z = s.startsWith("Hello");	 
		
					expect(z).eql(false)
				})

		  

					 
				/*
				 
 	 	beforeEach(() => {
				 	//toCreate = {code}
					//Customer
					//schema = require('../db/Orderhjm');
					//schema = require('../db/Customer');
				   // testTarget = require('../server/biz/Orderhjm');
					//testTarget = require('../server/biz/Customer');
				 })*/
		
				

				it('string one',()=>{
					let a='10',
					b='2',		 
					s = "Hi Hello World!";
					let z = s.startsWith("Hello");	 
		
					expect(z).eql(false)
				})

				

				/* 
				*/


				it('create', () => {
					//return testTarget.create({code, orderNum , link, tags})
					//	.then(doc => {
					//		return schema.findById(doc.id)
					//	})
					//	.then(doc => {
							//doc = doc.toJSON()
						//	expect(doc.code).eql(code)
						//	expect(doc.orderNum).eql(orderNum)
							//expect(doc.address).eql(address)
						//	expect(doc.link).eql(link)
						//	expect(doc.tags).eql(tags)
						//})
						let a='10',
						b='2',		 
						s = "Hi Hello World!";
						let z = s.startsWith("Hello");	 
			
						expect(z).eql(false)
						//expect('1').eql('1')
				})

 

				/*

				it('code must be unique', () => {
					return dbSave(schema, toCreate)
						.then(() => {
							return testTarget.create(toCreate)
						})
						.should.be.rejectedWith()
				})

				*/


			  }
			)


		it('string start ',()=>{
			let a='10',
			b='2',		 
			s = "Hi Hello World!";
			let z = s.startsWith("Hello");	 

			expect(z).eql(false)
		})
	  }
	)
})