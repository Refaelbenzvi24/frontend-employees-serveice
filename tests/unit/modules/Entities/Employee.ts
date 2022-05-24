import { Employee } from "../../../../src/modules/Entities/Employee"


describe('Employee', () => {
	let stub: Employee
	const stubData = {
		id:        1,
		firstName: "David",
		lastName:  "Cohen",
		email:     "david.cohen@email.com",
		password:  "123456",
		startDate: "01/05/2020",
		managerId: null,
		role:      "CEO"
	}

	beforeEach
	(() => {
		stub = new Employee(stubData)
	})

	it('should have Entity class functions', () => {
		expect(stub.transform).toBeDefined()
		expect(stub.transformExclude).toBeDefined()
	})

	describe('transform', () => {
		it('should return transformed object', () => {
			const transformed = {
				id:        1,
				firstName: "David",
				lastName:  "Cohen",
			}

			expect(stub.transform(['id', 'firstName', 'lastName'])).toEqual(transformed)
		})

		it('should return empty object', () => {
			expect(stub.transform([])).toEqual({})
		})

		it('should return the same object', () => {
			expect(stub.transform(['id', 'firstName', 'lastName', 'email', 'password', 'startDate', 'managerId', 'role'])).toEqual(stubData)
		})
	})

	describe('transformExclude', () => {
		it('should return transformed object', () => {
			const transformed = {
				lastName:  "Cohen",
				email:     "david.cohen@email.com",
				password:  "123456",
				startDate: "01/05/2020",
				managerId: null,
				role:      "CEO"
			}

			expect(stub.transformExclude(['id', 'firstName'])).toEqual(transformed)
		})

		it('should return empty object', () => {
			expect(stub.transformExclude([])).toEqual(stubData)
		})

		it('should return the same object', () => {
			expect(stub.transformExclude(['id', 'firstName', 'lastName', 'email', 'password', 'startDate', 'managerId', 'role'])).toEqual({})
		})
	})
})
