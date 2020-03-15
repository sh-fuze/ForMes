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

		let  code = '1001'
			const ID_NOT_EXIST = '5ce79b99da3537277c3f3b66'
			let schema, testTarget, toCreate;
			let id, __v;

			beforeEach(function (done) {
				__v = 0
				console.log('beforeEach clearDB');
				return clearDB(done);
			})

			describe('order -  订单',()=>{
<<<<<<< HEAD
				let orderNum = 10,
=======
				const orderNum = 10,
>>>>>>> a194c6e5b61244116d7a06b806154bc956efba8c
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

		  

					 
				/**/
				 
 	 	beforeEach(() => {
				 	toCreate = {code}
					//Customer
					schema = require('../db/Orderhjm');
					//schema = require('../db/Customer');
					testTarget = require('../server/biz/Orderhjm');
					
					console.log('beforeEach require ');
					//testTarget = require('../server/biz/Customer');
				 })
		
				

				it('string one',()=>{
					let a='10',
					b='2',		 
					s = "Hi Hello World!";
					let z = s.startsWith("Hello");	 
		
					expect(z).eql(false)
				})

				

				/* 
				*/


<<<<<<< HEAD
				it('新增', () => {
=======
				it('create', () => {
>>>>>>> a194c6e5b61244116d7a06b806154bc956efba8c
					return testTarget.create({code, orderNum , link, tags})
						.then(doc => {
							return schema.findById(doc.id)
						})
						.then(doc => {
							doc = doc.toJSON()
							expect(doc.code).eql(code)
							expect(doc.orderNum).eql(orderNum)
							//expect(doc.address).eql(address)
							expect(doc.link).eql(link)
							expect(doc.tags).eql(tags)
						})
						let a='10',
						b='2',		 
						s = "Hi Hello World!";
						let z = s.startsWith("Hello");	 
			
						expect(z).eql(false)
						//expect('1').eql('1')
				})

				it('修改', () => {		
					
					console.log('修改编号、数量、标签信息')

					code='1002'
					  orderNum = 1000,
					//address = 'address',
					link = 'link2',
					tags = 'tags2'


					return dbSave(schema, {code: 'the code'})
						.then(doc => {
							id = doc.id
							__v = doc.__v
							return testTarget.update({id, __v, code, orderNum , link, tags})
						})
						.then(doc => {
							//console.log(100)
							return schema.findById(id)
						})
						.then(doc => {
							doc = doc.toJSON()
							expect(doc.code).eql(code)
							//expect(doc.orderNum).eql(200)
							expect(doc.orderNum).eql(orderNum)
							//expect(doc.address).eql(address)
							expect(doc.link).eql(link)
							//expect(doc.creator).eql(creator)
							expect(doc.tags).eql(tags)
							console.log(doc.orderNum)

							console.log(orderNum)
						})
				})


				 		
				it('删除', () => {		
					
					console.log('删除')

					code='1002'
				 

					return dbSave(schema, {code: 'the code'})
						.then(doc => {
							id = doc.id
							__v = doc.__v
							return testTarget.remove(id)
						})
						.then(doc => {
							//console.log(100)
							return schema.findById(id)
						})
						.then(doc => {

							expect(doc).eql(null)
							 

							console.log('doc is null')
						})
				})



				it('批量新增?未完成', () => {					
					return testTarget.create({code, orderNum , link, tags})
						.then(doc => {
							return schema.findById(doc.id)
						})
						.then(doc => {
							doc = doc.toJSON()
							expect(doc.code).eql(code)
							expect(doc.orderNum).eql(orderNum)
							//expect(doc.address).eql(address)
							expect(doc.link).eql(link)
							expect(doc.tags).eql(tags)
						})
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